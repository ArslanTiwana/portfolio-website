import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import MarkdownIt from "markdown-it";
import markdownItPrism from "markdown-it-prism";

// Initialize markdown parser
const md = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: true,
  typographer: true,
});

// Add syntax highlighting
md.use(markdownItPrism);

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

// Helper function to extract metadata from markdown
function extractMetadata(content: string): {
  title: string;
  excerpt: string;
  tags: string[];
  readTime: string;
} {
  const lines = content.split('\n');
  const title = lines[0].replace(/^#\s+/, '');
  
  // Extract first paragraph as excerpt
  const contentLines = lines.slice(1).filter(line => line.trim() !== '');
  const excerpt = contentLines.find(line => 
    line.trim() !== '' && !line.startsWith('#') && !line.startsWith('```')
  )?.trim() || '';
  
  // Calculate read time (approximately 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readTime = `${Math.ceil(wordCount / 200)} min read`;
  
  // Extract tags based on content (simple heuristic)
  const tags = [];
  if (content.toLowerCase().includes('nestjs')) tags.push('NestJS');
  if (content.toLowerCase().includes('postgresql')) tags.push('PostgreSQL');
  if (content.toLowerCase().includes('redis')) tags.push('Redis');
  if (content.toLowerCase().includes('typescript')) tags.push('TypeScript');
  if (content.toLowerCase().includes('node.js')) tags.push('Node.js');
  if (content.toLowerCase().includes('database')) tags.push('Database');
  if (content.toLowerCase().includes('performance')) tags.push('Performance');
  if (content.toLowerCase().includes('optimization')) tags.push('Optimization');
  if (content.toLowerCase().includes('caching')) tags.push('Caching');
  if (content.toLowerCase().includes('api')) tags.push('API');
  
  return { title, excerpt, tags, readTime };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog API routes
  app.get("/api/blog", async (req, res) => {
    try {
      const blogsDir = path.join(process.cwd(), 'blogs');
      
      if (!fs.existsSync(blogsDir)) {
        return res.json([]);
      }
      
      const files = fs.readdirSync(blogsDir).filter(file => file.endsWith('.md'));
      const posts: BlogPost[] = [];
      
      for (const file of files) {
        const filePath = path.join(blogsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const metadata = extractMetadata(content);
        const slug = file.replace('.md', '');
        
        posts.push({
          id: slug,
          slug,
          title: metadata.title,
          excerpt: metadata.excerpt,
          content: '', // Don't include full content in list view
          author: 'Muhammad Arslan',
          date: new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          readTime: metadata.readTime,
          tags: metadata.tags,
        });
      }
      
      // Sort by date (newest first)
      posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      res.json(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({ error: 'Failed to fetch blog posts' });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const filePath = path.join(process.cwd(), 'blogs', `${slug}.md`);
      
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
      
      const content = fs.readFileSync(filePath, 'utf-8');
      const metadata = extractMetadata(content);
      const htmlContent = md.render(content);
      
      const post: BlogPost = {
        id: slug,
        slug,
        title: metadata.title,
        excerpt: metadata.excerpt,
        content: htmlContent,
        author: 'Muhammad Arslan',
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        readTime: metadata.readTime,
        tags: metadata.tags,
      };
      
      res.json(post);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      res.status(500).json({ error: 'Failed to fetch blog post' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
