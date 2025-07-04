# Building Scalable APIs with Redis: Caching and Session Management

Redis is more than just a cache—it's a powerful in-memory data structure store that can dramatically improve your API's performance and scalability. Let's explore how to leverage Redis effectively in your applications.

## Why Redis for API Scaling?

Redis excels at solving common API scaling challenges:

- **Sub-millisecond response times**
- **High throughput** (100k+ operations/second)
- **Rich data structures** (strings, hashes, lists, sets, sorted sets)
- **Built-in persistence** options
- **Horizontal scaling** with Redis Cluster

## Setting Up Redis with Node.js

### Installation and Basic Setup
```bash
# Install Redis client
npm install redis

# Install types for TypeScript
npm install -D @types/redis
```

### Connection Configuration
```typescript
import { createClient } from 'redis';

const redisClient = createClient({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
  database: 0,
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

export default redisClient;
```

## Caching Strategies

### 1. Cache-Aside Pattern
```typescript
class UserService {
  private redis = redisClient;
  
  async getUser(userId: string): Promise<User> {
    const cacheKey = `user:${userId}`;
    
    // Try cache first
    const cachedUser = await this.redis.get(cacheKey);
    if (cachedUser) {
      return JSON.parse(cachedUser);
    }
    
    // Fetch from database
    const user = await this.database.findUser(userId);
    
    // Cache the result
    await this.redis.setex(cacheKey, 3600, JSON.stringify(user));
    
    return user;
  }
}
```

### 2. Write-Through Caching
```typescript
class ProductService {
  async updateProduct(productId: string, updates: ProductUpdate): Promise<Product> {
    // Update database
    const product = await this.database.updateProduct(productId, updates);
    
    // Update cache immediately
    const cacheKey = `product:${productId}`;
    await this.redis.setex(cacheKey, 1800, JSON.stringify(product));
    
    return product;
  }
}
```

### 3. Cache Invalidation
```typescript
class CacheService {
  async invalidatePattern(pattern: string): Promise<void> {
    const keys = await this.redis.keys(pattern);
    if (keys.length > 0) {
      await this.redis.del(...keys);
    }
  }
  
  async invalidateUserCache(userId: string): Promise<void> {
    await this.invalidatePattern(`user:${userId}*`);
  }
}
```

## Session Management

### Redis Session Store
```typescript
import session from 'express-session';
import RedisStore from 'connect-redis';

const sessionStore = new RedisStore({
  client: redisClient,
  prefix: 'sess:',
  ttl: 86400, // 24 hours
});

app.use(session({
  store: sessionStore,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  },
}));
```

### Custom Session Management
```typescript
class SessionManager {
  private redis = redisClient;
  
  async createSession(userId: string, sessionData: any): Promise<string> {
    const sessionId = this.generateSessionId();
    const sessionKey = `session:${sessionId}`;
    
    const session = {
      userId,
      ...sessionData,
      createdAt: new Date().toISOString(),
    };
    
    await this.redis.setex(sessionKey, 3600, JSON.stringify(session));
    return sessionId;
  }
  
  async getSession(sessionId: string): Promise<any> {
    const sessionKey = `session:${sessionId}`;
    const sessionData = await this.redis.get(sessionKey);
    
    if (!sessionData) return null;
    
    // Extend session TTL on access
    await this.redis.expire(sessionKey, 3600);
    
    return JSON.parse(sessionData);
  }
}
```

## Rate Limiting with Redis

### Sliding Window Rate Limiter
```typescript
class RateLimiter {
  private redis = redisClient;
  
  async isAllowed(
    key: string, 
    limit: number, 
    window: number
  ): Promise<boolean> {
    const now = Date.now();
    const pipeline = this.redis.pipeline();
    
    // Remove old entries
    pipeline.zremrangebyscore(key, 0, now - window * 1000);
    
    // Count current requests
    pipeline.zcard(key);
    
    // Add current request
    pipeline.zadd(key, now, now);
    
    // Set expiry
    pipeline.expire(key, window);
    
    const results = await pipeline.exec();
    const count = results[1][1] as number;
    
    return count < limit;
  }
}

// Usage in middleware
const rateLimiter = new RateLimiter();

const rateLimit = (limit: number, window: number) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const key = `rate_limit:${req.ip}`;
    const allowed = await rateLimiter.isAllowed(key, limit, window);
    
    if (!allowed) {
      return res.status(429).json({ error: 'Rate limit exceeded' });
    }
    
    next();
  };
};
```

## Advanced Redis Patterns

### 1. Pub/Sub for Real-time Updates
```typescript
class NotificationService {
  private publisher = redisClient;
  private subscriber = redisClient.duplicate();
  
  async publishUserUpdate(userId: string, update: any): Promise<void> {
    const channel = `user:${userId}:updates`;
    await this.publisher.publish(channel, JSON.stringify(update));
  }
  
  subscribeToUserUpdates(userId: string, callback: (update: any) => void): void {
    const channel = `user:${userId}:updates`;
    
    this.subscriber.subscribe(channel, (message) => {
      const update = JSON.parse(message);
      callback(update);
    });
  }
}
```

### 2. Distributed Locks
```typescript
class DistributedLock {
  private redis = redisClient;
  
  async acquireLock(
    resource: string, 
    ttl: number = 30000
  ): Promise<string | null> {
    const lockKey = `lock:${resource}`;
    const lockValue = this.generateLockValue();
    
    const result = await this.redis.set(
      lockKey, 
      lockValue, 
      'PX', 
      ttl, 
      'NX'
    );
    
    return result === 'OK' ? lockValue : null;
  }
  
  async releaseLock(resource: string, lockValue: string): Promise<boolean> {
    const lockKey = `lock:${resource}`;
    
    const luaScript = `
      if redis.call("get", KEYS[1]) == ARGV[1] then
        return redis.call("del", KEYS[1])
      else
        return 0
      end
    `;
    
    const result = await this.redis.eval(luaScript, 1, lockKey, lockValue);
    return result === 1;
  }
}
```

## Performance Optimization

### 1. Pipeline Operations
```typescript
class BatchOperations {
  private redis = redisClient;
  
  async batchGetUsers(userIds: string[]): Promise<User[]> {
    const pipeline = this.redis.pipeline();
    
    userIds.forEach(userId => {
      pipeline.get(`user:${userId}`);
    });
    
    const results = await pipeline.exec();
    
    return results.map(([err, result]) => {
      if (err || !result) return null;
      return JSON.parse(result as string);
    }).filter(Boolean);
  }
}
```

### 2. Memory Optimization
```typescript
class MemoryOptimizer {
  // Use hash for related data
  async setUserProfile(userId: string, profile: UserProfile): Promise<void> {
    const key = `user:${userId}:profile`;
    await this.redis.hmset(key, {
      name: profile.name,
      email: profile.email,
      avatar: profile.avatar,
      lastLogin: profile.lastLogin.toISOString(),
    });
  }
  
  // Use appropriate data structures
  async addToRecentlyViewed(userId: string, itemId: string): Promise<void> {
    const key = `user:${userId}:recent`;
    await this.redis.lpush(key, itemId);
    await this.redis.ltrim(key, 0, 9); // Keep only 10 items
  }
}
```

## Monitoring and Debugging

### Redis Monitoring
```typescript
class RedisMonitor {
  async getRedisStats(): Promise<any> {
    const info = await redisClient.info();
    const stats = this.parseRedisInfo(info);
    
    return {
      memory: stats.used_memory_human,
      connections: stats.connected_clients,
      operations: stats.total_commands_processed,
      hitRate: this.calculateHitRate(stats),
    };
  }
  
  private calculateHitRate(stats: any): number {
    const hits = parseInt(stats.keyspace_hits);
    const misses = parseInt(stats.keyspace_misses);
    return hits / (hits + misses) * 100;
  }
}
```

## Best Practices

### 1. Key Naming Conventions
```typescript
const keys = {
  user: (id: string) => `user:${id}`,
  userSessions: (id: string) => `user:${id}:sessions`,
  rateLimit: (ip: string) => `rate_limit:${ip}`,
  cache: (namespace: string, key: string) => `cache:${namespace}:${key}`,
};
```

### 2. Error Handling
```typescript
class RedisWrapper {
  private redis = redisClient;
  
  async safeGet(key: string): Promise<string | null> {
    try {
      return await this.redis.get(key);
    } catch (error) {
      console.error('Redis GET error:', error);
      return null; // Graceful degradation
    }
  }
  
  async safeSet(key: string, value: string, ttl?: number): Promise<boolean> {
    try {
      if (ttl) {
        await this.redis.setex(key, ttl, value);
      } else {
        await this.redis.set(key, value);
      }
      return true;
    } catch (error) {
      console.error('Redis SET error:', error);
      return false;
    }
  }
}
```

## Conclusion

Redis is a powerful tool for building scalable APIs, offering solutions for caching, session management, rate limiting, and real-time features. The key to success is understanding your application's access patterns and choosing the right Redis data structures and patterns.

Start with basic caching, monitor performance, and gradually implement more advanced patterns as your application scales. Remember to always have fallback mechanisms when Redis is unavailable.

In the next post, we'll explore Redis Cluster setup and advanced scaling techniques for high-availability systems.