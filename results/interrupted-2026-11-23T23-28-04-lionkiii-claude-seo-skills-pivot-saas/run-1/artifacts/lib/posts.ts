export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  paragraphs: string[];
};

export const posts: Post[] = [
  {
    slug: 'meeting-notes-people-actually-read',
    title: 'How to Write Meeting Notes People Actually Read',
    excerpt:
      'Most meeting notes get written and never opened again. Here is a format that gets read.',
    description:
      'A practical format for meeting notes that teammates actually open: lead with decisions, not a transcript, and route action items to owners.',
    date: '2026-09-02',
    paragraphs: [
      'Most meeting notes fail for the same reason: they are written as a record of what was said instead of what matters. A wall of chronological notes asks the reader to do the work of finding the three things they actually need — what was decided, what changed, and what they now owe someone.',
      'Lead with decisions, not discussion. The first section of any set of notes should be a short list of what was decided, in plain language, with no hedging. If nothing was decided, say that explicitly — it tells the reader the meeting was exploratory, not binding.',
      'Action items need an owner and a date, not just a task. "Follow up on pricing" is not an action item; "Priya sends updated pricing to Legal by Friday" is. Notes without owners quietly become nobody\'s job.',
      'Lumina generates this structure automatically from the call: decisions, action items with owners, and open questions, pulled from the transcript rather than typed live. If you want to see the format in your own meetings, you can start free from the homepage.',
    ],
  },
  {
    slug: 'action-item-tracking-that-works',
    title: "Action Items: How to Track Them So They Don't Get Lost",
    excerpt:
      'Action items die in forgotten documents. A simple routing habit keeps them alive.',
    description:
      'Why action items get lost after meetings, and a lightweight routing system — owner, deadline, and a home outside the notes doc — that keeps them visible.',
    date: '2026-09-16',
    paragraphs: [
      'An action item written down in a meeting notes doc and never looked at again is not tracked, it is archived. Tracking means the item lives somewhere people check daily, not somewhere they check when they remember the meeting happened.',
      'The fix is routing, not better notes. As soon as an action item exists, it should move out of the notes doc and into the tool the owner already works in — a Slack message, a Notion task, a ticket. The notes doc stays the record of what was decided; it should not also be the task tracker.',
      'Deadlines without a review point do not work either. "By end of week" with no Monday check-in is a deadline that quietly slips. Pair every action item with a short recurring review — even five minutes at the start of the next standup — until it is done.',
      'This is the problem Lumina\'s action-item routing solves directly: items extracted from the call get pushed to Slack or Notion automatically, with an owner and date attached, so they land where the work already happens instead of in a doc nobody reopens. See how it works on the features page.',
    ],
  },
  {
    slug: 'async-standups-for-remote-teams',
    title: 'Async Standups: A Practical Guide for Remote Teams',
    excerpt:
      'A daily synchronous standup across time zones is a tax on the team. Here is an async version that still works.',
    description:
      'How to run an async standup for a distributed team: what to ask, how to keep it under two minutes to write, and when a live meeting is still worth it.',
    date: '2026-10-07',
    paragraphs: [
      'A daily 15-minute standup sounds cheap until you multiply it by time zones. For a distributed team, a synchronous standup often means someone is joining at 7am or staying up past dinner, every single day, for a ritual that could be asynchronous.',
      'A good async standup answers three questions, written in under two minutes: what I finished since the last update, what I am doing today, and what is blocking me. Anything longer turns into a status report nobody reads; anything shorter loses the blockers, which are the only part that actually needs another person\'s attention.',
      'Async does not mean silent. Blockers should get a response within a few hours, not whenever someone next opens the channel. The habit that keeps async standups alive is a teammate or lead skimming for blockers daily and following up directly, rather than waiting for the next live meeting.',
      'Teams that keep a weekly synchronous meeting alongside daily async updates tend to do best — the async updates handle status, and the live meeting (recorded and summarized by Lumina) handles the decisions that actually need discussion.',
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
