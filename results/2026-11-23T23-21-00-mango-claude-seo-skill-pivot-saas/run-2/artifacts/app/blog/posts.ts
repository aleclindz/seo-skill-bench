export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  publishedAt: string;
};

export const posts: Post[] = [
  {
    slug: 'meeting-notes-template',
    title: 'A meeting notes template your team will actually use',
    excerpt:
      'Most meeting notes templates get abandoned after a week. Here is a simple structure — decisions, action items, open questions — that sticks.',
    publishedAt: '2026-10-02',
    body: [
      'Most meeting notes templates get abandoned after a week because they ask people to write too much. The ones that survive have three sections: decisions, action items, and open questions. Nothing else.',
      'Decisions capture what was agreed, in one line each, with who owns the follow-through. Action items are a checklist, not prose — a task, an owner, a date. Open questions are the things nobody resolved, so they do not get lost between meetings.',
      'Lumina generates this structure automatically from the call transcript, so the template enforces itself instead of relying on whoever is taking notes that day.',
    ],
  },
  {
    slug: 'reduce-meeting-overload',
    title: 'Why your team has too many meetings (and how to fix it)',
    excerpt:
      'Meeting overload usually isn’t a calendar problem. It’s a trust problem — nobody believes they’ll get the context without being in the room.',
    publishedAt: '2026-09-18',
    body: [
      'Teams rarely cut meetings by scheduling less. They cut meetings when people trust that the context from a meeting they skip will still reach them.',
      'That trust comes from a reliable record: a summary, the decisions made, and the action items assigned, available minutes after the call ends. Once that exists, "optional" meetings become genuinely optional.',
      'Start by auto-recapping your three most-attended recurring meetings for a month, then ask who still needs to attend live. Most teams find the answer is fewer people than the invite list.',
    ],
  },
  {
    slug: 'async-standup-guide',
    title: 'Running async standups without losing the signal',
    excerpt:
      'Async standups fail when they turn into a status report nobody reads. Here is how to keep the signal without the live meeting.',
    publishedAt: '2026-08-27',
    body: [
      'Async standups fail for the same reason long email threads fail: there is no forcing function to keep them short, so they turn into a status report nobody reads.',
      'The fix is structure, not discipline: blockers first, then yesterday, then today, each capped at one or two lines. If a blocker needs a real conversation, that is the signal to pull two people into a quick call — the async format is for everything else.',
      'Recording the occasional live standup and letting Lumina turn it into the same three-line format keeps the habit consistent across a hybrid team.',
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
