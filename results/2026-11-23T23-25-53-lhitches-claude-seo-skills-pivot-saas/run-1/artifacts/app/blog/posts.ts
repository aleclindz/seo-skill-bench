export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'ai-meeting-notes-guide',
    title: 'AI Meeting Notes: The Complete Guide for Teams in 2026',
    description:
      'What AI meeting notes actually capture, how the transcription and summarization works, and how to pick a tool that your team will trust enough to stop taking notes by hand.',
    publishedAt: '2026-01-14',
    excerpt:
      'Most teams try an AI notetaker once, get a wall of text, and go back to typing. Here is what separates notes nobody reads from notes that replace a scribe.',
    body: [
      "An AI meeting assistant like Lumina joins your call, records audio, and produces a speaker-labeled transcript within minutes of the meeting ending. That part is table stakes now — nearly every tool in the category does it. What actually determines whether your team keeps using one is what happens after the transcript: does it turn into something a person who missed the call would actually read?",
      'Good AI meeting notes have three layers. The transcript is the raw layer — searchable, time-stamped, attributed to the right speaker. The summary is the second layer: a short paragraph of what the meeting was actually about, written for someone who was not there. The third layer is structured output — decisions made, open questions, and action items with an owner and, ideally, a due date. Tools that stop at layer one produce a wall of text nobody opens twice.',
      "When you are evaluating a meeting notes tool, test it on a messy real meeting, not a scripted demo. Overlapping speakers, someone joining from a car, a tangent about an unrelated project — that is where speaker diarization and summarization quality actually show up. Lumina is built to handle Zoom, Google Meet, and Microsoft Teams calls with the same accuracy, including meetings with ten or more participants.",
      'The other thing worth checking before you roll a notetaker out to a whole team: where the transcripts live, who can search them, and whether action items route anywhere useful. A transcript that is not connected to Slack or a task tracker just becomes another document nobody opens. See our breakdown of Lumina\'s integrations on the features page for how that routing works in practice.',
    ],
  },
  {
    slug: 'meeting-transcription-software-how-to-choose',
    title: 'Meeting Transcription Software: How to Choose the Right One',
    description:
      'A practical checklist for evaluating meeting transcription software — accuracy across accents and languages, speaker labeling, security, and how transcripts integrate with the rest of your stack.',
    publishedAt: '2026-02-03',
    excerpt:
      'Transcription accuracy is the easy part to market and the hard part to verify. Here is what to actually test before you buy.',
    body: [
      "Every meeting transcription vendor will show you a demo where the transcript is perfect. The real test is your own meetings: people talking over each other, a founder who speaks fast, a candidate on a phone call with background noise. Before you commit to a tool, run it on three or four real calls from different teams — sales, engineering standups, and an all-hands — and read the transcript, not just the summary.",
      "Speaker labeling matters more than raw word accuracy for most teams. A transcript with 95% word accuracy but speakers mislabeled is less useful than one with 90% accuracy where you always know who said what. Lumina labels speakers automatically and supports transcription in more than 30 languages, which matters if your team runs calls with international clients or distributed engineering teams.",
      'Security and data handling are worth a direct question to any vendor, not just a line in a trust page: where is audio stored, how long is it retained, and can a workspace admin delete a transcript on request. These questions matter more for meeting transcription than most SaaS categories, because the raw input is literally everyone in the room talking.',
      'Finally, check what happens to the transcript after it is created. The best meeting transcription software treats the transcript as an input to something else — a summary, an action item, a searchable archive — rather than the end product. If you are comparing tools, see how Lumina turns a transcript into assigned action items automatically, which is usually the step that actually saves time.',
    ],
  },
  {
    slug: 'automatic-meeting-action-items',
    title: 'How to Turn Meeting Recordings into Action Items Automatically',
    description:
      'Why most teams lose action items within a day of a meeting ending, and how automatic extraction and routing from a tool like Lumina closes that gap.',
    publishedAt: '2026-03-10',
    excerpt:
      'The action items were in the meeting. The problem is nobody wrote them down the same way, so nobody did them.',
    body: [
      'The most common failure mode after a meeting is not disagreement about what was decided — it is that three different people wrote down three different versions of the action items, in three different places, and none of them got a due date. By the next meeting, half of it is forgotten.',
      'Automatic action item extraction solves a narrower problem than it sounds like: it does not need to understand your whole business, it needs to reliably recognize the pattern of "someone committing to do something." Lumina scans the transcript for commitment language — "I will send that over," "let\'s have design look at this by Friday" — and pulls those lines out as discrete action items with the speaker attached as the likely owner.',
      "The part that actually changes behavior is routing, not extraction. An action item sitting in a meeting summary document is barely better than one buried in a transcript. Lumina routes extracted action items into Slack or Notion automatically, so they show up where the owner already works instead of in a fourth tool they have to remember to check.",
      'If you want to see whether this actually works for your team, the best test is your own weekly recurring meeting — the one with the most carryover items. Run it through an AI meeting assistant for two weeks and compare how many action items from each meeting had actually moved by the next one.',
    ],
  },
];
