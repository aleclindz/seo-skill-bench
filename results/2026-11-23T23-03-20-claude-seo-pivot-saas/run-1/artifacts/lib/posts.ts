export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  body: string[];
};

// Posts that predate the InboxZap -> Lumina pivot and have no credible angle for
// an AI meeting assistant (bulk-delete emails, Gmail storage, etc.) were retired
// via redirects in next.config.js instead of living here.
export const posts: Post[] = [
  {
    slug: 'best-ai-meeting-assistants-compared',
    title: "Best AI Meeting Assistants Compared (2024)",
    description:
      'We compared Lumina, Otter, Fireflies, and Gong on transcription accuracy, summary quality, and integrations — here is what actually matters when picking one.',
    date: '2026-10-02',
    body: [
      "AI meeting assistants all do the same three things now: record, transcribe, and summarize. The differences that actually matter show up in exactly how well each step works, not whether the feature exists.",
      "Otter.ai is solid for solo note-taking but struggles with multi-speaker calls and doesn't structure follow-up work. Fireflies has broad integrations but its summaries tend to read as a generic recap rather than a decision log. Gong is built for sales call analytics — powerful, but overkill and expensive if you just need team meeting notes.",
      "Lumina's summaries are organized around decisions, blockers, and action items instead of a flat transcript recap, with speaker-labeled transcripts across 30+ languages and action items routed straight into Slack and Notion.",
      "If you only need a record of what was said, almost any of these tools will do. If you need the summary to drive real follow-up without someone re-reading the transcript, look specifically for action-item routing — that's the feature that actually saves time.",
    ],
  },
  {
    slug: 'meeting-overload',
    title: 'Meeting Overload: Why Your Calendar Is Stressing You Out',
    description:
      'Knowledge workers now spend over 20 hours a week in meetings. Here is why that keeps climbing, and three changes that get hours back without cancelling meetings outright.',
    date: '2026-09-18',
    body: [
      "Calendars have gotten denser every year: back-to-back meetings are the default, not the exception, and the context-switch tax between them adds up faster than any single meeting's length suggests.",
      "The real driver isn't the meetings themselves — it's that attending feels like insurance. If missing a meeting means missing a decision, nobody opts out, even when their presence adds nothing. Give people a reliable recap and that calculation changes.",
      "Three changes that help: record and transcribe every recurring meeting by default so attendance becomes optional instead of mandatory; push decisions and action items out immediately instead of letting them live only in the organizer's memory; and periodically audit recurring meetings against the decisions they actually produced.",
      "Lumina handles the first two automatically — every call gets a transcript and a structured recap the moment it ends, so skipping a meeting doesn't mean losing the thread.",
    ],
  },
  {
    slug: 'automatic-meeting-summaries',
    title: 'Automatic Meeting Summaries: Set It and Forget It',
    description:
      'Manually writing meeting recaps is the first thing teams drop under deadline pressure — and the first thing worth automating. Here is how to do it without anyone owning the task.',
    date: '2026-08-27',
    body: [
      "Manual recap-writing is fragile: it depends on whoever took notes that day, and the first thing to go when a sprint gets busy is the five minutes it takes to write up decisions afterward.",
      "The fix is to remove the manual step entirely. Connect your calendar once, and every meeting that includes cross-team or external participants gets recorded, transcribed, and summarized without anyone pressing a button — decisions and action items extracted and routed to the right owners automatically.",
      "Not every meeting needs this: 1:1s and informal syncs are usually fine without a formal summary, so set rules rather than recording everything indiscriminately. And make sure summaries land where people already work — a Slack message or Notion doc gets read; a dashboard nobody opens does not.",
    ],
  },
  {
    slug: 'record-or-skip',
    title: 'Record or Skip? Which Meetings Actually Need an AI Note-Taker',
    description:
      "Not every meeting needs to be recorded and summarized. Here is a simple rule for deciding which calls are worth it.",
    date: '2026-07-14',
    body: [
      "Recording everything by default is noisy, and recording nothing means decisions only live in people's memory. Most teams land somewhere in between — the question is where.",
      "Record: cross-functional syncs, client or external calls, and anything where someone is likely to ask 'what did we actually agree on' a few weeks later. These are the meetings where a transcript earns its keep.",
      "Skip: pure brainstorm or whiteboard sessions where the useful artifact is a doc rather than a transcript, 1:1 coaching conversations, and anything explicitly off the record.",
      "A simple rule of thumb: if you'd want to search for it in three weeks, record it. Every Lumina plan includes unlimited recording, so the decision doesn't need to be about cost.",
    ],
  },
  {
    slug: 'meeting-notes-template',
    title: 'The Meeting Notes Template Our Best Teams Use',
    description:
      'A simple meeting notes template covering attendees, decisions, action items, and open questions — the structure Lumina uses to build every AI-generated recap.',
    date: '2026-06-30',
    body: [
      "Good meeting notes answer four questions reliably: who was there, what was decided, what happens next and who owns it, and what's still unresolved. Most note-taking formats fail because they try to capture everything said instead of just those four things.",
      "A template that holds up: Attendees; Decisions; Action Items (each with an owner and a due date); Open Questions; and a link back to the full transcript for anyone who needs the detail.",
      "Most teams stop maintaining this manually within a few weeks — it's genuinely tedious to do well every single time. This is the exact structure Lumina generates automatically after every recorded call, with each action item linked back to the moment it was discussed.",
    ],
  },
  {
    slug: 'action-items-that-dont-fall-through-the-cracks',
    title: "How to Stop Action Items From Falling Through the Cracks",
    description:
      'Action items that only live in a meeting transcript get forgotten. Here is how to route them so they actually get done.',
    date: '2026-06-05',
    body: [
      "A decision made in a meeting is only half the job. The other half is making sure whoever owns the follow-up actually sees it again — and a line buried in a notes doc nobody reopens doesn't count.",
      "The fix is routing, not better note-taking: every action item needs an explicit owner, a due date, and a destination inside the tool that owner already works in — a Slack thread, a Notion task, a CRM note — rather than a separate document.",
      "Lumina extracts action items from the transcript automatically and routes them to Slack and Notion with a link back to the exact moment they were discussed, so follow-up doesn't depend on anyone remembering to check the notes.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
