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
    slug: 'lumina-formerly-inboxzap',
    title: "Lumina Was Formerly InboxZap — Here's Why We Rebuilt Around Meetings",
    description:
      'Lumina started life as InboxZap, an email cleanup tool. Here is why we rebuilt the product from scratch as an AI meeting assistant, and what happened to your old account.',
    excerpt:
      'If you knew us as InboxZap, you are in the right place. Here is what changed, why, and what it means for you.',
    publishedAt: '2026-09-01',
    body: [
      "If you found this page because you searched for \"InboxZap,\" you're in the right place — Lumina is the same company, same team, new product. For two years, InboxZap helped people bulk-delete old email and unsubscribe from newsletters. It worked, but it solved a problem people only think about once a quarter.",
      'Meetings, on the other hand, are a problem every team has every single day. While building InboxZap, we kept hearing the same complaint from our own customers: nobody could remember what was decided in last week\'s call, and action items fell through the cracks constantly. So we rebuilt the product around that problem instead.',
      "Lumina joins your Zoom, Meet, or Teams calls, transcribes them with speaker labels, and turns the conversation into a summary with decisions and action items — automatically, before you're even back at your desk.",
      'If you had an InboxZap account, it has not been deleted. Email us from the address on file and we will help you find your data or close things out. And if you just need a good inbox cleanup tool, we are no longer the right answer for that — but we will always be happy you found us once.',
    ],
  },
  {
    slug: 'ai-meeting-notes-vs-manual-notes',
    title: 'AI Meeting Notes vs. Manual Note-Taking: What Actually Changes for Your Team',
    description:
      'A practical comparison of AI-generated meeting notes versus manual note-taking, covering accuracy, speed, and what teams actually do with the output.',
    excerpt:
      'Manual notes capture what one person thought was important. AI notes capture what was actually said. The difference matters more than you think.',
    publishedAt: '2026-09-15',
    body: [
      'Every team already takes meeting notes in some form. The question is not whether to have notes, it\'s whether the notes are useful six days later when someone asks "wait, did we actually agree to that?"',
      'Manual notes are filtered through whoever is typing. They skip context the note-taker found boring, miss the moment someone changed their mind, and almost never capture exact commitments word-for-word. That\'s fine for a casual sync, but it falls apart for anything with real stakes — budget calls, customer escalations, hiring decisions.',
      "AI-generated notes work from the full transcript, so they catch the whole conversation, not just the parts one person thought to write down. The practical difference shows up in three places: speaker attribution (who actually said they'd own the task), searchability (you can find the one sentence from three weeks ago instead of skimming ten documents), and consistency (every meeting gets the same quality of notes, not just the ones where someone remembered to take them).",
      "The tradeoff is that AI notes need a light human pass — a summary is only as good as the model's read on what mattered. Lumina handles the transcription and first-draft summary automatically, then lets whoever ran the meeting edit action items before they go out. That combination — machine speed, human judgment — is where most teams land once they've tried both ways.",
    ],
  },
  {
    slug: 'how-to-write-meeting-minutes',
    title: 'How to Write Meeting Minutes That People Actually Read',
    description:
      'A simple structure for meeting minutes that gets read: decisions first, action items with owners and dates, discussion notes last.',
    excerpt:
      "Most meeting minutes go unread because they're organized chronologically instead of by what matters. Here's a structure that works.",
    publishedAt: '2026-10-05',
    body: [
      "The most common mistake in meeting minutes is writing them in the order things happened. Nobody wants a transcript — they want to know what was decided and what they need to do about it. Reorganize around that instead.",
      "Start with decisions. One line each: what was decided, and who made the call. If nothing was decided, say so explicitly — \"no decision, revisit next week\" is more useful than silence.",
      "Next, action items, and only action items that have an owner and a due date. An action item with no owner is a wish, not a task. If you can't assign it in the meeting, flag it as unassigned rather than letting it quietly disappear.",
      "Discussion notes come last, and they should be short. The goal is enough context that someone who missed the meeting understands why a decision was made, not a full record of who said what.",
      'If you want this without the manual write-up, Lumina generates minutes in this exact structure from the call transcript automatically, with owners and dates pulled straight from what was said.',
    ],
  },
  {
    slug: 'running-meetings-with-clear-action-items',
    title: 'Running Meetings That Produce Action Items, Not Just Notes',
    description:
      'Why most meetings end with notes but no follow-through, and a simple set of habits that turns discussion into completed work.',
    excerpt:
      "A meeting that ends with notes but no owners is a meeting that didn't happen. Here's how to fix that without adding more process.",
    publishedAt: '2026-10-20',
    body: [
      'A meeting that produces great notes but no completed work has still failed. The gap is almost always the same: something gets discussed, everyone nods, and nobody says out loud "I will do this by Friday."',
      'The fix is a habit, not a tool: end every topic with an explicit owner and date, said out loud, before moving on. "Someone should look into this" is not an action item. "Priya will check the API logs by Wednesday" is.',
      "Second, review open action items at the start of the next meeting, not the end. Reviewing them last means they get rushed or skipped when the meeting runs long, which it always does.",
      "Third, keep a single running list per team instead of a new list per meeting. Action items that live in last week's document are action items nobody checks.",
      'Lumina extracts owners and dates directly from the conversation and carries open items forward automatically, so the running list stays current without anyone maintaining it by hand.',
    ],
  },
  {
    slug: 'async-standups-for-remote-teams',
    title: 'Async Standups: A Practical Guide for Distributed Teams',
    description:
      'How distributed teams run effective async standups without a daily meeting, including what to include and what to skip.',
    excerpt:
      "If your team spans time zones, a daily synchronous standup is often the wrong tool. Here's how to run it async instead.",
    publishedAt: '2026-11-10',
    body: [
      "A daily standup assumes everyone is awake at the same time. For teams spread across time zones, that assumption breaks down fast — someone is always joining at 7am or skipping it entirely.",
      "An async standup keeps the same content — what I did, what I'm doing, what's blocking me — but delivered as a written update on a shared channel or doc, read on each person's own schedule instead of live.",
      'The habits that make async standups work: keep updates short (three lines, not three paragraphs), post at a consistent time so teammates know when to expect them, and flag blockers explicitly so they don\'t get buried in a wall of status updates.',
      "The one thing async standups lose is synchronous meetings' side effect of surfacing problems in real time through back-and-forth. Teams that go fully async usually keep one short weekly sync — recorded and summarized — to cover anything that needs live discussion. Lumina can turn that weekly sync into the same kind of searchable record an async standup channel already gives you, so nothing said out loud gets lost either.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
