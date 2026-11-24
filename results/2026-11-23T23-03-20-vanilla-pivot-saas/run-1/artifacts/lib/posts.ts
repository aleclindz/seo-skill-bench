export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'meeting-overload',
    title: 'The Real Cost of Meeting Overload (and How Teams Fix It)',
    description:
      'Back-to-back meetings quietly drain a team the same way an overflowing inbox used to. Here is what meeting overload actually costs you, and how an AI meeting assistant cuts it down.',
    publishedAt: '2026-02-03',
    body: [
      'A few years ago the thing eating your team’s day was an inbox nobody could get to zero. Today it’s the calendar: back-to-back calls, half of them recaps of other calls, with the actual work happening in the gaps that are left over.',
      'Meeting overload shows up the same way inbox overload did — as a backlog you can’t see. Nobody tracks "unread meetings," so the cost stays invisible until someone asks why a decision from three weeks ago never got written down.',
      'The fix isn’t fewer tools, it’s less manual busywork around the meetings you do keep. Lumina joins the call, writes the transcript, and turns it into a summary with decisions and owners attached — so a meeting stops being something you have to personally remember.',
      'If your team used to fight inbox zero, you already know the playbook: reduce what needs manual handling, automate the recap, and keep only the meetings that need a live room.',
    ],
  },
  {
    slug: 'meeting-summary-template',
    title: 'How to Write a Meeting Summary Your Team Actually Reads',
    description:
      'A good meeting summary gets read in 30 seconds and saves everyone else the hour they would have spent in the call. Here is the structure that works, and how to automate it.',
    publishedAt: '2026-02-17',
    body: [
      'Most meeting notes fail for the same reason: they’re a transcript, not a summary. Nobody wants to scroll a wall of text to find out what they’re on the hook for.',
      'A summary people actually read has three parts: decisions made, open questions, and action items with an owner and a date. Everything else is reference material that belongs in the transcript, not the recap.',
      'Write the summary for the person who wasn’t in the room. If it only makes sense to attendees, it isn’t a summary yet.',
      'Lumina generates this structure automatically after every call — decisions, blockers, and action items routed to the people who own them — so the format stays consistent even when nobody has time to write it by hand.',
    ],
  },
  {
    slug: 'ai-meeting-assistant-vs-manual-notes',
    title: 'AI Meeting Assistant vs. Manual Notetaking: What Changes for Your Team',
    description:
      'Taking your own notes works until a team grows past a few people. Here is what actually changes when an AI meeting assistant takes over transcription and recaps.',
    publishedAt: '2026-03-02',
    body: [
      'Manual notetaking scales fine for a two-person call. It breaks down the moment one person is responsible for both participating and capturing everything that was said — something always gets missed.',
      'An AI meeting assistant removes that tradeoff: it records and transcribes every call automatically, so the person attending can stay in the conversation instead of splitting attention with a notes doc.',
      'The bigger change is consistency. Manual notes vary by who is writing them. Automated summaries follow the same structure every time, which makes old meetings searchable instead of scattered across a dozen personal note styles.',
      'Teams that make the switch usually keep taking notes by hand for small, informal syncs, and let the assistant handle anything with a decision attached to it — planning calls, customer meetings, and reviews.',
    ],
  },
  {
    slug: 'zoom-meet-teams-ai-notetaker',
    title: 'Zoom, Google Meet, or Teams: Where Should Your AI Notetaker Live?',
    description:
      'Most teams run calls across more than one platform. Here is what to check before picking an AI meeting assistant, so it actually covers where your meetings happen.',
    publishedAt: '2026-03-16',
    body: [
      'Picking a meeting assistant isn’t just about transcription quality — it’s about whether it shows up where your meetings actually are. A tool that only supports Zoom is a problem the day sales starts taking calls on Google Meet.',
      'Check three things: does it join automatically from a calendar invite, does it work across every platform your team uses, and does the summary land where the team already works — Slack, Notion, or wherever decisions get tracked.',
      'Lumina joins Zoom, Google Meet, and Microsoft Teams calls the same way, so switching platforms mid-week doesn’t mean losing recap coverage for half your meetings.',
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
