export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'meeting-summary-template',
    title: 'How to Write a Meeting Summary People Actually Read',
    description:
      'A meeting summary template that separates decisions, action items, and context so recaps get read instead of ignored.',
    excerpt:
      'Most recaps get skimmed and forgotten because they read like a transcript. Here is a structure that gets read.',
    publishedAt: '2026-09-02',
    body: [
      "Most meeting recaps fail for the same reason: they read like a transcript instead of a decision log. If someone has to scroll through six paragraphs to find out what they're on the hook for, they'll skip the recap entirely and ask you again in Slack.",
      'A recap that gets read has three sections, in this order: decisions, action items with owners and dates, and open questions. Everything else — the back-and-forth, the tangents, the context that only mattered in the room — belongs in the full transcript, not the summary.',
      "Owners matter more than wording. 'We should follow up with legal' is not an action item; 'Priya follows up with legal by Friday' is. If a line in your recap doesn't have a name attached, it's not going to happen.",
      "Send the recap within the hour, not at end of day. The value of a meeting summary drops fast once people have moved on to the next thing — by the next morning, most readers only care whether their name appears in it.",
    ],
  },
  {
    slug: 'action-items-meeting-follow-through',
    title: "Action Items vs. To-Dos: Why Meeting Follow-Through Fails",
    description:
      'Why action items from meetings get dropped more often than ordinary to-dos, and the three changes that fix it.',
    excerpt:
      'Action items go stale faster than any other task on your list. Here is why, and what actually fixes it.',
    publishedAt: '2026-09-16',
    body: [
      "An action item from a meeting dies in a different way than a normal to-do. A to-do you wrote yourself has context baked in — you know why it matters. An action item assigned to you in a meeting is secondhand: by the time you look at it again, you've forgotten the reasoning, and reconstructing it takes longer than doing the task.",
      'That gap is why so many meeting follow-ups never happen. The fix is not more reminders — it is attaching the "why" to the task at the moment it is created, not after.',
      "Three changes make the biggest difference: write the action item with its owner and due date in the same sentence it was agreed on, link it to the exact moment in the recording or transcript where it came up, and route it to wherever that person already tracks work instead of a separate meeting-notes doc nobody reopens.",
      "Teams that do this consistently report fewer 'wait, who was supposed to do that?' messages the following week, not because people got more disciplined, but because the task showed up with its context intact.",
    ],
  },
  {
    slug: 'ai-meeting-notes-accuracy',
    title: 'AI Meeting Notes: What They Get Right (and Wrong)',
    description:
      'A practical look at where AI-generated meeting notes are reliable, where they still need a human pass, and how to check the difference.',
    excerpt:
      'AI notes are reliable for a narrower slice of a meeting than most teams assume. Here is where to trust them.',
    publishedAt: '2026-10-01',
    body: [
      'AI meeting notes are good at the parts of a meeting that are explicit: who said what, what was decided, what was assigned to whom. Speaker-labeled transcription and summarization have both gotten accurate enough that for a well-structured meeting, the recap needs little editing.',
      'They are weaker on the parts of a meeting that depend on things that were never said out loud — sarcasm, a decision implied by a shrug and a change of subject, or a disagreement that got resolved offline afterward. A transcript can only summarize what was spoken.',
      'The practical rule: trust AI notes fully for status updates, decisions, and assigned action items, where the language is usually direct. Give a quick human read to notes from any meeting that involved negotiation, conflict, or a decision that was more implied than stated.',
      "Cross-checking is fast if the tool links each summary line back to the moment in the transcript it came from — you can confirm a decision in ten seconds instead of re-listening to the whole call.",
    ],
  },
  {
    slug: 'async-standup-guide',
    title: 'Async Standups: A Practical Alternative to Daily Meetings',
    description:
      'How to replace a daily standup meeting with an async version without losing visibility into blockers.',
    excerpt:
      'A daily standup meeting costs more than its 15 minutes once you count context-switching across a whole team.',
    publishedAt: '2026-10-14',
    body: [
      "A 15-minute daily standup with eight people isn't a 15-minute meeting — it's two hours of combined time, plus the context-switching cost of stopping and restarting deep work at a fixed hour every day. For distributed teams across time zones, it's often worse: someone is always joining at an inconvenient hour.",
      'An async standup replaces the live meeting with a short written or recorded update: what I did yesterday, what I am doing today, what is blocking me. The discipline that makes it work is keeping updates short and tied to a fixed daily deadline, not optional and not a wall of text.',
      'The part teams usually get wrong is blockers. In a live standup, a blocker gets a reaction and a follow-up conversation immediately. Async, a blocker posted at 9am can sit unanswered until the next person checks in. The fix is routing anything flagged as a blocker straight into a thread or a quick huddle, rather than letting it wait in the daily log.',
      'Teams that switch report the standup itself gets faster to write and read, but they still keep a short weekly live sync — async removes the daily meeting, not all meetings.',
    ],
  },
  {
    slug: 'zoom-meet-teams-transcription-compared',
    title: 'Zoom vs. Google Meet vs. Teams: Comparing Built-In Transcription',
    description:
      'How the native transcription in Zoom, Google Meet, and Microsoft Teams compares on accuracy, speaker labels, and export options.',
    excerpt:
      'The built-in transcripts in Zoom, Meet, and Teams are not equivalent. Here is where each one falls short.',
    publishedAt: '2026-10-28',
    body: [
      'All three major video platforms now ship native transcription, but the quality and usefulness of the output varies more than most teams expect going in.',
      "Zoom's cloud transcription is solid for clear audio and single speakers at a time, but accuracy drops noticeably with crosstalk or accented speech, and speaker labels can mislabel participants who join from the same room on separate devices.",
      "Google Meet's transcripts are reliable for English and integrate cleanly with Google Docs, but speaker separation is weaker than Zoom's, and the transcript is plain text with no linking back to specific timestamps or video moments.",
      "Teams produces the most structured output of the three, with timestamps and speaker names tied to your organization's directory, but it requires the right license tier and can lag live by a noticeable margin in larger calls.",
      "If your team uses more than one of these platforms, the inconsistency itself becomes the problem: recaps look and behave differently depending on which tool hosted the call. That is usually the point where teams add a platform-agnostic layer on top rather than relying on each app's native transcript.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
