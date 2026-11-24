export type Post = { slug: string; title: string; excerpt: string };

export const posts: Post[] = [
  {
    slug: 'ai-meeting-notes-guide',
    title: 'AI Meeting Notes: What They Capture (and What You Still Have to Do)',
    excerpt:
      "A practical look at how AI meeting-notes tools transcribe, summarize, and route action items — and the three things they can't do for you.",
  },
  {
    slug: 'meeting-minutes-template',
    title: 'A Meeting Minutes Template Your Team Will Actually Use',
    excerpt:
      'Most meeting-minutes templates get abandoned after a week. Here is a format built around decisions and owners instead of a wall of notes.',
  },
];
