import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

export type PostFrontmatter = {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  dateModified?: string;
  primaryKeyword: string;
  role: 'PILLAR' | 'SUB_PILLAR' | 'LONG_TAIL';
};

export type Post = PostFrontmatter & { html: string };

function readSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllPosts(): Post[] {
  return readSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    excerpt: data.excerpt,
    date: data.date,
    dateModified: data.dateModified ?? data.date,
    primaryKeyword: data.primaryKeyword,
    role: data.role,
    html: marked.parse(content, { async: false }) as string,
  };
}
