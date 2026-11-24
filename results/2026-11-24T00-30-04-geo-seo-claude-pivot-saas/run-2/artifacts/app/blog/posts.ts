export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'inboxzap-is-now-lumina',
    title: 'InboxZap is now Lumina: why we rebuilt for meetings, not inboxes',
    excerpt:
      "If you knew us as InboxZap, here's what changed, why, and where to find us now.",
    date: '2026-01-12',
    body: [
      "If you landed here looking for InboxZap, you're in the right place — we're now Lumina, an AI meeting assistant for teams.",
      "InboxZap helped people bulk-delete old emails and get to inbox zero. It worked, but we kept hearing the same thing from teams: email cleanup wasn't the problem that cost them the most time. Meetings were. People left calls unsure what was decided, forgot to write anything down, and re-explained the same context in the next meeting.",
      'So we rebuilt the product around that problem. Lumina joins your Zoom, Google Meet, or Microsoft Teams calls, records and transcribes them, and turns every meeting into a summary with decisions and action items — automatically, before you are back at your desk.',
      "Your InboxZap account and data were not carried over, since this is a different product built for a different job. If you still need to clean up an inbox, any of the Gmail or Outlook built-in tools (filters, the \"older than\" search operator, or Sweep) will get you most of the way there.",
      "If meetings are what's actually eating your week, start a free Lumina trial — it's free for teams up to 5.",
    ],
  },
  {
    slug: 'how-to-write-meeting-minutes-people-actually-read',
    title: 'How to write meeting minutes people actually read',
    excerpt:
      'Most meeting notes get written and never opened again. Here is a format that people actually come back to.',
    date: '2026-02-03',
    body: [
      'Most meeting notes fail for a predictable reason: they record everything that was said instead of what needs to happen next. Nobody reopens a wall of text to find one action item.',
      "A format that holds up: three sections, always in the same order. Decisions — what was actually agreed, in one line each. Open questions — what's still unresolved and who owns closing it. Action items — task, owner, due date, nothing else.",
      'Skip the play-by-play. If someone needs the full discussion, that is what the recording and transcript are for — the notes exist to let everyone else skip the meeting entirely and still know what changed.',
      'Send the recap within the hour, not at end of day. Decisions decay fast once a meeting ends; the longer the gap, the more people quietly do something other than what was agreed.',
      "This is exactly the recap Lumina generates automatically after every call — decisions, open questions, and action items, routed to the people who own them."
      ,
    ],
  },
  {
    slug: 'async-standups-vs-daily-meetings',
    title: 'Async standups vs. daily meetings: what actually saves time',
    excerpt:
      'A daily 15-minute standup costs a 10-person team over 30 hours a month. Here is when async actually wins — and when it does not.',
    date: '2026-02-18',
    body: [
      'A 15-minute daily standup with 10 people is not 15 minutes — it is 150 person-minutes a day, or roughly 30 hours a month. That math is why async standups caught on.',
      "Async works well when updates are genuinely independent: status, blockers, what shipped. It works poorly when the team needs to actually make a decision together, since text threads are a slow way to resolve disagreement.",
      "The teams that get the best of both run a short synchronous meeting only when there is a real decision to make, and handle status updates async the rest of the time — then keep a searchable record of both, so nothing depends on someone remembering a thread from three weeks ago.",
      'If you do keep a live standup, record and summarize it. A two-minute meeting recap takes less time to read than the meeting took to sit through.',
    ],
  },
  {
    slug: 'meeting-overload-is-costing-your-team-hours',
    title: 'Meeting overload is costing your team more than you think',
    excerpt:
      'The average knowledge worker spends over 20 hours a month in meetings. Most of that time is not the problem — forgetting what happened in them is.',
    date: '2026-03-05',
    body: [
      'Meeting overload rarely gets fixed by having fewer meetings — most of them exist for a real reason. The actual cost shows up afterward: decisions that get re-litigated because nobody wrote them down, and action items that quietly die because they lived only in someone\'s memory.',
      'A useful test: for any recurring meeting, ask whether anyone could reconstruct what was decided a week later without asking around. If the answer is no, the meeting is not the expensive part — the lack of a record is.',
      'Recording and auto-summarizing meetings does not reduce how many you attend, but it removes the hidden tax: the re-explaining, the "wait, did we decide that?" threads, and the action items that fall through because they were never written down anywhere searchable.',
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
