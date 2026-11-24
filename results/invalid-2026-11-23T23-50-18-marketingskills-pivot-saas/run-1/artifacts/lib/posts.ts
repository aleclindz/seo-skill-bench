export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  body: string[];
};

// Content targets keywords tied to what Lumina actually does (meeting
// transcription, notes, action items). The product pivoted away from the
// inbox-cleanup tool this blog used to serve, so new posts replace that
// topic instead of extending it.
export const posts: Post[] = [
  {
    slug: 'how-to-write-meeting-notes-that-people-actually-read',
    title: 'How to Write Meeting Notes People Actually Read',
    description:
      'A meeting notes template and process that produces recaps your team opens, not ones that rot in a shared drive.',
    excerpt:
      'Most meeting notes go unread because they record everything that was said instead of what changed. Here is a format that gets opened.',
    body: [
      "Meeting notes fail for one reason: they're a transcript, not a decision log. Nobody reopens a document to relive a conversation; they reopen it to find out what they're now responsible for.",
      'A format that gets read has three sections and nothing else: Decisions (what we are now doing), Open questions (what we still need to resolve, with an owner), and Action items (who does what, by when). Everything else — the back-and-forth that led there — can live in a transcript link for the rare person who needs it.',
      "Send the recap within an hour of the call ending, while it's still relevant enough to skim. Tools like Lumina generate this structure automatically from the call recording, so the summary is ready before you're back at your desk instead of written from memory the next day.",
    ],
  },
  {
    slug: 'meeting-action-items-template',
    title: 'A Meeting Action Items Template That Actually Gets Followed Up',
    description:
      'Action items die in meeting notes because they have no owner and no deadline. This template fixes both.',
    excerpt:
      'An action item without an owner and a date is a wish, not a task. Here is the three-column template that turns meeting output into tracked work.',
    body: [
      'Action items fail silently. They get written down, the meeting ends, and three weeks later nobody remembers who was supposed to do what. The fix is not better note-taking discipline — it is a format that makes an item unusable without an owner and a date.',
      'Use three columns: Task, Owner, Due date. If a row is missing one of those, it is not an action item yet — it is a discussion point that needs to go back to the group. Resist the urge to add a fourth "priority" column; it mostly gets ignored and gives people an excuse to deprioritize instead of pushing back on the deadline.',
      'The highest-leverage change most teams can make is routing action items out of the meeting notes doc entirely and into wherever work is already tracked — Slack, a task board, Notion. Lumina pushes action items there automatically as soon as a call ends, which is the difference between a list that gets read once and one that gets followed up.',
    ],
  },
  {
    slug: 'how-to-automatically-transcribe-zoom-meetings',
    title: 'How to Automatically Transcribe Zoom, Google Meet, and Teams Calls',
    description:
      'Three ways to get searchable, speaker-labeled transcripts of your calls without manually recording and uploading audio.',
    excerpt:
      'Native transcription in Zoom, Meet, and Teams works differently on every platform. Here is what each one gives you, and when you need something more.',
    body: [
      'Zoom, Google Meet, and Microsoft Teams all now offer some form of built-in transcription, but the output varies a lot. Zoom\'s native transcript is tied to cloud recordings and is not speaker-labeled by default on most plans. Meet generates a basic caption transcript that is not searchable afterward unless you export it manually. Teams transcription is reasonably good but lives inside Teams only, which is a problem the moment a call happens on another platform.',
      'If your team only ever meets on one platform and does not need the transcript searchable across past meetings, the native option is usually enough. The moment you need cross-platform search, speaker labels, or a summary instead of a raw transcript, you need a tool that sits on top of all three.',
      'That is the gap Lumina fills: it joins calls on any of the three platforms the same way, producing a speaker-labeled transcript and an AI summary regardless of where the meeting happened, searchable from one place.',
    ],
  },
  {
    slug: 'how-to-run-async-standups-without-a-meeting',
    title: 'How to Run Async Standups Without a Daily Meeting',
    description:
      'A format for daily standups that removes the live meeting entirely while keeping the team in sync.',
    excerpt:
      'A daily standup meeting costs a team more collective time than almost anyone notices. Here is how to get the same alignment without it.',
    body: [
      "A 15-minute daily standup with eight people is two hours of collective time, every single day, for updates that mostly don't require real-time discussion. Most of what gets said in a standup — what I did yesterday, what I'm doing today, what's blocking me — can be written in under a minute and read in under thirty seconds.",
      'Replace the live meeting with a written post in a shared channel, same three questions, posted by a fixed time each morning. Keep a short synchronous huddle only for actual blockers that need a real conversation, and make it opt-in rather than mandatory.',
      "The one thing async standups lose is the incidental context that comes up in a live call — a blocker someone didn't think to post about, a quick decision that would have taken thirty seconds live. Teams that still run some meetings can close that gap by having Lumina summarize them, so context from the calls that do happen reaches people who skip the write-up.",
    ],
  },
  {
    slug: 'how-to-reduce-unnecessary-meetings',
    title: 'How to Reduce Unnecessary Meetings Without Annoying Your Team',
    description:
      'A practical process for auditing and cutting recurring meetings, without the blanket "no meeting Fridays" policy that quietly gets ignored.',
    excerpt:
      'Blanket no-meeting policies get worked around within a month. A recurring-meeting audit actually sticks.',
    body: [
      'Blanket policies like "no meetings before 11am" or "no meeting Fridays" feel decisive but rarely hold — urgent things get scheduled anyway, and the policy quietly becomes a suggestion. What actually reduces meeting load is auditing recurring meetings individually and asking, for each one, whether it could be a written update instead.',
      'Once a quarter, list every recurring meeting on the team calendar with its attendee count and duration. For each one, ask: did a decision get made in the last three instances that could not have been made async? If not, cut it or turn it into a written update.',
      "The recurring meetings worth keeping are usually the ones with real back-and-forth: planning, retros, 1:1s. For everything else, a written recap distributed to the same people removes the meeting without removing the information. If a meeting does need to happen, a tool like Lumina at least makes sure the people who skip it aren't the ones who miss the decision.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
