import type { Post } from './types';
import { post as aiMeetingAssistant } from './ai-meeting-assistant';

const posts: Post[] = [aiMeetingAssistant];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
