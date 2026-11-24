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
    slug: 'how-to-write-meeting-notes-that-get-used',
    title: 'How to Write Meeting Notes That Actually Get Used',
    description:
      'Most meeting notes are never read again. Here is the structure that makes teams actually open them: decisions, owners, and dates — in that order.',
    excerpt:
      'Most meeting notes are never read again. Here is the structure that makes teams actually open them.',
    publishedAt: '2026-01-12',
    body: [
      'Most meeting notes die in a doc nobody reopens. The ones that survive share a structure: decisions first, then open questions, then action items with an owner and a date. Anything else — a full transcript, a blow-by-blow of who said what — buries the three things people actually need.',
      'Write the decision as a decision, not a summary of the discussion. "We will ship the v2 pricing page by March 3, owned by Priya" beats "we talked about pricing and mostly agreed on the new page." The first is scannable in two seconds from a phone. The second requires reading the whole paragraph to find the verb.',
      'If you are not going to assign an owner and a date to an action item, it is not an action item — it is a wish. Lumina enforces this by requiring both fields in every auto-generated recap, which is the single biggest reason teams report that fewer things fall through the cracks after they start using an AI note-taker.',
    ],
  },
  {
    slug: 'meeting-minutes-template',
    title: 'A Meeting Minutes Template You Will Actually Reuse',
    description:
      'A simple, copyable meeting minutes template with sections for decisions, action items, and open questions — plus when to skip the template entirely.',
    excerpt:
      'A simple, copyable meeting minutes template — plus when it is faster to skip the template entirely.',
    publishedAt: '2026-01-26',
    body: [
      'A meeting minutes template only earns its place if filling it out takes less time than the meeting saved. Here is the version we have seen teams stick with: Attendees, Decisions, Action Items (owner + due date), Open Questions, and Next Meeting. Five sections, no more.',
      'Skip the template when the meeting itself was the output — a brainstorm, a retro, a 1:1. Those benefit more from a loose recap than a rigid form. Reserve the structured template for status updates, planning meetings, and anything where a decision needs to be referenced later.',
      'The honest reason most teams abandon templates is that someone has to type them up after the call, and that person stops doing it within a month. Tools like Lumina fill the template automatically from the call recording, which is the only version of "use a template" that survives contact with a busy week.',
    ],
  },
  {
    slug: 'ai-meeting-notes-vs-manual-notes',
    title: 'AI Meeting Notes vs. Manual Notes: What Teams Actually Save',
    description:
      'A practical comparison of AI-generated meeting notes versus someone typing live — on accuracy, time saved, and what still needs a human.',
    excerpt:
      'A practical comparison of AI-generated meeting notes versus someone typing live, on accuracy and time saved.',
    publishedAt: '2026-02-09',
    body: [
      'Manual meeting notes cost you a person. Every meeting with a dedicated note-taker is a meeting where one attendee is only half-present — they are typing instead of contributing, and their notes reflect what they personally caught, not what was actually decided.',
      'AI transcription and summarization fixes the attention problem: everyone participates, and the summary comes from the full transcript, not one person\'s shorthand. The tradeoff is that AI summaries occasionally miss context a human would have caught — sarcasm, an inside joke read as a real action item, a decision made by a nod rather than a sentence.',
      'The teams that get the most value treat the AI summary as a first draft, not a final record: it goes out within minutes, and anyone can correct it before it is treated as the source of truth. That is faster than a human note-taker in every case we have measured, and more complete in most of them.',
    ],
  },
  {
    slug: 'action-items-that-actually-get-done',
    title: 'How to Track Action Items So They Actually Get Done',
    description:
      'Action items only get done when they have an owner, a due date, and a place to live outside the meeting doc. Here is how to set that up.',
    excerpt:
      'Action items only get done when they have an owner, a due date, and a place to live outside the meeting doc.',
    publishedAt: '2026-02-23',
    body: [
      'An action item written in a meeting doc that nobody reopens is a dead action item. The fix is not a better doc — it is getting the item out of the doc and into whatever system the owner already checks daily: Slack, Linear, Asana, a task list.',
      'Every action item needs exactly three things to survive: a single owner (not "the design team"), a due date (not "soon"), and a destination outside the notes themselves. If any of those three is missing, write it down as an open question instead — it is not actionable yet.',
      'Lumina routes action items to Slack automatically the moment a meeting ends, which removes the step most teams skip: someone manually copying the item from notes into a task tracker two days later, by which point it has usually already been forgotten.',
    ],
  },
  {
    slug: 'zoom-meeting-transcription-guide',
    title: 'A Practical Guide to Zoom Meeting Transcription',
    description:
      'How Zoom transcription actually works, where built-in transcripts fall short for teams, and what to look for in a dedicated transcription tool.',
    excerpt:
      'How Zoom transcription actually works, and where built-in transcripts fall short for teams.',
    publishedAt: '2026-03-09',
    body: [
      'Zoom\'s built-in transcription is good enough for a rough record of what was said, but it is not speaker-labeled by default on every plan, is not searchable across past meetings, and does not summarize — you still have to read the whole thing.',
      'For a single meeting, that is fine. For a team running dozens of calls a week, it falls apart: nobody is going to read fifteen full transcripts to find the one decision they half-remember from last Tuesday.',
      'What actually helps is a layer on top of the raw transcript: speaker labels, a searchable archive across every past meeting, and a generated summary with decisions and action items pulled out. That is the gap tools like Lumina are built to close — Lumina joins the same Zoom, Meet, or Teams call and adds exactly that layer automatically.',
    ],
  },
  {
    slug: 'async-meeting-recaps',
    title: 'Async Meeting Recaps: Keeping Teams in Sync Without More Meetings',
    description:
      'A good async recap lets half your team skip the meeting entirely. Here is what makes a recap good enough to actually replace attendance.',
    excerpt:
      'A good async recap lets half your team skip the meeting entirely — if it is written well enough to replace attendance.',
    publishedAt: '2026-03-23',
    body: [
      'The test for a good async recap is simple: could someone who skipped the meeting make the same decisions as someone who attended, using only the recap? Most recaps fail this test because they summarize the discussion instead of the outcome.',
      'A recap that passes leads with decisions and action items, then adds context only where a decision would otherwise be confusing. It skips the parts of the conversation that did not change anything — the tangents, the restated agenda, the "can everyone hear me."',
      'Teams that get disciplined about recap quality find they can cut recurring meeting attendance significantly — not by canceling meetings, but by making it genuinely safe to skip one and catch up in two minutes instead of thirty.',
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
