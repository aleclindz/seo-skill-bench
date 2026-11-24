export type Block =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  excerpt: string;
  role: 'PILLAR' | 'SUB_PILLAR' | 'LONG_TAIL';
  cluster: string;
  body: Block[];
};
