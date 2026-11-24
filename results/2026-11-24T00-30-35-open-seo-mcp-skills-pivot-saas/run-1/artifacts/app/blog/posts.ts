export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: 'meeting-notes-that-people-actually-read',
    title: 'How to Write Meeting Notes That People Actually Read',
    description:
      'Most meeting notes get written and never opened again. Here is a format that people actually come back to.',
    publishedAt: '2026-01-12',
    content: [
      'Most meeting notes fail for the same reason: they read like a transcript instead of a summary. Nobody wants to scroll through everything that was said to find the one thing they were responsible for.',
      "The fix is to lead with outcomes, not chronology. Put decisions first, action items second, and the discussion that led there last — if you include it at all. Each action item needs an owner and a date, or it won't get done.",
      'Lumina writes notes in this order automatically: every call gets a summary with decisions and action items up top, with the full speaker-labeled transcript underneath for anyone who needs the detail.',
    ],
  },
  {
    slug: 'cost-of-status-meetings',
    title: 'The Weekly Status Meeting Is Costing You More Than You Think',
    description:
      'A 30-minute status meeting with eight people is four hours of company time. Here is how to get most of it back.',
    publishedAt: '2026-01-26',
    content: [
      'A 30-minute status meeting with eight attendees costs four person-hours, every week. Multiply that across a quarter and most teams are spending the equivalent of several work-weeks on updates that could have been read instead of said out loud.',
      'The usual fix — "just cancel the meeting" — fails because teams still need the shared context a sync creates. What actually works is separating status (which can be written) from discussion (which needs a room).',
      'Teams that record and transcribe their standups with Lumina can skip the live recap entirely: the summary and action items go out automatically, and the meeting itself can shrink to just the decisions that need a real conversation.',
    ],
  },
  {
    slug: 'async-standups',
    title: 'Async Standups: How to Cut Meeting Time Without Losing Alignment',
    description:
      'Going fully async breaks alignment for most teams. A hybrid approach keeps the signal without the daily meeting.',
    publishedAt: '2026-02-09',
    content: [
      "Fully async standups look great on paper and fail in practice for a lot of teams — written updates lose tone, nobody reads them closely, and blockers get buried in a thread nobody checks.",
      'A hybrid approach works better: keep a short, synchronous meeting for anything that is actually blocking someone, and let a recorded recap carry the routine updates.',
      "If you're already meeting, you don't need a separate async update at all — Lumina turns the meeting itself into the async artifact, with action items routed to each owner right after the call ends.",
    ],
  },
  {
    slug: 'zoom-meet-teams-transcription-compared',
    title: 'Zoom vs. Google Meet vs. Microsoft Teams: Transcription Compared',
    description:
      'A practical look at how the built-in transcription in Zoom, Meet, and Teams compares to a dedicated meeting assistant.',
    publishedAt: '2026-02-20',
    content: [
      'Zoom, Google Meet, and Microsoft Teams all now ship some form of built-in transcription, but coverage and quality vary a lot by plan tier, and none of them extract action items or decisions on their own.',
      "If your team is split across all three — which is common once you're coordinating with customers and partners — relying on each platform's native transcription means three different formats and three different places to search for what was said.",
      'Lumina joins any of the three the same way: one calendar connection, one consistent summary format, and one searchable archive regardless of which tool the call happened on.',
    ],
  },
  {
    slug: 'decisions-that-stick',
    title: 'How to Make Sure Decisions Made in Meetings Actually Stick',
    description:
      'Decisions made in a meeting and never written down get re-litigated two weeks later. Here is how to stop that.',
    publishedAt: '2026-03-03',
    content: [
      'The most common source of repeated arguments on a team is not disagreement — it is forgetting that a decision was already made. Without a written record, every decision is implicitly reopened the next time it comes up.',
      'Writing decisions down only works if the record is easy to find later. A decision buried in a chat thread from six weeks ago may as well not exist.',
      "Lumina pulls decisions out of the conversation automatically and keeps them attached to the meeting they came from, so there's always a specific, searchable answer to \"wait, didn't we already decide this?\"",
    ],
  },
  {
    slug: 'meeting-recap-template',
    title: 'A Simple Template for Meeting Recaps (Copy This)',
    description:
      'A short, reusable template for sending a meeting recap that people will actually read in under a minute.',
    publishedAt: '2026-03-17',
    content: [
      "A good recap fits in one screen: what was decided, who owns what next, and by when. Everything else is optional context, not the headline.",
      'Template: Decisions (bulleted, no more than five), Action items (owner + due date), and Notes (the detail, for anyone who wants it). Send it within the hour, while the meeting is still fresh for everyone who was in it.',
      'This is the exact structure Lumina generates after every call, so the recap goes out automatically instead of depending on someone remembering to write it.',
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
