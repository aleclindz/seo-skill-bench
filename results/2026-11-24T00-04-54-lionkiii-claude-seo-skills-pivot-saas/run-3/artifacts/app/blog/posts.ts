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
    slug: 'ai-meeting-notes-explained',
    title: 'AI Meeting Notes: What They Are and How They Save Teams Hours Every Week',
    description:
      'What AI meeting notes actually capture, how they differ from a human-taken summary, and why they give distributed teams hours back every week.',
    excerpt:
      'What AI meeting notes actually capture, and why they give distributed teams hours back every week.',
    publishedAt: '2026-10-06',
    body: [
      "AI meeting notes aren't just a transcript. A raw transcript is a wall of text nobody rereads; AI meeting notes are a structured summary built from that transcript — who said what, which decisions got made, and which follow-ups are now someone's job. The difference matters because the whole point of notes is that someone other than the note-taker can act on them without sitting through the recording.",
      "The biggest time savings don't come from skipping typing during the call — they come from eliminating the meeting entirely for people who only needed the outcome. When a summary with decisions and action items lands in Slack five minutes after a call ends, the three stakeholders who weren't invited stay out of the room but stay fully informed. Across a team of twenty, that routinely adds up to several reclaimed hours per person per week.",
      'The teams that get the most value treat AI notes as the system of record, not a nice-to-have. Action items get assigned to an owner automatically, decisions get searchable so nobody re-litigates them a month later, and the transcript stays available if anyone needs the exact wording. Lumina does all three by default — connect your calendar once, and every Zoom, Meet, or Teams call you join gets this treatment automatically.',
    ],
  },
  {
    slug: 'record-and-transcribe-zoom-meet-teams',
    title: 'How to Record and Transcribe Any Zoom, Google Meet, or Teams Call',
    description:
      'A practical walkthrough of recording and transcribing meetings across Zoom, Google Meet, and Microsoft Teams — and why doing it automatically beats doing it manually.',
    excerpt:
      'A practical walkthrough of recording and transcribing meetings across Zoom, Meet, and Teams.',
    publishedAt: '2026-10-20',
    body: [
      'Each platform has its own native recording and transcription tools, and each has the same limitation: someone has to remember to turn them on, and the output lives inside that one platform. If your team splits calls across Zoom, Google Meet, and Microsoft Teams depending on who called the meeting, that means three different places to search when you need to find what was said six weeks ago.',
      "The more reliable pattern is to make recording and transcription a calendar-level setting instead of a per-call decision. Connect your calendar once, and an assistant like Lumina joins automatically as a participant on every call you're invited to, regardless of which of the three platforms it's on, and produces a speaker-labeled transcript in the same format every time.",
      "That consistency is what makes transcripts actually searchable later. 'What did we decide about the Q3 roadmap' should return an answer whether that conversation happened on a Zoom call with sales or a Teams call with engineering. Centralizing recording and transcription across platforms is what makes a meeting archive useful instead of three separate, half-remembered archives.",
    ],
  },
  {
    slug: 'from-transcript-to-action-items',
    title: 'From Transcript to Action Items: Running Meetings That Move Work Forward',
    description:
      'Why most meeting summaries fail to change what happens next, and how to structure notes so decisions and action items actually get followed up on.',
    excerpt: 'Why most meeting summaries fail to change what happens next — and how to fix that.',
    publishedAt: '2026-11-03',
    body: [
      "A transcript tells you what was said. It doesn't tell you what happens next, and that gap is why so many meetings feel productive in the room and change nothing a week later. The fix isn't a longer summary — it's pulling three specific things out of every meeting: decisions made, open questions, and action items with a named owner.",
      "Action items are the part that most note-taking falls down on, because 'someone should look into pricing' isn't an action item — it's a vague intention that nobody is accountable for. A usable action item names a person, not a role, and ideally has a due date attached. If a summary can't say who owns a follow-up, that's a sign the meeting itself didn't actually land on a decision, not just a notes problem.",
      'Lumina extracts decisions, blockers, and action items automatically from every call and routes the action items to the people named for them in Slack or Notion. That closes the loop between "we talked about it" and "it got done" without anyone having to manually rewrite their own meeting notes into a task list after the call ends.',
    ],
  },
  {
    slug: 'async-standups-vs-live-meetings',
    title: 'Async Standups vs. Live Meetings: When to Skip the Call Entirely',
    description:
      'A practical framework for deciding when a status update belongs in a live meeting and when it works better as an async written update instead.',
    excerpt: 'A practical framework for deciding when a status update needs a live meeting at all.',
    publishedAt: '2026-11-14',
    body: [
      'A daily standup with eight people, each giving a sixty-second update nobody else needed to hear live, is a meeting that should have been a shared doc. The test for whether something needs to be synchronous is simple: does this require real-time back-and-forth, or is it just status being broadcast? Status broadcasts belong async; decisions that need debate belong in a live call.',
      "Teams that switch status updates to async usually keep a short written log — what I did, what's blocked, what's next — and reserve the live call for the moments something actually needs discussion. That alone can cut a five-day-a-week standup down to one or two live syncs, with the rest replaced by a two-minute written update that everyone can read on their own schedule.",
      "The calls that do stay live are worth making count, which means they still deserve notes. Even a quick sync benefits from a recap: what got decided, what's still open, who owns what. Lumina produces that recap automatically for the calls you do keep, so cutting meeting volume doesn't come at the cost of losing the record of what happened in the ones that remain.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
