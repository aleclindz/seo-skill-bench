export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: 'lumina-formerly-inboxzap',
    title: 'Lumina (formerly InboxZap): why we rebuilt around meetings, not inboxes',
    description:
      "InboxZap is now Lumina. Here's why we moved from email cleanup to an AI meeting assistant, and what it means if you were an InboxZap user.",
    publishedAt: '2026-09-02',
    body: [
      "If you used InboxZap to bulk-delete old emails or unsubscribe from newsletters, you might be wondering where it went. InboxZap is now Lumina, and we've rebuilt the product from the ground up around a different problem: what happens in your meetings, not what piles up in your inbox.",
      'InboxZap solved a real but narrow problem — inbox clutter. Talking to the teams who used it, we kept hearing a bigger complaint: nobody could remember what was actually decided in a meeting, action items fell through the cracks, and whoever missed the call had no way to catch up except asking around. That problem affects every team, every week, and it compounds. We decided to go build for that instead.',
      'Lumina joins your Zoom, Google Meet, or Microsoft Teams calls, records and transcribes them with speaker labels, and turns every meeting into a structured recap: decisions, open questions, blockers, and action items routed to the people who own them. No more "wait, what did we agree on?" threads.',
      "If you were on InboxZap's free plan, your account and data were not carried over automatically — the products don't share infrastructure. You're welcome to start a new free Lumina workspace for your team; it's free for up to 5 teammates, with no credit card required.",
      "We're grateful to everyone who used InboxZap. If inbox cleanup is still what you need, tools like Gmail's own bulk-select and filters, or Clean Email, can cover that use case well. For meetings, that's what we're here for now.",
    ],
  },
  {
    slug: 'ai-meeting-notes-save-hours',
    title: 'How AI meeting notes save teams hours every week',
    description:
      'A breakdown of where meeting time actually goes, and how automatic transcription and summaries give teams back hours every week.',
    publishedAt: '2026-09-18',
    body: [
      "The average knowledge worker spends 15 to 20 hours a week in meetings. A meaningful chunk of that time is spent not in the meeting itself, but around it: writing notes during the call, re-reading them after, drafting a recap email, and chasing people down to confirm who owns what.",
      'AI meeting notes remove most of that overhead. When a tool like Lumina joins the call, records it, and produces a speaker-labeled transcript automatically, nobody has to choose between participating in the discussion and documenting it. The summary — decisions made, questions left open, action items with owners — is ready before the next meeting starts.',
      'The time savings show up in a few places. First, note-taking disappears: whoever used to be the designated scribe gets to actually participate instead. Second, status-update meetings shrink or disappear, because anyone can catch up on a recap in two minutes instead of attending to find out what happened. Third, "what did we decide" threads in Slack or email mostly go away, because the recap is searchable and gets linked instead of re-litigated.',
      'Teams that adopt an AI meeting assistant typically report recovering several hours per person per week within the first month — not because meetings got shorter, but because the work of remembering and communicating what happened in them stopped being manual.',
      "The biggest gains come from pairing transcription with routing: pushing action items directly into Slack or a project tool, rather than leaving them in a document nobody reopens. A recap that nobody reads back is just a longer meeting.",
    ],
  },
  {
    slug: 'best-ai-meeting-assistants-2026',
    title: 'The best AI meeting assistants in 2026: how to choose',
    description:
      'What to actually evaluate when comparing AI meeting assistants: transcription accuracy, summary quality, integrations, and data handling.',
    publishedAt: '2026-10-07',
    body: [
      "Most AI meeting assistants now do the same three things at a basic level: join a call, transcribe it, and produce a summary. The differences that matter show up once you look closer at accuracy, how the summary is structured, and what happens to your data.",
      "Transcription accuracy is the foundation. Look for speaker-labeled transcripts (not just a wall of text), support for the languages your team actually speaks, and accuracy on technical or domain-specific vocabulary — generic demos rarely test this.",
      'Summary quality is where tools diverge the most. A good summary separates decisions from open questions from action items, and assigns owners to action items rather than just listing tasks. A summary that reads like a transcript recap, instead of a structured output, won\'t save you the follow-up work.',
      'Integrations decide whether the output actually gets used. If action items stay inside the meeting tool, people have to remember to check it — which they mostly won\'t. Look for direct routing into Slack, Notion, or your CRM, so recaps land where work already happens.',
      'Data handling matters more as adoption grows: ask how long transcripts are retained, whether recordings are used to train models, and what SSO, SAML, and data residency options exist for larger teams. Lumina, for example, keeps retention configurable and offers SSO/SAML and data residency on its Enterprise plan.',
      "Finally, try the free tier on a real recurring meeting, not a demo call. The gap between a polished product demo and a messy, cross-talking stand-up is exactly where transcription and summarization tools show their limits.",
    ],
  },
  {
    slug: 'meeting-action-items-that-get-done',
    title: 'How to write meeting action items people actually follow through on',
    description:
      'Why most meeting action items never get done, and the format that makes them stick: clear owners, deadlines, and a single source of truth.',
    publishedAt: '2026-10-22',
    body: [
      "Most meeting action items die quietly. They get written down, nobody follows up, and by the next meeting everyone has silently agreed to forget about them. The problem is rarely motivation — it's almost always format.",
      'A task that reads "look into the pricing page" has no owner, no deadline, and no definition of done. Compare that to "Jordan updates the pricing page copy by Friday and shares a draft in #marketing." The second version gets done because it\'s unambiguous about who, what, and by when.',
      'Three things make an action item stick: a single named owner (not "the team"), a concrete deadline (not "soon"), and a place it lives that people actually check — a Slack channel or project board, not a meeting-notes document that gets closed and forgotten.',
      "This is where automatic recaps help: if your meeting assistant extracts action items and routes them straight to Slack or a task tool, the item shows up where the owner already works, instead of depending on someone re-reading notes and manually creating tasks later. Lumina does this by pushing action items from the recap directly into Slack or Notion as soon as the meeting ends.",
      'A simple test for any recurring meeting: open last week\'s action items right now. If you can\'t tell who owned each one and whether it\'s done, the format is the problem — not the team.',
    ],
  },
  {
    slug: 'zoom-vs-meet-vs-teams-ai-notetaker',
    title: 'Zoom vs. Google Meet vs. Microsoft Teams: which works best with an AI notetaker',
    description:
      'How Zoom, Google Meet, and Microsoft Teams differ for AI meeting assistants: bot join flow, transcript quality, and integration depth.',
    publishedAt: '2026-11-10',
    body: [
      'Most teams don\'t pick a video platform because of how well it pairs with an AI notetaker — but once you\'re running transcription and summaries on every call, the differences between Zoom, Google Meet, and Microsoft Teams start to matter.',
      'Zoom has the most mature bot ecosystem: joining as a visible participant, recording, and transcribing is well supported and tends to be the most reliable across both scheduled and ad-hoc calls. It\'s usually the easiest platform to get consistent results on.',
      "Google Meet integrates tightly with Google Calendar, which makes auto-join for recurring meetings straightforward if your team already lives in Google Workspace. Transcript quality is solid, though some enterprise security settings can restrict third-party bots from joining without an admin allowlisting them first.",
      'Microsoft Teams is the most locked-down of the three by default, especially in enterprise tenants with strict meeting policies. It works well once an admin grants the right permissions, but expect an extra setup step compared to Zoom or Meet.',
      'In practice, the platform matters less than making sure your AI meeting assistant supports all three if your company is mixed — plenty of teams run Zoom for sales calls and Teams for internal standups. Lumina joins all three out of the box, so the choice of platform doesn\'t force you to lose transcription coverage on any of your meetings.',
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}
