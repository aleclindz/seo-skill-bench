export type Source = { name: string; url: string };
export type FaqItem = { q: string; a: string };
export type Section = { h2: string; body: string[] };

export type Post = {
  slug: string;
  title: string; // mirrors the h1, 50-60 chars
  question: string; // the literal query this page answers
  answer: string; // direct-answer first paragraph, ~40 words
  description: string; // meta description, 150-160 chars
  dataAsOf: string; // YYYY-MM-DD the claims below are accurate as of
  datePublished: string;
  dateModified: string;
  sources: Source[];
  sections: Section[];
  faq: FaqItem[];
  related: string[]; // slugs
};

export const posts: Post[] = [
  {
    slug: 'meeting-minutes-template',
    title: 'Meeting Minutes Template: The 5 Fields You Actually Need',
    question: 'what should a meeting minutes template include',
    answer:
      'A meeting minutes template needs five fields: attendees, decisions, action items with owners, deadlines, and the date of the next meeting.',
    description:
      'A usable meeting minutes template has five fields: attendees, decisions, action items with owners, deadlines, and next meeting date. Copy it below.',
    dataAsOf: '2026-11-20',
    datePublished: '2026-11-20',
    dateModified: '2026-11-20',
    sources: [{ name: 'Lumina Features', url: '/features' }],
    sections: [
      {
        h2: 'The 5 fields, as a table',
        body: [
          'Attendees — who was actually in the call, not who was invited.',
          'Decisions — one line each, phrased as a statement, not a discussion summary.',
          'Action items — paired with a single owner. Two owners means no owner.',
          'Deadlines — a date, not "soon" or "next sprint."',
          'Next meeting — date and purpose, so the thread doesn\'t go cold.',
        ],
      },
      {
        h2: 'Why most templates fail',
        body: [
          'Most templates fail because they record what was discussed instead of what was decided. A transcript already captures discussion; minutes should capture outcomes.',
          'Lumina generates this structure automatically from the call recording — decisions and action items are extracted and routed to owners without anyone typing during the meeting.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do meeting minutes need to be approved before sending?',
        a: 'Only for governance or board meetings. For normal team syncs, send minutes within the hour — speed matters more than formal sign-off.',
      },
      {
        q: 'Who should own writing meeting minutes?',
        a: 'Nobody, ideally — an AI note-taker like Lumina removes the job entirely. If done manually, the organizer should own it, not a rotating note-taker.',
      },
      {
        q: 'Should meeting minutes include a full transcript?',
        a: 'Link to the transcript instead of pasting it. Minutes are for decisions and action items; the transcript is the backup record.',
      },
    ],
    related: ['ai-meeting-assistant-vs-manual-notes', 'turning-meetings-into-action-items'],
  },
  {
    slug: 'ai-meeting-assistant-vs-manual-notes',
    title: 'AI Meeting Assistant vs. Manual Notes: Which Catches More?',
    question: 'is an ai meeting assistant better than taking notes manually',
    answer:
      'For recall and action items, yes — an AI meeting assistant captures every decision verbatim, while a human note-taker is also trying to participate in the meeting.',
    description:
      'AI meeting assistants capture every decision verbatim and extract action items automatically; manual notes depend on a human doing two jobs at once. Compared here.',
    dataAsOf: '2026-11-20',
    datePublished: '2026-11-20',
    dateModified: '2026-11-20',
    sources: [{ name: 'Lumina Features', url: '/features' }],
    sections: [
      {
        h2: 'Where manual notes lose information',
        body: [
          'A human note-taker is also a participant. Every minute spent typing is a minute not spent listening, which means decisions made quickly or late in a call are the ones most often missed.',
          'Manual notes also compress — a note-taker paraphrases in real time, so the exact wording of a decision ("we will ship Tuesday" vs. "we might ship Tuesday") is often lost.',
        ],
      },
      {
        h2: 'Where an AI assistant still needs a human',
        body: [
          'An AI assistant like Lumina records, transcribes, and drafts the summary, but someone should still skim it before it goes out — names get mis-transcribed and sarcasm reads as a decision.',
          'Sensitive conversations (performance reviews, layoffs) are better left unrecorded; AI note-taking is for operational meetings, not every meeting.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does an AI meeting assistant replace the need for an agenda?',
        a: 'No — an agenda shapes what gets discussed. The assistant only captures what happens after the agenda is set.',
      },
      {
        q: 'Can attendees opt out of being recorded?',
        a: 'Yes, and they should be able to. Lumina shows a visible recording indicator and lets any participant decline before the call starts.',
      },
    ],
    related: ['meeting-minutes-template', 'turning-meetings-into-action-items'],
  },
  {
    slug: 'turning-meetings-into-action-items',
    title: 'How to Turn a Meeting Into Action Items, Not Just Notes',
    question: 'how do you turn a meeting into action items',
    answer:
      'Convert a meeting into action items by writing each one as a verb, an owner, and a deadline — "research vendors" is not an action item, "Priya sends vendor shortlist by Friday" is.',
    description:
      'Turn a meeting into real action items with one rule: verb, owner, deadline. See the format, common mistakes, and how automatic extraction works.',
    dataAsOf: '2026-11-20',
    datePublished: '2026-11-20',
    dateModified: '2026-11-20',
    sources: [{ name: 'Lumina Features', url: '/features' }],
    sections: [
      {
        h2: 'The format: verb, owner, deadline',
        body: [
          'An action item that lacks any of the three — a verb, a named owner, or a deadline — will not get done. "We should look into pricing" has none of the three and will be forgotten by the next meeting.',
          '"Mark compares our pricing against two competitors by Wednesday" has all three and shows up again naturally when Wednesday arrives.',
        ],
      },
      {
        h2: 'Why extraction has to happen during the call, not after',
        body: [
          'Action items decided at minute 40 of a call are rarely the ones someone remembers to write down after it ends. Lumina extracts decisions and action items as the call happens, so nothing depends on someone\'s memory once the call is over.',
        ],
      },
    ],
    faq: [
      {
        q: 'What if an action item has two owners?',
        a: 'Split it into two action items. Shared ownership with no split usually means neither person does it.',
      },
      {
        q: "Should action items go in the meeting notes or a task tracker?",
        a: 'Both — the notes are the record, the tracker is where the work actually gets done and followed up on.',
      },
    ],
    related: ['meeting-minutes-template', 'ai-meeting-assistant-vs-manual-notes'],
  },
  {
    slug: 'inboxzap-is-now-lumina',
    title: "What Happened to InboxZap? It's Now Lumina",
    question: 'what happened to inboxzap',
    answer:
      'InboxZap relaunched in 2026 as Lumina — same company, new focus: instead of cleaning up your inbox, Lumina now records, transcribes, and summarizes your team meetings.',
    description:
      "InboxZap is now Lumina. Same team, new product: an AI meeting assistant instead of an inbox cleanup tool. Here's what changed and why.",
    dataAsOf: '2026-11-20',
    datePublished: '2026-11-20',
    dateModified: '2026-11-20',
    sources: [{ name: 'Lumina', url: '/' }],
    sections: [
      {
        h2: 'What changed',
        body: [
          'InboxZap helped people bulk-delete old email and unsubscribe from newsletters to reach inbox zero. That product is no longer being developed.',
          "The team's new product, Lumina, solves a different problem: it joins Zoom, Meet, or Teams calls, transcribes them, and turns the conversation into a summary with decisions and action items.",
        ],
      },
      {
        h2: 'What did not change',
        body: [
          'The company behind both products is the same, and the free tier is still free — Lumina is free for teams up to 5 people.',
          'If you were an InboxZap user, there is no migration path into Lumina; they solve unrelated problems. InboxZap accounts are no longer being billed or developed further.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I still use InboxZap?',
        a: 'InboxZap is no longer being developed or billed. There is no current replacement for its inbox-cleanup features.',
      },
      {
        q: 'Is Lumina made by the same team as InboxZap?',
        a: 'Yes — Lumina Labs, Inc. is the same company. The product focus changed; the team did not.',
      },
    ],
    related: ['meeting-minutes-template', 'ai-meeting-assistant-vs-manual-notes'],
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
