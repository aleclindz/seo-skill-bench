export type FaqItem = { question: string; answer: string };

export type Post = {
  slug: string;
  title: string;
  metaDescription: string;
  /** The search question this page exists to answer. One question per page. */
  question: string;
  /** Direct answer, shown as the first paragraph of the article. */
  directAnswer: string;
  body: string[];
  faq?: FaqItem[];
  sources: string[];
  publishedAt: string;
  dataAsOf: string;
};

export const posts: Post[] = [
  {
    slug: 'inboxzap-is-now-lumina',
    title: 'InboxZap is Now Lumina: Why We Rebuilt for Meetings, Not Inboxes',
    metaDescription:
      'InboxZap has become Lumina, an AI meeting assistant. Here is what changed, why, and where to find the features you used to rely on.',
    question: 'What happened to InboxZap?',
    directAnswer:
      'InboxZap is now Lumina. The company did not shut down — it rebuilt the product around meetings instead of email, because that is where our customers told us they were losing the most time.',
    body: [
      'If you used InboxZap to bulk-delete old email and unsubscribe from newsletters, that product is no longer under active development. The team behind it is now Lumina: an AI assistant that joins your calls, transcribes them, and turns them into summaries and action items.',
      'The decision came from customer interviews, not a loss of interest in email. Teams kept telling us the same thing: inbox cleanup saved them a few hours once, but the meetings they sat through every week were costing them far more — and nothing automatically captured what was decided.',
      'Lumina joins Zoom, Google Meet, and Microsoft Teams calls, produces speaker-labeled transcripts in 30+ languages, and writes a structured recap of decisions, blockers, and action items after every meeting. It pushes that recap to Slack and Notion automatically.',
      'If you are an old InboxZap user, there is no migration to run — Lumina is a separate product. You can see what it does on the features page and check pricing, which includes a free plan for teams up to five people.',
    ],
    faq: [
      {
        question: 'Is Lumina the same company as InboxZap?',
        answer:
          'Yes. Lumina is built by the same team that built InboxZap. The product changed; the company did not.',
      },
      {
        question: 'Is InboxZap still available?',
        answer:
          'InboxZap is no longer under active development. The team is now focused entirely on Lumina.',
      },
      {
        question: 'Does Lumina do email cleanup too?',
        answer:
          'No. Lumina is focused on meetings — recording, transcription, summaries, and action items. It does not bulk-delete email or manage newsletter subscriptions.',
      },
    ],
    sources: ['/features', '/pricing'],
    publishedAt: '2026-11-24',
    dataAsOf: '2026-11-24',
  },
  {
    slug: 'how-ai-meeting-notes-work',
    title: 'How Do AI Meeting Note-Taking Apps Work?',
    metaDescription:
      'A plain-language walkthrough of how AI meeting assistants record, transcribe, and summarize calls, and what to check before you rely on one.',
    question: 'How do AI meeting note-taking apps work?',
    directAnswer:
      'An AI meeting assistant joins your call as a participant, records and transcribes the audio with speaker labels, then runs the transcript through a model that extracts decisions, open questions, and action items into a short recap.',
    body: [
      'There are four steps under the hood. First, the assistant joins the call — usually by being invited like any other guest on Zoom, Google Meet, or Microsoft Teams, after you connect your calendar once. Second, it records and transcribes the audio in real time, attributing each line to the speaker who said it. Lumina does this in 30+ languages.',
      'Third, the transcript is summarized. This is the step that separates a useful assistant from a wall of text: a good summary does not just shorten the transcript, it restructures it into decisions made, blockers raised, and action items with an owner attached to each one.',
      'Fourth, the recap needs to reach people where they already work. Lumina pushes action items to Slack and syncs full recaps to Notion and Confluence, so the output of a meeting shows up as a task, not just a document nobody opens.',
      'What to check before adopting one: does it label speakers correctly in cross-talk, does it handle the languages your team actually speaks, and does the summary separate decisions from discussion — or just compress the transcript.',
    ],
    faq: [
      {
        question: 'Does an AI meeting assistant replace taking notes by hand?',
        answer:
          'For most recurring meetings, yes — the transcript and recap cover what a manual note-taker would capture. People still take their own notes for context specific to their role.',
      },
      {
        question: 'How accurate is AI meeting transcription?',
        answer:
          'Accuracy depends on audio quality and cross-talk. Speaker-labeled transcription from a tool like Lumina is generally reliable for clear audio with one speaker at a time, and degrades when multiple people talk over each other.',
      },
      {
        question: 'Which video platforms do AI meeting assistants support?',
        answer:
          'Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically once your calendar is connected.',
      },
    ],
    sources: ['/features'],
    publishedAt: '2026-11-24',
    dataAsOf: '2026-11-24',
  },
  {
    slug: 'meeting-summary-that-people-actually-read',
    title: 'How to Write a Meeting Summary People Actually Read',
    metaDescription:
      'Most meeting notes get sent and never opened. Here is the structure that gets summaries read, and how to automate it.',
    question: 'How do you write a meeting summary people actually read?',
    directAnswer:
      'Lead with decisions, not discussion: a meeting summary gets read when the first three lines are what was decided, what is blocked, and who owns what happens next — everything else is backup detail.',
    body: [
      'The reason most meeting notes go unread is ordering. A chronological recap forces the reader to reconstruct the meeting to find the one thing they need — whether they are on the hook for something. Decisions-first ordering removes that step.',
      'A structure that works: Decisions (what was agreed, in one line each), Action items (task, owner, due date), Open questions (what is still unresolved and who is chasing it), then a short discussion summary for anyone who needs the context.',
      'Write it for someone who was not in the room. That single constraint fixes most bad summaries — it forces you to spell out acronyms, name the people involved, and state the decision instead of alluding to "what we discussed."',
      'This is also exactly the structure Lumina generates automatically after every call: decisions, blockers, and action items extracted from the transcript and routed to the right owner in Slack, so nobody has to write the summary by hand.',
    ],
    faq: [
      {
        question: 'What should a meeting summary always include?',
        answer: 'Decisions made, action items with an owner and due date, and open questions still unresolved.',
      },
      {
        question: 'Who should receive a meeting summary?',
        answer:
          'Everyone who was invited, plus anyone whose work depends on a decision made in the meeting — even if they were not in the room.',
      },
    ],
    sources: ['/features'],
    publishedAt: '2026-11-24',
    dataAsOf: '2026-11-24',
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
