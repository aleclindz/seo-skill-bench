export type FaqItem = { q: string; a: string };

export type Section =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  sections: Section[];
  faq?: FaqItem[];
};

export const posts: Post[] = [
  {
    slug: 'meeting-minutes-template',
    title: 'Meeting Minutes Template: A Free Format Your Team Will Actually Use',
    description:
      'Copy this free meeting minutes template, see a filled-in example, and learn the 4 fields every set of notes needs. Start using it today.',
    excerpt:
      'A free, copy-paste meeting minutes template with a filled-in example and the 4 fields every set of notes actually needs.',
    publishedAt: '2026-01-12',
    updatedAt: '2026-01-12',
    sections: [
      {
        type: 'p',
        text: 'A meeting minutes template is a reusable outline — attendees, decisions, action items, and next steps — that turns a conversation into a record someone can act on without having been in the room.',
      },
      { type: 'h2', text: 'The 4 fields every meeting minutes template needs' },
      {
        type: 'ol',
        items: [
          'Attendees and date — who was there, who wasn’t, and when it happened',
          'Decisions — what was actually agreed, stated as facts, not discussion',
          'Action items — owner, task, and due date, one line each',
          'Open questions — anything unresolved, so it doesn’t get silently dropped',
        ],
      },
      { type: 'h2', text: 'Copy-paste template' },
      {
        type: 'p',
        text: 'Meeting: [name]  |  Date: [date]  |  Attendees: [names]. Decisions: [bullet list]. Action items: [owner] — [task] — due [date]. Open questions: [bullet list].',
      },
      { type: 'h2', text: 'Filled-in example' },
      {
        type: 'p',
        text: 'Meeting: Q3 roadmap review | Date: Jan 12, 2026 | Attendees: Priya, Marcus, Dana. Decisions: ship the mobile export feature before the pricing page redesign. Action items: Marcus — scope the export feature — due Jan 19. Open questions: do we need a migration path for existing exports?',
      },
      { type: 'h2', text: 'Why most meeting notes get ignored (and how to fix it)' },
      {
        type: 'p',
        text: 'Templates fail when someone has to fill them in live while also participating. The notes get shorter every meeting until they’re just a title and a date. Lumina records and transcribes the call automatically, then drops decisions and action items into this exact structure — so the template gets filled in whether or not anyone had time to type.',
      },
      {
        type: 'p',
        text: 'See how automatic recaps work on the → features page, or compare approaches in our → Otter.ai vs Lumina breakdown.',
      },
    ],
    faq: [
      {
        q: 'What’s the difference between meeting minutes and meeting notes?',
        a: 'Minutes are a formal record of decisions and action items, usually shared after the meeting. Notes are more casual and personal. The template above works for both — use the full version for minutes, trim the open-questions section for quick notes.',
      },
      {
        q: 'Who should own writing the minutes?',
        a: 'Traditionally the organizer or a designated note-taker. With an AI meeting assistant like Lumina, the recording and transcript remove the need for a dedicated human note-taker, and anyone can edit the generated summary afterward.',
      },
    ],
  },
  {
    slug: 'otter-ai-vs-lumina',
    title: 'Otter.ai vs Lumina: Which AI Meeting Assistant Fits Your Team?',
    description:
      'Compare Otter.ai and Lumina on transcription accuracy, summaries, integrations, and pricing to find the right AI meeting assistant for your team.',
    excerpt:
      'A feature-by-feature comparison of Otter.ai and Lumina: transcription, summaries, integrations, and pricing.',
    publishedAt: '2026-01-19',
    updatedAt: '2026-01-19',
    sections: [
      {
        type: 'p',
        text: 'Both Otter.ai and Lumina record and transcribe meetings automatically. The real differences show up in how each one turns a transcript into something your team actually uses afterward.',
      },
      { type: 'h2', text: 'Quick verdict' },
      {
        type: 'p',
        text: 'Otter.ai is a strong general-purpose transcription tool with a large free tier. Lumina is built specifically around meeting follow-through: decisions, blockers, and action items routed to the right owner, not just a searchable transcript.',
      },
      { type: 'h2', text: 'Feature comparison' },
      {
        type: 'table',
        headers: ['', 'Otter.ai', 'Lumina'],
        rows: [
          ['Speaker-labeled transcripts', 'Yes', 'Yes, 30+ languages'],
          ['AI summary of the call', 'Yes', 'Yes — decisions, blockers, next steps'],
          ['Action items routed to owners', 'Manual tagging', 'Automatic'],
          ['Slack & Notion integrations', 'Limited', 'Native'],
          ['Free plan', 'Yes, limited minutes/month', 'Yes, unlimited meetings, up to 5 seats'],
        ],
      },
      { type: 'h2', text: 'Pricing comparison' },
      {
        type: 'p',
        text: 'Otter.ai’s paid tiers are priced per user with monthly transcription-minute caps. Lumina’s Pro plan is $12 per seat per month with unlimited recording and transcription on every plan, including Free. Full breakdown on the → pricing page.',
      },
      { type: 'h2', text: 'Who should choose which' },
      {
        type: 'p',
        text: 'If you mainly need a searchable transcript archive across lots of one-off calls, Otter.ai’s free tier may be enough. If your team’s problem is that decisions made in meetings don’t turn into tracked work, Lumina’s automatic action-item routing is the bigger lever.',
      },
    ],
    faq: [
      {
        q: 'Can I switch from Otter.ai to Lumina without losing history?',
        a: 'You can export your Otter.ai transcripts and keep them as a reference archive; Lumina starts generating new transcripts and summaries from the first meeting you connect.',
      },
      {
        q: 'Does Lumina work with the same video platforms as Otter.ai?',
        a: 'Yes — Lumina joins Zoom, Google Meet, and Microsoft Teams calls the same way, by connecting your calendar once.',
      },
    ],
  },
  {
    slug: 'meeting-overload-fix',
    title: 'Meeting Overload Is Real — Here’s How Teams Are Fixing It',
    description:
      "Why does your calendar feel impossible? See the real causes of meeting overload and 5 fixes teams use to cut meeting time without losing alignment.",
    excerpt:
      'The real causes of meeting overload, and 5 fixes teams use to cut meeting time without losing alignment.',
    publishedAt: '2026-01-26',
    updatedAt: '2026-01-26',
    sections: [
      {
        type: 'p',
        text: 'Meeting overload is when the number and length of meetings on a calendar leaves too little time for the work those meetings are supposed to produce. It’s a scheduling and follow-through problem, not just a willpower problem.',
      },
      { type: 'h2', text: 'Why meeting overload happens' },
      {
        type: 'p',
        text: 'Meetings get added faster than they get removed, because cancelling one feels riskier than keeping it. And when decisions from a meeting don’t clearly land anywhere, people schedule a follow-up meeting just to confirm what was already decided — doubling the load without adding information.',
      },
      { type: 'h2', text: '5 ways to fix meeting overload' },
      {
        type: 'ol',
        items: [
          'Require an agenda with a decision or goal before a meeting can be booked',
          'Default new recurring meetings to 25 or 50 minutes, not 30 or 60',
          'Record and transcribe calls so people can skip ones that don’t need their input',
          'Send a written recap with decisions and action items within minutes of the call ending',
          'Review recurring meetings every quarter and cancel the ones that no longer have a clear purpose',
        ],
      },
      { type: 'h2', text: 'The async-recap habit that actually sticks' },
      {
        type: 'p',
        text: 'Teams that cut meeting load successfully almost always pair fewer meetings with better recaps — so skipping a meeting doesn’t mean losing the thread. Lumina generates that recap automatically from the recording, which is what makes "fewer meetings" sustainable instead of just a one-week experiment.',
      },
      {
        type: 'p',
        text: 'See how automatic recaps work on the → features page, or grab the → meeting minutes template to standardize what gets captured.',
      },
    ],
    faq: [
      {
        q: 'How many meetings per week is too many?',
        a: 'There’s no universal number — the better test is whether people regularly leave meetings without a clear decision or action item. If so, the meeting either needs a sharper agenda or should be replaced with an async update.',
      },
      {
        q: 'Does cutting meetings hurt alignment?',
        a: 'Only if nothing replaces the information the meeting used to carry. A written, searchable recap sent to everyone — attendees or not — typically preserves more alignment than a meeting half the team is distracted in.',
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
