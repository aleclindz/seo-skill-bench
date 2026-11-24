export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: 'how-to-write-meeting-minutes-people-actually-read',
    title: 'How to Write Meeting Minutes That People Actually Read',
    description:
      'Most meeting minutes get written and never opened again. Here is a format people actually read, and when to let an AI write it for you.',
    date: '2026-09-02',
    content: [
      'Meeting minutes fail for one reason: they record everything that was said instead of what matters. A transcript is not minutes. Minutes are a filter.',
      '## What actually belongs in minutes',
      'Three things: decisions made, action items with an owner and a date, and anything that changes what someone was already planning to do. Everything else — the discussion that led there — belongs in a transcript, not the summary.',
      '## The format that gets read',
      'Put decisions first, action items second, and discussion notes last (or link out to the full transcript). Nobody scrolls to find the one thing they were waiting on; put it at the top.',
      '## Where AI note-taking actually helps',
      'Writing a clean decisions-and-action-items summary from a 45-minute call is tedious enough that it gets skipped, which is exactly when meetings start producing no record at all. Lumina generates that summary automatically while the call is happening, so the minutes exist whether or not anyone had time to write them.',
    ],
  },
  {
    slug: 'ai-meeting-notes-vs-manual-note-taking',
    title: 'AI Meeting Notes vs. Manual Note-Taking: What Actually Changes',
    description:
      'Taking your own notes in a meeting means you cannot fully listen. Here is what changes, in practice, when an AI assistant takes the notes instead.',
    date: '2026-09-16',
    content: [
      'Taking notes and participating in a conversation compete for the same attention. Something gets dropped — usually either the notes are incomplete, or you miss half the discussion because you were typing.',
      '## The real cost of manual notes',
      "It isn't just quality — it's who ends up doing it. In most teams, one person becomes the de facto note-taker by default, which means their attention is the one being split in every meeting they're in.",
      '## What an AI assistant changes',
      'With a tool like Lumina joining the call, every participant can actually participate, because nobody is trading attention for a written record. The transcript and summary exist regardless of who was paying attention to what.',
      '## What does not change',
      "AI notes don't replace judgment about what matters. Summaries still need a human to confirm a decision was real and not just a tentative idea floated out loud — that's a five-second review, not a rewrite.",
    ],
  },
  {
    slug: 'anatomy-of-a-good-action-item',
    title: 'The Anatomy of a Good Action Item (With Examples)',
    description:
      'Most action items die quietly because they were never specific enough to act on. Here is what separates an action item that gets done from one that gets forgotten.',
    date: '2026-10-01',
    content: [
      'An action item needs three parts to survive past the meeting: a single owner, a specific next action, and a date. Drop any one of the three and it quietly disappears.',
      '## Bad: "We should follow up with the customer"',
      'No owner, no action, no date. This will not get done, and worse, everyone in the meeting will assume someone else has it.',
      '## Good: "Priya sends the renewal quote to Acme by Friday"',
      'One owner, one verb, one date. There is nothing to interpret.',
      '## Why this is where AI summaries earn their keep',
      "The gap between the bad version and the good version is usually just specificity that got lost between what was said out loud and what got written down. Lumina extracts action items directly from the conversation with the owner and date that were actually said, instead of a vague paraphrase written after the fact.",
    ],
  },
  {
    slug: 'zoom-meet-teams-automatic-transcription-compared',
    title: 'Zoom, Google Meet, or Microsoft Teams: Where Automatic Transcription Works Best',
    description:
      'Native transcription quality and action-item support differ a lot across Zoom, Google Meet, and Microsoft Teams. Here is what each platform actually gives you out of the box.',
    date: '2026-10-14',
    content: [
      'All three major meeting platforms now offer some form of built-in transcription, but "built-in" does not mean "equivalent."',
      '## Zoom',
      'Zoom\'s native transcription is solid for single speakers but struggles with crosstalk and does not separate decisions from discussion — you get a transcript, not a summary.',
      '## Google Meet',
      "Meet's transcription is tied to Gemini features and works well for simple recaps, but cross-meeting search and action-item tracking are limited without a third-party layer.",
      '## Microsoft Teams',
      "Teams transcription integrates tightly with the Microsoft 365 ecosystem, which helps if you live in Outlook and OneNote, but less if your team uses other tools.",
      '## Why teams add a dedicated assistant anyway',
      'Platform-native transcription answers "what was said." It rarely answers "what do I need to do now." That gap — turning a transcript into decisions and owned action items, searchable across every platform your team actually uses — is what a dedicated assistant like Lumina is built to close.',
    ],
  },
  {
    slug: 'running-async-standups-without-a-daily-meeting',
    title: 'Running Async Standups Without a Daily Meeting',
    description:
      'A daily standup meeting is often the least necessary meeting on the calendar. Here is how to get the same alignment without the meeting.',
    date: '2026-10-28',
    content: [
      'A standup exists to answer three questions: what did you do, what are you doing next, and what is blocking you. None of those require real-time synchronous attendance.',
      '## What goes wrong with daily standups',
      'For distributed teams, a daily standup means someone is always attending at an inconvenient hour, and the meeting expands to fill its slot even when there is nothing to report.',
      '## The async alternative',
      'Replace the live meeting with a written update per person, posted on a schedule, with blockers flagged for anyone who needs real-time help. Keep a short synchronous meeting only for the blockers that actually need a conversation.',
      '## Where this still needs a meeting',
      'Not every standup can disappear — some teams keep a short weekly sync instead of a daily one. When that meeting does happen, having Lumina capture the decisions and blockers automatically means the written record async teams rely on does not depend on someone manually typing it up afterward.',
    ],
  },
  {
    slug: 'meeting-overload-is-costing-your-team-more-than-time',
    title: 'Meeting Overload Is Costing Your Team More Than Time',
    description:
      'The cost of a meeting is not just the hour on the calendar. Here is the full cost, and three practical ways teams cut it without cutting collaboration.',
    date: '2026-11-10',
    content: [
      "The calendar hour is the smallest part of a meeting's cost. The bigger cost is the context switch before it and the recovery time after it — and the fact that whatever was decided has to be re-explained to everyone who could not attend.",
      '## Why meetings multiply',
      'Every meeting without a clear record creates a second meeting: the one where someone re-explains what happened to people who missed it, or where the same decision gets re-litigated because nobody wrote it down.',
      '## Three fixes that do not require fewer meetings',
      "1. Make every meeting produce a written decision record, not just a calendar entry.\n2. Make that record searchable, so re-explaining a past decision takes a search instead of a meeting.\n3. Default to not inviting people who only need the summary, not the discussion.",
      '## Where this starts',
      'All three depend on a reliable record existing for every meeting without extra manual effort — which is the specific problem Lumina is built to solve.',
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
