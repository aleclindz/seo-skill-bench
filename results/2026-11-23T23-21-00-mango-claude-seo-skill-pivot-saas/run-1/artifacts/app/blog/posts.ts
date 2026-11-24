export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'ai-meeting-notes-guide',
    title: 'How AI Meeting Notes Work (and Why Your Team Should Use Them)',
    excerpt:
      'AI meeting notes tools record, transcribe, and summarize calls automatically. Here is what actually happens behind the scenes, and when they are worth adopting.',
    body: [
      'An AI meeting notes tool joins a video call the same way a human guest would, records the audio, and runs it through speech-to-text transcription as the meeting happens. Once the call ends, a language model reads the transcript and produces a summary: what was discussed, what was decided, and what still needs an owner.',
      'The value is not the transcript itself — most people never reread a full transcript. It is the summary that saves time, because it turns an hour of conversation into a few minutes of reading for anyone who was not in the room, and it gives the people who were in the room a record they do not have to trust their memory for.',
      'Teams get the most out of this when every recurring meeting — standups, planning calls, customer syncs — runs through the same tool, so decisions live in one searchable place instead of scattered across individual notebooks and chat messages.',
      'Lumina handles the recording, transcription, and summary automatically once it is connected to your calendar, so adopting this workflow does not require anyone to change how they run a meeting.',
    ],
  },
  {
    slug: 'meeting-transcription-software',
    title: 'What to Look for in Meeting Transcription Software',
    excerpt:
      'Not all meeting transcription tools are built the same. These are the things that matter once you are relying on the output every day.',
    body: [
      'The first thing to check is coverage: does the tool work with the video platforms your team actually uses — Zoom, Google Meet, Microsoft Teams — or just one of them? A tool that only supports one platform becomes a second system to maintain the moment a client or partner prefers a different one.',
      'The second is how the transcript turns into something usable. A raw transcript is rarely the end product; what matters is whether the tool reliably extracts decisions and action items, not just a wall of text.',
      'The third is setup friction. Tools that require inviting a bot to every call manually get skipped the moment someone forgets. Calendar-based tools that join automatically are far more likely to actually get used every time.',
      'Lumina was built around those three points: calendar-based joining across Zoom, Meet, and Teams, and a summary — not just a transcript — waiting for you after every call.',
    ],
  },
  {
    slug: 'action-items-from-meetings',
    title: 'How to Turn Meeting Notes Into Action Items People Actually Follow Through On',
    excerpt:
      'Meeting notes that list action items without owners or context rarely get acted on. Here is what makes an action item stick.',
    body: [
      'An action item without an owner is a wish, not a task. The most common reason meeting follow-ups fall through is that the note says "we should look into pricing" instead of naming who is doing it and by when.',
      'The second most common reason is distance from the decision. If the action item is written days later from memory, it loses the context that made it clear in the moment. Capturing it immediately after the call, while the reasoning is still fresh, keeps it specific instead of vague.',
      'The third is visibility. An action item buried in a shared document nobody reopens is as good as lost. It needs to land somewhere people already look.',
      'Lumina produces the action-item list automatically as part of its post-meeting summary, right after the decisions that led to it, so the context is still attached and the list does not depend on anyone remembering to write it down.',
    ],
  },
  {
    slug: 'async-meeting-summaries',
    title: 'Async Standups: How AI Meeting Summaries Help Remote Teams',
    excerpt:
      'Remote and distributed teams lose the most to meetings that only the attendees benefit from. AI summaries fix that without adding another live call.',
    body: [
      'A standup held at 9am in one time zone is the middle of the night for a teammate three zones away. The usual fix — writing a manual recap — only works if someone remembers to do it, and it is always a summary of what the writer noticed, not what actually happened.',
      'An AI-generated summary removes that gap. Everyone who could not attend gets the same decisions and action items as everyone who did, within minutes of the call ending, instead of a filtered version written from memory later in the day.',
      'This matters most for meetings that set direction — planning calls, customer syncs, incident reviews — where missing the nuance of a decision costs more than missing small talk.',
      'Because Lumina joins the call directly and summarizes it automatically, distributed teams get this without adding a second live meeting just to catch everyone up.',
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
