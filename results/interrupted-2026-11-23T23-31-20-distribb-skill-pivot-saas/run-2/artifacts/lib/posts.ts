export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'run-meetings-without-taking-notes',
    title: 'How to Run a Meeting Without Taking a Single Note',
    excerpt:
      'The best meeting participants are fully present, not scribbling. Here is how teams delegate note-taking to AI without losing the record.',
    publishedAt: '2026-01-12',
    body: [
      'The person taking notes in a meeting is, by definition, not fully listening. They are half-focused on spelling a name right or capturing a number, which means they miss the context that makes a decision make sense later.',
      'The fix is not "take better notes," it is to stop assigning the job to a human at all. An AI note-taker like Lumina joins the call, records it, and produces a speaker-labeled transcript and a structured summary — decisions, blockers, and next steps — without anyone in the room losing focus.',
      'What changes in practice: nobody opens a laptop to type during the call, follow-ups go out the same day because the recap already exists, and six weeks later when someone asks "wait, why did we pick vendor B," the answer is a two-minute transcript search instead of a guess. See the full breakdown of what gets captured automatically on the <a href="/features">features page</a>.',
      'Teams that make this switch usually keep one habit: someone still skims the AI summary within an hour and adds the one piece of context a transcript can\'t infer, like "this decision is reversible if the pilot fails." That one line of human judgment is the only note-taking left to do.',
    ],
  },
  {
    slug: 'meeting-minutes-template',
    title: 'Meeting Minutes Template: What to Include (and What to Cut)',
    excerpt:
      'Most meeting minutes templates capture too much. Here is the minimal structure that people actually read afterward.',
    publishedAt: '2026-01-19',
    body: [
      'A meeting minutes template that nobody reads is worse than no minutes at all — it gives a false sense that the meeting was documented while the actual decisions stay buried in a wall of text.',
      'The structure that holds up across teams is short: attendees, decisions made, open questions, and action items with an owner and a date. Everything else — a blow-by-blow of who said what — belongs in a transcript, not the summary.',
      'Decisions should be written as statements, not discussion recaps: "We will ship the v2 pricing page on the 15th," not "We talked about the pricing page for a while." Action items without an owner are the single biggest reason follow-ups die; a bullet with no name attached is a bullet nobody feels responsible for.',
      'If you are already recording calls with an AI assistant, this structure is exactly what a good summary should output automatically — see how Lumina formats it on the <a href="/features">features page</a>, or compare the free plan against <a href="/pricing">Pro</a> if you need it across more than one team.',
    ],
  },
  {
    slug: 'async-standups-vs-daily-meetings',
    title: 'Async Standups vs. Daily Meetings: Which Actually Saves Time',
    excerpt:
      'Daily standups feel efficient but quietly cost a lot of calendar time. Here is how to decide between async and live, and how to make live standups worth keeping.',
    publishedAt: '2026-01-26',
    body: [
      'A 15-minute daily standup with eight people is not 15 minutes, it is two person-hours a day. For distributed teams across time zones, it is also a meeting that forces someone to join at an inconvenient hour.',
      'Async standups — a written update in Slack or a doc, posted on your own time — remove the scheduling tax entirely. They work well when the team\'s work is largely independent and updates are genuinely informational rather than requiring real-time back-and-forth.',
      'Live standups earn their cost when the team needs to actually resolve a blocker together, not just report status. The test is simple: if the standup regularly ends with "let\'s take this offline," it should have been async in the first place.',
      'Teams that keep live standups but want the time back usually record them with an AI meeting assistant so the recap is written automatically, which means the 15 minutes is spent talking instead of someone typing notes for the people who couldn\'t make it.',
    ],
  },
  {
    slug: 'meeting-overload-cost',
    title: 'The Real Cost of Meeting Overload (and How Teams Are Fixing It)',
    excerpt:
      'Meeting overload is not just an annoyance — it is measurable lost focus time. Here is how to quantify it and what actually reduces it.',
    publishedAt: '2026-02-02',
    body: [
      'Knowledge workers spend a large and growing share of the workweek in meetings, and the cost is not just the meeting itself — it is the focused work that cannot happen around it. A single hour-long meeting in the middle of a morning can cost closer to two hours once context-switching is counted.',
      'The usual advice — "have fewer meetings" — is true but vague. The more useful move is auditing a week of calendar invites and asking, for each one, who actually needs to be live versus who just needs the outcome. Most meetings have more required attendees than necessary decisions.',
      'A smaller but real driver of overload is the overhead around each meeting: scheduling, prep, and then writing up what happened. Automating the write-up with an AI summary does not reduce the number of meetings, but it does remove one recurring task from every single one of them.',
      'If your team is auditing meeting load, pair it with a look at how decisions get recorded — many of the "can we redo this meeting" moments come from nobody having a reliable record of what was already decided.',
    ],
  },
  {
    slug: 'ai-meeting-notes-vs-manual',
    title: 'AI Meeting Notes vs. Manual Note-Taking: What Actually Changes',
    excerpt:
      'Switching from a human note-taker to an AI meeting assistant changes more than who types. Here is what teams notice in the first month.',
    publishedAt: '2026-02-09',
    body: [
      'Manual meeting notes depend entirely on who is assigned to take them that day — quality swings with attention, typing speed, and how interested that person happens to be in the topic. AI meeting notes are consistent: the same structure, the same level of detail, every time.',
      'The most noticeable early change is coverage. A human note-taker summarizes as they go and loses detail; an AI assistant like Lumina keeps the full transcript underneath the summary, so a decision that seemed minor in the moment can still be found and verified weeks later.',
      'The second change is rotation. Teams stop assigning a "notes person" on a schedule, which removes a small but real source of resentment, especially for the people who got stuck with it most often.',
      'What does not change: someone still needs to turn a summary into action. AI notes remove the transcription and recap work, not the judgment about what to do next. Compare what is included on every plan on the <a href="/pricing">pricing page</a>.',
    ],
  },
  {
    slug: 'meeting-notes-for-remote-teams',
    title: 'Meeting Notes for Remote Teams: Closing the Context Gap',
    excerpt:
      'Remote and hybrid teams lose more to missed meetings than co-located teams do. Good meeting notes are the fix — if they are actually written to be read without context.',
    publishedAt: '2026-02-16',
    body: [
      'On a co-located team, missing a meeting is a minor inconvenience — you can catch the gist in the hallway. On a remote or hybrid team spread across time zones, missing a meeting means missing the only record of what happened, unless that record is written for someone who wasn\'t there.',
      'That is a different skill than taking notes for yourself. A recap written "for the room" assumes shared context and skips the setup; a recap written for someone catching up needs the decision, the reasoning behind it, and what changes for them specifically.',
      'This is where a transcript-backed summary earns its keep over a quick bullet list: the summary gives the fast version, and the full transcript is there for the one person who needs to check exactly how a decision was phrased.',
      'Teams spread across time zones also benefit from recordings joining the call automatically — see how Lumina handles Zoom, Google Meet, and Microsoft Teams on the <a href="/features">features page</a> — so nobody has to remember to hit record before the meeting that happens to be at 7am for them.',
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
