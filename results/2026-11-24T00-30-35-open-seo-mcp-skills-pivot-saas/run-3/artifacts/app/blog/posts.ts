export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'meeting-notes-template',
    title: 'The Meeting Notes Template Your Team Will Actually Use',
    description:
      'A simple meeting notes template that captures decisions and action items instead of a wall of text nobody re-reads.',
    publishedAt: '2026-10-06',
    body: [
      "Most meeting notes templates fail for the same reason: they try to capture everything that was said, instead of the handful of things that actually need to survive the meeting. Nobody re-reads a transcript. People re-read decisions and action items.",
      "A template that works has four sections, in this order: Decisions (what did we agree to, in one line each), Action items (who owns what, with a date), Open questions (what we couldn't resolve and who's chasing the answer), and Context (the two or three sentences a future reader needs if they weren't in the room).",
      "The trap most teams fall into is writing the template once and then abandoning it by the third meeting, because someone has to manually fill it in while also participating. That's the part Lumina automates: it joins the call, transcribes it, and fills in decisions and action items for you, so the template survives contact with a busy week.",
    ],
  },
  {
    slug: 'how-to-write-meeting-action-items',
    title: 'How to Write Meeting Action Items People Actually Finish',
    description:
      'Why most meeting action items never get done, and the three-part format that fixes it: owner, deadline, and a verifiable outcome.',
    publishedAt: '2026-10-20',
    body: [
      "Vague action items die quietly. \"Follow up on the pricing page\" has no owner, no deadline, and no way to tell if it's done. It sits in someone's notes until the next meeting, when it gets restated and ignored again.",
      "Action items that get finished have three parts: an owner (one person, not a team), a deadline (a date, not \"soon\"), and a verifiable outcome (something you can check off, like \"send the draft\" rather than \"think about\"). If an action item can't be phrased that way, it's actually a discussion that didn't finish — put it back on the agenda instead of pretending it's a task.",
      "The reason action items get lost in the first place is usually that nobody was assigned to write them down in real time. Lumina extracts action items directly from the meeting transcript and routes them to the right owner in Slack, so they exist before the meeting even ends.",
    ],
  },
  {
    slug: 'async-standup-guide-for-remote-teams',
    title: 'Async Standups: A Practical Guide for Remote Teams',
    description:
      'How to run a standup without a synchronous meeting, and when async actually makes a distributed team faster.',
    publishedAt: '2026-11-03',
    body: [
      "A daily standup across three time zones usually means someone is attending at 7am or 9pm. Async standups fix the scheduling problem, but only if you replace the meeting with structure, not just a Slack channel where updates get buried.",
      "A working async standup has a fixed format (what I did, what I'm doing, what's blocking me), a fixed time window to post it, and a clear owner who scans for blockers and escalates the ones that need a real conversation. Without that last part, async standups just become a status report nobody reads.",
      "The teams that keep async standups going long-term usually pair them with recorded meetings for anything that does need discussion — so decisions made in a sync call still show up as searchable context for the people who were asleep when it happened. That's the gap Lumina's transcripts and summaries fill.",
    ],
  },
  {
    slug: 'ai-meeting-summary-accuracy',
    title: 'How Accurate Are AI Meeting Summaries? A Practical Checklist',
    description:
      "What to actually check before you trust an AI meeting summary, and the failure modes that catch teams off guard.",
    publishedAt: '2026-11-14',
    body: [
      "AI meeting summaries fail in predictable ways: cross-talk gets misattributed to the wrong speaker, numbers and names get mangled, and sarcasm or hedged language (\"I guess we could maybe try X\") sometimes gets written up as a firm decision.",
      "Before you trust a summary for anything important, check three things: does it correctly separate who said what, does it flag action items with an owner rather than inventing one, and does it distinguish a decision from a suggestion. A good summary tool will let you jump from any line in the summary back to the exact moment in the transcript it came from, so you can verify it in seconds instead of re-watching the recording.",
      "Lumina's summaries link every decision and action item back to the transcript timestamp it came from, specifically so you don't have to take the AI's word for it.",
    ],
  },
  {
    slug: 'meeting-overload-email-problem',
    title: "Meeting Overload Is Flooding Your Inbox — Here's the Fix",
    description:
      'Why your inbox feels unmanageable even after a cleanup: most of the backlog is meeting follow-ups, not spam.',
    publishedAt: '2026-11-20',
    body: [
      "If you've ever bulk-deleted your way to inbox zero only to be back at 400 unread messages a month later, the newsletters and receipts were never the real problem. The fastest-growing category in most inboxes is meeting follow-up: recap emails, \"sending this along as promised\" threads, and the fifteen replies a single decision generates once it's been relitigated by email.",
      "Filters and bulk-delete tools treat the symptom. They clear out what's already there, but they don't stop five new meeting-follow-up threads from starting tomorrow. The actual fix is upstream: get the recap, decisions, and action items out of the meeting and into a place people can search, before anyone feels the need to write a summary email at all.",
      "That's the gap Lumina is built for. It produces the recap automatically and routes action items to Slack, so the meeting stops generating a trail of follow-up email in the first place.",
    ],
  },
];
