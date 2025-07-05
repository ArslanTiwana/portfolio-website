import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import markdownItPrism from 'markdown-it-prism';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
}).use(markdownItPrism);

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
  html: string;
}

function extractMetadata(content: string): {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
} {
  const lines = content.split('\n');
  const title = lines[0]?.replace(/^#\s+/, '') || 'Untitled';
  
  // Extract first paragraph for excerpt
  const firstParagraph = lines.find(line => 
    line.trim() && !line.startsWith('#') && !line.startsWith('```')
  ) || '';
  
  const excerpt = firstParagraph.length > 150 
    ? firstParagraph.substring(0, 150) + '...'
    : firstParagraph;
  
  // Calculate read time (assuming 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);
  
  return {
    title,
    excerpt,
    author: 'Muhammad Arslan',
    date: new Date().toISOString().split('T')[0],
    readTime: `${readTime} min read`,
    tags: ['Development', 'Programming'],
  };
}

async function buildBlogs() {
  const blogsDir = path.join(process.cwd(), 'blogs');
  const outputDir = path.join(process.cwd(), 'client/public/blogs');
  
  // Ensure output directory exists
  await fs.ensureDir(outputDir);
  
  const blogFiles = await fs.readdir(blogsDir);
  const blogs: BlogPost[] = [];
  
  for (const file of blogFiles) {
    if (!file.endsWith('.md')) continue;
    
    const filePath = path.join(blogsDir, file);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    const { data, content } = matter(fileContent);
    const metadata = extractMetadata(content);
    
    const slug = file.replace('.md', '');
    const id = slug;
    
    const html = md.render(content);
    
    const blogPost: BlogPost = {
      id,
      title: data.title || metadata.title,
      excerpt: data.excerpt || metadata.excerpt,
      content,
      author: data.author || metadata.author,
      date: data.date || metadata.date,
      readTime: data.readTime || metadata.readTime,
      tags: data.tags || metadata.tags,
      slug,
      html,
    };
    
    blogs.push(blogPost);
    
    // Write individual blog post HTML
    const blogPostPath = path.join(outputDir, `${slug}.json`);
    await fs.writeFile(blogPostPath, JSON.stringify(blogPost, null, 2));
  }
  
  // Write blog index
  const blogIndex = blogs.map(blog => ({
    id: blog.id,
    title: blog.title,
    excerpt: blog.excerpt,
    author: blog.author,
    date: blog.date,
    readTime: blog.readTime,
    tags: blog.tags,
    slug: blog.slug,
  }));
  
  const indexPath = path.join(outputDir, 'index.json');
  await fs.writeFile(indexPath, JSON.stringify(blogIndex, null, 2));
  
  console.log(`✅ Built ${blogs.length} blog posts`);
}

buildBlogs().catch(console.error);