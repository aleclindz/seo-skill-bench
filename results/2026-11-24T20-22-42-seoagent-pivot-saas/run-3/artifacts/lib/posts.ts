import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  body: string;
};

function parsePost(slug: string, raw: string): Post {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error(`Post "${slug}" is missing frontmatter`);
  }
  const [, frontmatter, body] = match;
  const fields: Record<string, string> = {};
  for (const line of frontmatter.split('\n')) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    fields[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"(.*)"$/, '$1');
  }
  return {
    slug,
    title: fields.title ?? slug,
    description: fields.description ?? '',
    date: fields.date ?? '',
    tags: (fields.tags ?? '').split(',').map((t) => t.trim()).filter(Boolean),
    body: body.trim(),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => parsePost(file.replace(/\.md$/, ''), fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
