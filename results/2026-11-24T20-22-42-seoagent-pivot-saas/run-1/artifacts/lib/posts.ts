import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export type Post = PostFrontmatter & { slug: string; body: string };

function parseFrontmatter(raw: string): { data: PostFrontmatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error('Post is missing frontmatter');
  }
  const [, frontmatter, body] = match;
  const data: Record<string, string> = {};
  for (const line of frontmatter.split('\n')) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim().replace(/^['"]|['"]$/g, '');
    data[key] = value;
  }
  return {
    data: {
      title: data.title ?? '',
      description: data.description ?? '',
      date: data.date ?? '',
      tags: data.tags ? data.tags.split(',').map((t) => t.trim()) : [],
    },
    body: body.trim(),
  };
}

export function listPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllPosts(): Post[] {
  return listPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), 'utf8');
  const { data, body } = parseFrontmatter(raw);
  return { slug, body, ...data };
}
