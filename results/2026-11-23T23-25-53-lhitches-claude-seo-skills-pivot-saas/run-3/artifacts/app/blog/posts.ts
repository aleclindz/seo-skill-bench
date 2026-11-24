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
    slug: 'meeting-notes-template',
    title: 'The Meeting Notes Template Our Best Teams Actually Use',
    description:
      'A simple meeting notes template that covers decisions, action items, and open questions — the three things people actually go back and check.',
    excerpt:
      'Most meeting notes templates capture everything that was said and nothing that matters. Here is the structure that holds up a week later.',
    publishedAt: '2026-09-02',
    content: [
      "Most meeting notes fail for the same reason: they're a transcript, not a record. Six months from now, nobody needs to know what was discussed — they need to know what was decided, who owns it, and what's still open.",
      "The template that holds up has three sections. Decisions: short, declarative sentences — \"We're shipping the redesign in Q2,\" not \"we talked about maybe shipping the redesign.\" Action items: owner and due date on every line, no exceptions. Open questions: the things the group explicitly couldn't resolve, so the next meeting starts there instead of re-litigating the whole discussion.",
      "Lumina generates this structure automatically from the transcript, so the format stays consistent even when nobody remembers to fill it in by hand. The notes get shorter, not longer, and the people who skipped the meeting can actually catch up from them.",
    ],
  },
  {
    slug: 'ai-meeting-notes-vs-manual-notes',
    title: 'AI Meeting Notes vs. Taking Notes Yourself: What Actually Changes',
    description:
      "A practical comparison of AI meeting notes and manual note-taking — what you gain, what you lose, and when each one is the better call.",
    excerpt:
      "AI notes don't just save time typing. They change who gets to actually participate in the meeting.",
    publishedAt: '2026-09-16',
    content: [
      "When one person is typing notes, they're not fully in the conversation — they're splitting attention between listening and transcribing. That's the real cost of manual note-taking, not the time it takes afterward to clean the notes up.",
      "AI meeting notes remove that trade-off. Everyone can actually participate, and the summary gets written from the full transcript instead of whatever one person managed to catch. The output is also more consistent: the same structure every time, instead of whatever format the note-taker felt like using that day.",
      "The honest trade-off is nuance. A sharp human note-taker can read the room — tone, hesitation, what was said versus what was really meant — in a way a transcript-based summary can't. For most recurring team meetings, that's a small loss against a large, consistent time save. For a handful of high-stakes conversations a quarter, you'll still want a person on notes.",
    ],
  },
  {
    slug: 'meeting-action-items-that-get-done',
    title: 'Meeting Action Items: How to Write Them So They Actually Get Done',
    description:
      'Why most meeting action items never get done, and the small changes to how you write them that fix it.',
    excerpt:
      'The problem with most action items is not that people are lazy. It is that the action item was never actually actionable.',
    publishedAt: '2026-10-01',
    content: [
      '"Follow up on the pricing question" is not an action item. It has no owner, no deadline, and no definition of done. It will still be open in three weeks, and nobody will feel responsible for that.',
      'An action item that gets done has three parts: a single owner (not "the team"), a specific next action (not a topic), and a date. "Maya to send updated pricing tiers to legal by Thursday" survives contact with a busy week. "Follow up on pricing" does not.',
      "This is also why dumping a meeting transcript into a summary doesn't solve the problem on its own — a wall of text buries the three action items that matter inside twenty minutes of discussion. Lumina pulls action items into their own list, with owner and due date flagged, specifically so they don't get lost in the recap.",
    ],
  },
  {
    slug: 'meeting-overload',
    title: "Meeting Overload Is Real — Here's What's Actually Causing It",
    description:
      'Meeting overload usually comes from three habits: no agenda, no owner, and no decision. Here is how to spot which one is hitting your team.',
    excerpt:
      "\"Too many meetings\" is rarely the real diagnosis. It's usually too many meetings that didn't need to happen in the first place.",
    publishedAt: '2026-10-14',
    content: [
      "Teams that feel buried in meetings usually don't have a scheduling problem — they have a clarity problem. A status update that could have been a two-line message becomes a 30-minute meeting because nobody trusts that a written update will actually get read.",
      'Three patterns cause most of the overload: meetings with no agenda (so they expand to fill the hour), meetings with no single owner (so decisions don\'t get made, and a follow-up meeting gets booked), and meetings that are really just status checks dressed up as discussions.',
      "The fix isn't fewer meetings for the sake of it — it's being honest about which ones are discussions that need a room, and which ones are updates that could be a recap. Teams using Lumina often find that once meeting recaps are reliable, half their status meetings quietly stop needing to exist.",
    ],
  },
  {
    slug: 'async-standups-remote-teams',
    title: "How Async Standups Replace Half Your Team's Meetings",
    description:
      'A practical guide to running async standups for remote and hybrid teams, including when a live meeting is still the better call.',
    excerpt:
      'Daily standups are the easiest meeting to kill without losing anything. Here is how teams actually do it.',
    publishedAt: '2026-10-28',
    content: [
      "A daily standup across time zones is a tax, not a ritual. If the point is \"what did you do, what are you doing, what's blocking you,\" that's a written update, not a meeting — it doesn't need everyone live at the same time to work.",
      'Async standups work when they\'re structured the same way every day (so people don\'t have to think about format) and when blockers get flagged clearly enough that someone actually follows up. The failure mode is an async update that becomes a wall of unread text in a channel nobody checks.',
      "This isn't an argument against meetings — it's an argument for spending live meeting time on things that actually need a live discussion: decisions, disagreements, planning. Status doesn't need a room. Recaps from your actual meetings, shared the same way, make the async habit easier to trust.",
    ],
  },
  {
    slug: 'zoom-google-meet-teams-transcription',
    title: 'Zoom, Google Meet, or Teams: Where Meeting Transcription Fits In',
    description:
      'How automatic meeting transcription works across Zoom, Google Meet, and Microsoft Teams, and what to look for before you pick a tool.',
    excerpt:
      "Most teams run meetings across more than one video platform. Transcription that only works on one of them creates a gap in your record.",
    publishedAt: '2026-11-10',
    content: [
      'Few teams standardize on a single video platform — sales might live in Zoom, engineering in Google Meet, and a partner team insists on Microsoft Teams. If your transcription tool only covers one of them, you end up with a complete meeting record for part of the business and nothing for the rest.',
      "Lumina joins meetings the same way across Zoom, Google Meet, and Microsoft Teams: it's added to the calendar invite, joins automatically, and produces a speaker-labeled transcript and recap regardless of which platform the meeting happens to be on.",
      "When you're evaluating transcription tools, the question to ask isn't \"does it work with my video platform\" — it's \"does it work the same way across all of them,\" so your meeting record doesn't have platform-shaped holes in it six months from now.",
    ],
  },
];
