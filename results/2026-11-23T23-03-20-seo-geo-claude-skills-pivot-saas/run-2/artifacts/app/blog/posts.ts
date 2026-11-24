export type BlogBlock = { type: 'p' | 'h2'; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  blocks: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: 'inboxzap-is-now-lumina',
    title: 'InboxZap is now Lumina',
    description:
      'InboxZap has become Lumina, an AI meeting assistant. Here is what changed, why we moved on from inbox cleanup, and what it means for your account.',
    excerpt:
      'We started by helping people clean up their inboxes. We kept hearing a bigger problem: nobody could keep track of what actually got decided in meetings. Here is the story of the move from InboxZap to Lumina.',
    publishedAt: '2026-10-06',
    blocks: [
      {
        type: 'p',
        text: "If you used InboxZap to bulk-delete old email and unsubscribe from newsletters, you're in the right place — we're the same team, and we've changed what we build.",
      },
      { type: 'h2', text: 'Why we moved on from inbox cleanup' },
      {
        type: 'p',
        text: "InboxZap solved a real but narrow problem: getting a flooded inbox back under control. The feedback we kept hearing from teams, though, wasn't about email — it was about meetings. People were spending hours writing up notes, arguing about what was decided, and losing track of who owned what.",
      },
      {
        type: 'p',
        text: "That's the problem Lumina is built for. It joins your calls, transcribes them, and turns them into a summary with decisions and action items — automatically.",
      },
      { type: 'h2', text: 'What happens to your InboxZap account' },
      {
        type: 'p',
        text: "InboxZap is no longer actively developed. If you're looking for an inbox-cleanup tool, we'd recommend searching for one that's still maintained — we'd rather point you elsewhere than leave you on something we're not improving.",
      },
      {
        type: 'p',
        text: 'If you run team meetings and want to stop writing manual notes, Lumina is free for teams up to five people. See how it works on the features page, or start free.',
      },
    ],
  },
  {
    slug: 'meeting-minutes-that-people-actually-read',
    title: 'How to write meeting minutes that people actually read',
    description:
      'Most meeting notes go unread because they record everything that was said instead of what changed. Here is a format that people actually open.',
    excerpt:
      'Most meeting notes go unread because they record everything that was said instead of what changed. A shorter, decision-first format fixes that.',
    publishedAt: '2026-10-20',
    blocks: [
      {
        type: 'p',
        text: "The problem with most meeting notes isn't that they're badly written — it's that nobody asked what they're for. A transcript tells you everything that was said. Minutes should tell you what changed.",
      },
      { type: 'h2', text: 'Lead with decisions, not discussion' },
      {
        type: 'p',
        text: "Put the outcome first: what was decided, who owns the next step, and by when. Save the back-and-forth for an appendix, if you keep it at all. Someone catching up in thirty seconds should get the whole picture from the first three lines.",
      },
      { type: 'h2', text: 'Separate decisions from open questions' },
      {
        type: 'p',
        text: "A decision and an unresolved question look the same in a wall of text. Split them into their own sections. It takes one extra minute while writing and saves everyone else from re-litigating something that was already settled.",
      },
      { type: 'h2', text: 'Assign action items to a person, not a team' },
      {
        type: 'p',
        text: '"The team will follow up" is not an action item. "Priya will send the pricing doc by Friday" is. If an item doesn\'t have a name and a date, it quietly never happens.',
      },
      { type: 'h2', text: 'Automate the first draft' },
      {
        type: 'p',
        text: "The format above works, but writing it by hand every meeting is its own tax on your time. Lumina generates this structure automatically from the call — decisions, open questions, and action items with owners — so someone still has to review it, but nobody has to write it from scratch.",
      },
    ],
  },
  {
    slug: 'ai-notes-vs-manual-note-taking',
    title: 'AI meeting notes vs. manual note-taking: what you actually gain',
    description:
      'An honest comparison of AI-generated meeting notes against taking your own notes — what improves, what stays the same, and what still needs a human.',
    excerpt:
      'AI note-taking removes the busywork of writing things down. It does not remove the need for someone to read the result and make sure it is right.',
    publishedAt: '2026-11-03',
    blocks: [
      {
        type: 'p',
        text: "It's worth being specific about what an AI meeting assistant actually changes, instead of treating it as a universal upgrade. Some parts of note-taking get meaningfully better. Others don't change at all.",
      },
      { type: 'h2', text: 'What gets better' },
      {
        type: 'p',
        text: "You stop losing information to a bad memory or a distracted moment. A transcript captures what was actually said, not what the note-taker remembered to jot down while also trying to participate in the conversation. Speaker labels mean you know who said what without guessing later.",
      },
      {
        type: 'p',
        text: 'It also frees up whoever used to be "the note-taker" — usually the same one or two people every time — to actually participate instead of splitting their attention.',
      },
      { type: 'h2', text: "What doesn't change" },
      {
        type: 'p',
        text: "Someone still has to decide what matters. A transcript or an AI summary gives you raw material, not judgment. If a decision was ambiguous in the room, it will still be ambiguous in the write-up — the assistant can surface that it's unclear, but a human has to resolve it.",
      },
      {
        type: 'p',
        text: "You also still need to review the output before it goes out. Automated summaries can misattribute a point to the wrong speaker or miss sarcasm. Treat the first draft as a draft.",
      },
      { type: 'h2', text: "Where it's worth it" },
      {
        type: 'p',
        text: 'For recurring meetings — standups, client calls, planning sessions — the time saved compounds every week. For a one-off conversation you\'ll never need to reference again, it matters a lot less. Lumina is built for the recurring case: it joins your calendar once and handles every call from there.',
      },
    ],
  },
  {
    slug: 'action-item-workflow-for-remote-teams',
    title: 'A simple action-item workflow for remote teams',
    description:
      'A lightweight workflow for making sure action items from meetings actually get done, with or without an AI assistant to generate the first draft.',
    excerpt:
      'Action items fail for the same handful of reasons every time: no owner, no deadline, and nowhere they get checked. Fix those three things first.',
    publishedAt: '2026-11-14',
    blocks: [
      {
        type: 'p',
        text: 'Action items don\'t fail because teams are disorganized. They fail because of a few specific, fixable gaps — most often, nobody checks them after the meeting ends.',
      },
      { type: 'h2', text: '1. Every item needs an owner and a date' },
      {
        type: 'p',
        text: 'If either is missing, it isn\'t an action item yet — it\'s a topic. Don\'t let it leave the meeting without both.',
      },
      { type: 'h2', text: '2. Put items where work already happens' },
      {
        type: 'p',
        text: "A list that lives only in meeting notes gets forgotten the moment the doc is closed. Route action items into the tool your team already checks daily — a Slack channel, a Notion board, a ticket queue. The point isn't the format, it's that it shows up somewhere with traffic.",
      },
      { type: 'h2', text: '3. Review open items at the start of the next meeting' },
      {
        type: 'p',
        text: 'A thirty-second pass through last meeting\'s open items — done, in progress, or stuck — catches the ones that are quietly stalling before they become a bigger problem.',
      },
      { type: 'h2', text: 'Where automation helps' },
      {
        type: 'p',
        text: "Writing the list is the part that's easiest to automate; following up is still a team habit. Lumina extracts action items with owners from each call and routes them to Slack or Notion automatically, so step one and two happen without anyone typing them up — but step three is still on you.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
