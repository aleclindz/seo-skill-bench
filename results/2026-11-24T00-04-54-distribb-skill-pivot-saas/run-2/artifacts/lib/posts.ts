export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'ul'; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  excerpt: string;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: 'what-is-an-ai-meeting-assistant',
    title: 'What Is an AI Meeting Assistant (and Do You Need One)?',
    description:
      'An AI meeting assistant joins your calls, transcribes them, and turns the conversation into summaries and action items. Here is how it works and when it is worth adopting.',
    publishedAt: '2026-01-12',
    excerpt:
      'An AI meeting assistant joins your calls, transcribes them, and turns the conversation into summaries and action items.',
    body: [
      {
        type: 'p',
        text:
          'An AI meeting assistant is software that joins your video calls (Zoom, Google Meet, or Microsoft Teams), records and transcribes the conversation, and then turns that transcript into something people actually use: a summary, a list of decisions, and action items assigned to the right person.',
      },
      {
        type: 'h2',
        id: 'what-it-replaces',
        text: 'What it replaces',
      },
      {
        type: 'p',
        text:
          'Before these tools existed, one person took notes by hand, usually imperfectly, and sent a recap email hours or days later if at all. An AI meeting assistant replaces that entire workflow: nobody has to split their attention between listening and typing, and the recap goes out automatically right after the call ends.',
      },
      {
        type: 'h2',
        id: 'how-it-works',
        text: 'How it works',
      },
      {
        type: 'ul',
        items: [
          'It joins the call as a participant (or connects via your calendar so it joins automatically).',
          'It records audio and produces a speaker-labeled transcript.',
          'An AI model reads the transcript and extracts decisions, open questions, and action items.',
          'The summary and action items are sent to attendees and routed to the owners responsible for each item.',
        ],
      },
      {
        type: 'h2',
        id: 'do-you-need-one',
        text: 'Do you need one?',
      },
      {
        type: 'p',
        text:
          "If your team runs more than a few recurring meetings a week, or if you've ever argued about what was actually decided in a call, the answer is probably yes. Teams that adopt an assistant like Lumina stop losing decisions to memory and stop paying one person to be a full-time notetaker.",
      },
      {
        type: 'p',
        text:
          'See the full breakdown of what Lumina automates on the <a href="/features">features page</a>, or go deeper on note-taking in <a href="/blog/how-to-write-better-meeting-notes-with-ai">How to Write Better Meeting Notes with AI</a>.',
      },
    ],
  },
  {
    slug: 'how-to-write-better-meeting-notes-with-ai',
    title: 'How to Write Better Meeting Notes with AI',
    description:
      'Good meeting notes capture decisions and owners, not a transcript. Here is how AI note-taking tools make that automatic.',
    publishedAt: '2026-01-19',
    excerpt:
      'Good meeting notes capture decisions and owners, not a transcript. Here is how to get there with AI.',
    body: [
      {
        type: 'p',
        text:
          'Most "meeting notes" fail for the same reason: they either capture everything (an unreadable wall of text) or almost nothing (three bullet points nobody can act on). Good notes do one job well: they tell someone who was not in the room what was decided and what they need to do next.',
      },
      {
        type: 'h2',
        id: 'the-three-things-notes-need',
        text: 'The three things notes need',
      },
      {
        type: 'ul',
        items: [
          'Decisions — what was actually agreed, stated as a fact, not a discussion summary.',
          'Owners — who is responsible for each follow-up, by name.',
          'Deadlines — when each action item is due, even if it is a rough date.',
        ],
      },
      {
        type: 'h2',
        id: 'why-manual-notes-miss-this',
        text: 'Why manual notes miss this',
      },
      {
        type: 'p',
        text:
          'Someone taking notes live is also trying to participate in the conversation. They write down what sounds important in the moment, which usually means dialogue, not conclusions. By the time the recap gets typed up, the decisions and owners have blurred together.',
      },
      {
        type: 'h2',
        id: 'how-ai-fixes-it',
        text: 'How AI note-taking fixes it',
      },
      {
        type: 'p',
        text:
          'An AI meeting assistant like Lumina transcribes the full conversation, then runs a separate extraction pass specifically for decisions, blockers, and action items, with owners assigned automatically. Because it is not also trying to participate in the meeting, it catches follow-ups a human note-taker would miss. Pair this with a habit of capturing <a href="/blog/track-meeting-action-items-automatically">action items automatically</a> and your recap writes itself.',
      },
    ],
  },
  {
    slug: 'track-meeting-action-items-automatically',
    title: 'How to Capture and Track Meeting Action Items Automatically',
    description:
      'Action items only work if they are captured accurately and land with the right owner. Here is how to automate that end to end.',
    publishedAt: '2026-01-26',
    excerpt:
      'Action items only work if they are captured accurately and land with the right owner. Here is how to automate that end to end.',
    body: [
      {
        type: 'p',
        text:
          'An action item that lives only in someone\'s memory, or buried in a 40-minute recording, is not an action item. It is a hope. Tracking action items automatically means every commitment made out loud in a meeting ends up assigned, dated, and visible somewhere your team actually looks.',
      },
      {
        type: 'h2',
        id: 'what-automatic-tracking-looks-like',
        text: 'What automatic tracking looks like',
      },
      {
        type: 'ul',
        items: [
          'The assistant listens for commitment language ("I\'ll send that by Friday", "Let\'s have Sam review this") during the call.',
          'Each item is extracted with an owner and, where stated, a deadline.',
          'Items are routed to the owner directly, by email or chat, right after the meeting ends — not buried in a shared doc nobody reopens.',
        ],
      },
      {
        type: 'h2',
        id: 'why-this-beats-a-shared-doc',
        text: 'Why this beats a shared doc',
      },
      {
        type: 'p',
        text:
          'A shared action-item doc only works if everyone remembers to open it. Routing items directly to the owner removes that step: the person responsible gets a notification, not a task they have to go looking for. Lumina does this automatically on every call; see the full flow on the <a href="/features">features page</a>.',
      },
      {
        type: 'h2',
        id: 'getting-started',
        text: 'Getting started',
      },
      {
        type: 'p',
        text:
          'If you are evaluating tools to do this, start with what matters most: accuracy of owner assignment, not just transcription quality. Our guide to <a href="/blog/best-ai-meeting-assistant-for-teams">choosing an AI meeting assistant</a> covers what to test before you commit to one.',
      },
    ],
  },
  {
    slug: 'best-ai-meeting-assistant-for-teams',
    title: 'Best AI Meeting Assistant for Teams: What to Look for in 2026',
    description:
      'Not all AI meeting assistants are built the same. Here is what actually separates them, beyond transcription accuracy.',
    publishedAt: '2026-02-02',
    excerpt:
      'Not all AI meeting assistants are built the same. Here is what actually separates them, beyond transcription accuracy.',
    body: [
      {
        type: 'p',
        text:
          'Transcription accuracy used to be the differentiator between AI meeting assistants. It is not anymore; most tools transcribe well enough. What actually separates the good ones from the mediocre ones is what happens after the transcript.',
      },
      {
        type: 'h2',
        id: 'what-to-actually-test',
        text: 'What to actually test',
      },
      {
        type: 'ul',
        items: [
          'Summary quality — does it surface decisions, or just paraphrase the conversation?',
          'Action-item accuracy — does it correctly identify who owns each follow-up?',
          'Platform coverage — does it work on all the call tools your team actually uses (Zoom, Meet, Teams)?',
          'Search — can you find the moment a specific decision was made, months later?',
          'Price at your real team size — per-seat pricing adds up fast past 10-15 users.',
        ],
      },
      {
        type: 'h2',
        id: 'red-flags',
        text: 'Red flags',
      },
      {
        type: 'p',
        text:
          'Be wary of tools that only offer a raw transcript with no decision/action-item extraction, that lock meeting history behind a short retention window, or that only support one video platform. These limits show up the moment your team scales past casual use.',
      },
      {
        type: 'h2',
        id: 'where-lumina-fits',
        text: 'Where Lumina fits',
      },
      {
        type: 'p',
        text:
          'Lumina covers all three major call platforms, extracts and routes action items automatically, and keeps every meeting searchable indefinitely. It is free for teams up to 5, so you can test it against your real meetings before committing. See <a href="/pricing">pricing</a> or read <a href="/blog/what-is-an-ai-meeting-assistant">what an AI meeting assistant actually does</a> if you are earlier in the evaluation.',
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
