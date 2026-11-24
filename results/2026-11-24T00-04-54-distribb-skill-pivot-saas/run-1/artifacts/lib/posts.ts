export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: 'inboxzap-is-now-lumina',
    title: 'InboxZap Is Now Lumina: Why We Rebuilt Around Meetings, Not Email',
    description:
      "InboxZap has become Lumina. Here's why we moved from inbox cleanup to an AI meeting assistant, and what it means if you remember us by the old name.",
    excerpt:
      "We spent years helping people clean up their inbox. Here's why the company is now built around meetings instead.",
    publishedAt: '2026-01-14',
    content: [
      "InboxZap started as a tool for bulk-deleting old email, unsubscribing from newsletters, and getting back to inbox zero. It worked, and a lot of people used it that way for a while. But as we talked to customers about what was actually eating their week, the answer kept changing: it wasn't email anymore. It was meetings — specifically, the twenty minutes after every call spent writing down what just happened before it disappeared.",
      'Lumina is the product we built in response. Instead of helping you process messages after the fact, it sits in the meeting itself: joining the call, transcribing it, and turning that transcript into a summary with decisions and action items attached to the people who own them.',
      "If you had an InboxZap account, this is a different product built for a different problem, not an upgrade to the old one. If you're here because you remember the old name, welcome back — the features page covers what Lumina does today.",
    ],
  },
  {
    slug: 'meeting-summary-template',
    title: 'The Meeting Summary Template We Use Internally',
    description:
      'A simple, repeatable template for meeting summaries: decisions, action items, owners, and open questions. Use it with or without AI.',
    excerpt: 'Five sections, in this order, cover almost every meeting worth summarizing.',
    publishedAt: '2026-02-03',
    content: [
      "Most meeting notes fail for the same reason: they're a transcript, not a summary. A good summary separates decisions, action items, open questions, and context, and puts them in that order, because that's the order people actually scan in.",
      'Decisions go first: what was agreed, in one line each, with no hedging language. Action items follow, each phrased as a verb tied to a single owner and a date — "Maria to send the pricing doc by Friday," not "pricing doc needs to go out." Open questions come third, so anything unresolved stays visible instead of buried in the discussion.',
      "Context — who attended, what the meeting was about, and a link to the recording — goes last, because almost nobody reads it unless they need to double-check something. If your notes put context first, you're optimizing for the person writing them, not the person reading them.",
      "This is the exact structure Lumina generates automatically after every call. If you're writing notes by hand, copying this order alone will make them dramatically more useful to the people who weren't in the room.",
    ],
  },
  {
    slug: 'action-items-vs-decisions',
    title: 'Action Items vs. Decisions: Why Most Meeting Notes Mix Them Up',
    description:
      "Decisions and action items look similar in a meeting but need to be tracked differently. Here's the distinction, and why conflating them causes dropped work.",
    excerpt: 'A decision is a fact. An action item is a debt. Treating them the same is why things fall through.',
    publishedAt: '2026-02-20',
    content: [
      'A decision is something the group agreed on — "we\'re launching on the 14th," "we\'re using the B pricing tier." Once it\'s made, it doesn\'t need anyone to do anything else; it just needs to be remembered and referenced later.',
      'An action item is different: it\'s an open debt owed by one specific person. "Launch on the 14th" is a decision. "Sam updates the changelog before the 14th" is an action item. Writing them in the same bucket lets the action item borrow the decision\'s sense of closure — it feels done because it was decided, even though nobody has actually done anything yet.',
      'The fix is mechanical: every action item needs an owner\'s name and a date, written as a sentence a person could be held to. A note that says "update the docs" with no owner isn\'t an action item — it\'s a decision that hasn\'t been made yet, which is exactly why it gets dropped.',
      'This is also why Lumina tags action items separately from decisions in every summary, with the owner pulled from who was speaking when the commitment was made, instead of leaving it to whoever writes the notes afterward to guess.',
    ],
  },
  {
    slug: 'ai-meeting-notes-vs-manual-notes',
    title: 'AI Meeting Notes vs. Manual Notes: What Actually Changes',
    description:
      "AI meeting notes don't just save typing time. Here's what changes in practice when a transcript-based summary replaces notes someone wrote from memory.",
    excerpt: "The time saved isn't the real difference — the accuracy is.",
    publishedAt: '2026-03-11',
    content: [
      "The obvious pitch for AI meeting notes is time: nobody has to type during the call anymore. That's true, but it undersells the bigger change, which is accuracy. Notes written from memory after a call compress and distort what happened, usually toward whoever wrote them — the loudest objection gets remembered, the quiet agreement from someone at the edge of the table doesn't.",
      "A transcript-based summary doesn't have that bias. It can surface the line where someone actually agreed to own a task, even if the conversation moved on quickly, because it's working from what was said rather than what the note-taker happened to retain.",
      'The second change is coverage: someone who missed a meeting can read a five-line summary instead of asking a teammate to recap it from memory a week later, which is usually when the details have already faded for everyone.',
      'None of this requires trusting the AI blindly — the transcript sits right behind the summary, so anything that looks off is one click away from being checked against what was actually said.',
    ],
  },
];
