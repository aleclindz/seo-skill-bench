export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  body: string[];
};

// The old blog (InboxZap-era inbox-cleanup posts) was retired and 301-redirected
// in next.config.js — it's off-topic for an AI meeting assistant. These posts
// target the queries a Lumina buyer actually searches.
export const posts: Post[] = [
  {
    slug: 'ai-meeting-notes',
    title: 'AI Meeting Notes: How Automatic Note-Taking Actually Works',
    description:
      'What an AI meeting notes tool records, transcribes, and summarizes automatically — and what still needs a human to check it.',
    date: '2026-01-12',
    body: [
      "An AI meeting notes tool joins your call the same way a human notetaker would — except it never misses a word. It records the audio, transcribes it with speaker labels, and then runs the transcript through a summarizer that pulls out decisions, open questions, and action items.",
      "The transcript is the source of truth; the summary is a lossy compression of it. Good tools keep both, and let you jump from any line in the summary straight to the moment in the transcript it came from, so you can verify a decision instead of trusting the recap blindly.",
      "The gap most teams hit isn't transcription accuracy — modern speech models handle that well. It's action-item routing: a summary is only useful if 'Sam will send the pricing doc by Friday' actually becomes a task Sam sees, not a line buried in a recap nobody rereads.",
    ],
  },
  {
    slug: 'meeting-transcription-software',
    title: 'Meeting Transcription Software: What to Look for in 2026',
    description:
      'Speaker labels, language coverage, and where the transcript lives afterward — the three things that actually separate meeting transcription tools.',
    date: '2026-01-26',
    body: [
      "Most meeting transcription software gets the words right. The differences that matter are speaker labeling (can you tell who said what, or is it one wall of text?), language coverage (30+ languages is table stakes now, not a premium feature), and searchability — can you find the one sentence from a call three months ago in two seconds?",
      "Check how the tool joins calls, too. Bot-based joiners that sit in Zoom, Meet, and Teams as a visible participant are the norm; anything that requires a plugin per platform or a dial-in number is extra friction your team won't adopt.",
      "Finally, ask where the transcript and recording are stored, and for how long. Retention policy is a security review question as much as a product one, especially once meetings touch customer data.",
    ],
  },
  {
    slug: 'how-to-write-better-meeting-minutes',
    title: 'How to Write Meeting Minutes People Actually Read',
    description:
      'The three-section structure — decisions, open questions, next steps — that makes meeting minutes short enough to get read.',
    date: '2026-02-09',
    body: [
      "Nobody reads meeting minutes that are a chronological transcript with the filler removed. They read three things: what got decided, what's still open, and who owes what by when. Structure your notes around those three sections and cut everything else.",
      "Write decisions as statements, not summaries of discussion — 'We're shipping the redesign in Q2' not 'There was a long discussion about timing and the team leaned toward Q2.' Ambiguity in the minutes becomes ambiguity in the project.",
      "If you're doing this manually, budget fifteen minutes after every call to write it while you remember the nuance. That's exactly the fifteen minutes an automated summary gives back — it's the single easiest ROI case for adopting a meeting notes tool.",
    ],
  },
  {
    slug: 'reduce-meeting-overload',
    title: "Meeting Overload Is Real — Here's How Teams Are Fixing It",
    description:
      'Why async-first recaps, not fewer calendar invites, are what actually cuts meeting overload for growing teams.',
    date: '2026-02-20',
    body: [
      "Meeting overload rarely gets solved by declaring 'no meeting Wednesdays.' The meetings come back within a month because the underlying problem — people who weren't in the room still need the information — hasn't gone away.",
      "The fix that sticks is making it genuinely safe to skip a meeting: a written recap good enough that missing the call doesn't mean missing the decision. Once that recap exists reliably, teams cut optional-attendee meetings on their own, without a policy forcing it.",
      "This is the same overload complaint teams used to have about inboxes — too many inputs demanding attention with no triage layer in front of them. Meetings just moved the problem to the calendar.",
    ],
  },
  {
    slug: 'async-standup-notes',
    title: 'Async Standups: Replace the Daily Meeting With Notes Everyone Reads',
    description:
      'How distributed teams swap a daily 15-minute standup call for a written async update without losing visibility.',
    date: '2026-03-03',
    body: [
      "A daily standup call costs a team of eight roughly an hour of combined time for fifteen minutes of actual information. Async standups — a short written update per person, posted somewhere everyone already looks — recover most of that time without losing visibility.",
      "The failure mode is async updates that nobody reads, which quietly brings the call back. Keep each update to three lines: yesterday, today, blockers. Anything longer belongs in a doc, not a standup.",
      "For teams not ready to drop the call entirely, recording it and auto-generating the same three-line summary gets the same time-back benefit for anyone who didn't need to attend live.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
