export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  body: string[];
  relatedHref: '/features' | '/pricing';
  relatedLabel: string;
};

export const posts: Post[] = [
  {
    slug: 'meeting-minutes-that-get-read',
    title: 'How to Write Meeting Minutes That Actually Get Read',
    description:
      "Most meeting minutes get written and never opened. Here's the format that gets read, and how to stop writing it by hand.",
    excerpt:
      'Most meeting minutes get written and never read. Here is a format your team will actually open.',
    publishedAt: '2026-01-14',
    body: [
      "Most meeting minutes fail for a boring reason: they're long, they arrive hours or days late, and nobody can tell from the subject line whether they matter. By the time they land in an inbox, the people who were in the room have already moved on, and the people who weren't have no reason to open a wall of text.",
      'The format that gets read is short and ordered by importance. Start with a single line stating what was decided. Follow with up to five action items, each with a named owner and a due date — no owner, no date, no action item. Everything else — the full discussion, side debates, context — belongs in a linked transcript, not the summary itself.',
      "Timing matters as much as format. Recaps sent within ten minutes of the call ending get read in full. Sent the next morning, they get skimmed. Sent a week later, they get archived unread. If minutes depend on someone finding time to write them up after the fact, that window closes fast.",
      'This is the exact gap an AI meeting assistant closes: the recap goes out automatically, before anyone has had time to forget what was decided.',
    ],
    relatedHref: '/features',
    relatedLabel: 'See how Lumina generates recaps automatically',
  },
  {
    slug: 'meeting-templates-save-time',
    title: '10 Meeting Templates That Save Your Team an Hour a Day',
    description:
      'Ten reusable meeting templates — standups, 1:1s, retros, planning, and decision meetings — that keep calls short and useful.',
    excerpt:
      'Ten reusable meeting templates that cut planning time and keep every call on track.',
    publishedAt: '2026-02-03',
    body: [
      "A template doesn't make a meeting shorter by itself, but it removes the five minutes teams spend every single time deciding what this meeting is even for. Here are ten worth stealing: daily standup, weekly 1:1, sprint planning, sprint retro, decision meeting, project kickoff, incident review, customer call debrief, roadmap review, and all-hands Q&A.",
      "The two that save the most time are the ones teams usually skip: the decision meeting and the incident review. A decision meeting has one job — reach a decision and name an owner — and should end the moment that happens, even if it's at minute six. An incident review has a fixed agenda (timeline, root cause, action items, owner) instead of an open-ended post-mortem discussion.",
      "The common thread across all ten is that the agenda is written down before the call, not improvised during it. Teams that keep templates in a shared doc spend less time per meeting and, more importantly, stop scheduling meetings that don't fit any template at all.",
      'Once a meeting follows a template, the recap can follow one too — which is exactly how Lumina structures its automatic summaries by meeting type.',
    ],
    relatedHref: '/features',
    relatedLabel: 'Browse Lumina meeting features',
  },
  {
    slug: 'transcribe-zoom-meetings-automatically',
    title: 'How to Automatically Transcribe Zoom Meetings',
    description:
      'A step-by-step guide to automatic Zoom transcription with speaker labels and a fully searchable archive, no manual setup per call.',
    excerpt:
      "Here's how to get a speaker-labeled, searchable transcript of every Zoom call without starting a recording by hand.",
    publishedAt: '2026-02-25',
    body: [
      "Zoom's native transcription works, but it has to be turned on per call, it lives inside Zoom's own cloud storage, and it rarely labels speakers reliably once more than three people talk over each other. For a team that runs dozens of calls a week, that's a lot of manual setup for an inconsistent result.",
      'The fix is to connect transcription to your calendar once instead of your meeting app every time. A connected assistant joins every call you invite it to — Zoom, Meet, or Teams — and starts recording and transcribing automatically, with no toggle to remember and no dependence on which platform the call happens to be on.',
      "Speaker labeling is the detail that actually makes a transcript useful later. A transcript that just says what was said, without who said it, is barely better than no transcript. Labeled by speaker and searchable across your whole workspace, in more than 30 languages, it becomes something you'd actually go back and search in three months.",
      'That is the setup Lumina runs by default: connect your calendar once, and every meeting you invite it to is recorded, transcribed, and labeled without touching a single toggle.',
    ],
    relatedHref: '/features',
    relatedLabel: 'See Lumina transcription in detail',
  },
  {
    slug: 'async-standups-guide-remote-teams',
    title: 'Async Standups: A Complete Guide for Remote Teams',
    description:
      'How distributed teams across time zones replace live standups with async updates, without losing visibility into blockers.',
    excerpt:
      'A live standup across three time zones is a bad meeting for two-thirds of the people in it. Here is the async version that works.',
    publishedAt: '2026-03-18',
    body: [
      "A 9am standup is a reasonable time for exactly one time zone. For a team spread across three, it's either a 6am call for someone or a 9pm call for someone else, every single day. That's the core argument for async standups: the information needs to move, but the live call doesn't.",
      'A working async standup has a fixed, short format — what shipped yesterday, what\'s next, what\'s blocked — posted to one channel by a fixed time each day. The discipline is in keeping it short and keeping it in one place; standups that turn into threads defeat the purpose.',
      "The harder case is teams that already run live standups and want to go async without losing visibility. The middle ground is recording the handful of calls that still need to happen live — planning, blockers that need real discussion — and distributing a written recap to everyone who couldn't attend live, in their own time zone.",
      "That's the piece most teams build by hand and eventually automate: Lumina turns any call into a recap that reads the same whether you were awake for the meeting or not.",
    ],
    relatedHref: '/features',
    relatedLabel: 'See how async recaps work in Lumina',
  },
  {
    slug: 'meeting-fatigue-causes-fixes',
    title: 'Meeting Fatigue: Why Your Team Dreads Calls (and How to Fix It)',
    description:
      'The real causes of meeting fatigue, and five changes that cut meeting load without cutting the communication teams actually need.',
    excerpt:
      "Meeting fatigue isn't about having too many calls. It's about having too many calls that didn't need to be calls.",
    publishedAt: '2026-04-09',
    body: [
      "Meeting fatigue gets blamed on volume, but the real cause is usually composition: back-to-back calls with no buffer, status updates that could have been written down, and meetings where most attendees are there just in case something relevant comes up. None of that is fixed by simply scheduling fewer meetings.",
      "Five changes consistently help. Default to a written update first, and only escalate to a call if a decision is stuck. Cap meetings at 25 or 45 minutes instead of 30 or 60, so there's a built-in buffer between calls. Require an agenda before a meeting can be booked. Let people decline meetings they're not a decision-maker in without guilt. And record calls so people don't have to be live just to stay informed.",
      "That last point does the most work, because it's what makes the other four possible. Nobody can decline a meeting in good conscience if the only way to know what happened is to have been there. Once a recap exists automatically, 'optional but you'll get the summary' becomes a real option instead of a polite fiction.",
      'Lumina produces that recap for every meeting it joins, which is what makes smaller, shorter, more declinable meetings actually stick.',
    ],
    relatedHref: '/features',
    relatedLabel: 'See how automatic recaps work',
  },
  {
    slug: 'best-ai-meeting-notetakers-compared',
    title: 'The Best AI Meeting Note-Takers Compared (2026 Edition)',
    description:
      'What to actually look for in an AI meeting assistant — transcription accuracy, action-item extraction, integrations, and price — and how Lumina stacks up.',
    excerpt:
      'Transcription accuracy is table stakes now. Here is what actually separates AI meeting assistants in 2026.',
    publishedAt: '2026-05-21',
    body: [
      "Transcription accuracy used to be the headline feature of an AI meeting assistant. In 2026 it's table stakes — most tools in this category transcribe clean audio well. The differences that actually matter now are what happens after the transcript: how good the summary is, how reliably it extracts action items with real owners, and how well it plugs into tools your team already uses.",
      "A useful comparison framework has four criteria. Summary quality: does it produce a recap a non-attendee can act on, or just a wall of bullet points? Action-item extraction: does it correctly identify who owns what, or does everything default to 'team'? Integrations: does it route recaps to Slack and Notion on its own, or is that a manual copy-paste? And pricing: is unlimited transcription included, or does usage get metered in a way that makes you ration which calls get recorded?",
      "On that framework, the free-tier gap is usually integrations and history length — most tools transcribe for free but lock recap routing or long-term search behind a paid plan. Lumina's free tier includes unlimited meetings with 30-day transcript history and basic summaries; action-item routing, unlimited history, and Slack and Notion integrations sit on the $12-per-seat Pro plan.",
      "Whichever assistant you land on, the two features worth testing before you commit are how it handles overlapping speakers and whether its action items actually name a person. Those are the two things that are hard to fix after the fact.",
    ],
    relatedHref: '/pricing',
    relatedLabel: 'Compare Lumina plans and pricing',
  },
  {
    slug: 'turn-meeting-notes-into-action-items',
    title: 'How to Turn Meeting Notes Into Action Items Automatically',
    description:
      'A repeatable process for converting raw meeting notes into owned, dated action items your team actually finishes — plus how to automate it.',
    excerpt:
      'Action items written as "we should look into X" never get done. Here is how to make every one of them trackable.',
    publishedAt: '2026-06-11',
    body: [
      'Most action items die in the notes doc because they\'re written as intentions, not tasks. "We should look into pricing" is not an action item; it\'s a topic. A real action item has three parts: a verb, an owner, and a date. "Alex sends updated pricing options to the team by Friday" can be tracked. The first sentence can\'t.',
      "The fastest way to fix this during a live meeting is to narrate ownership out loud the moment something is agreed: 'okay, Alex, you've got that by Friday' takes three seconds and turns a vague intention into a committed task in front of witnesses. Note-takers who wait until after the call to assign owners usually guess wrong.",
      "The second half of the process is routing. An action item that lives only in a notes doc gets forgotten as soon as the doc is closed. Routing it into the tool the owner already works in — a Slack message, a Notion task, a CRM note — turns a line in a summary into something that shows up again on its own.",
      'Lumina does both of these automatically: it identifies decisions and owners from the transcript, then routes action items straight to Slack or Notion so nothing depends on someone re-reading the recap later.',
    ],
    relatedHref: '/features',
    relatedLabel: 'See automatic action-item routing',
  },
  {
    slug: 'recorded-vs-live-notes',
    title: "Recorded vs. Live Notes: What's the Difference and When to Use Each",
    description:
      'When to take live notes during a meeting and when to let a recording and transcript do the work instead.',
    excerpt:
      "Taking live notes and recording a meeting solve different problems. Most teams only need one of them for most calls.",
    publishedAt: '2026-07-02',
    body: [
      "Live note-taking and recording solve different problems, and treating them as interchangeable is why so many meetings end with notes nobody trusts. Live notes capture judgment calls — tone, hesitation, the moment someone pushed back — that a transcript alone won't convey. A recording captures exactly what was said, with nothing lost to the note-taker's attention or shorthand.",
      "For most recurring meetings — standups, status updates, routine syncs — a recording and an automatic transcript is enough, and it frees whoever would have been taking notes to actually participate in the discussion instead of half-listening while typing.",
      "Live notes still earn their place in meetings where nuance is the point: negotiations, sensitive feedback conversations, or any discussion where how something was said matters as much as what was said. Even then, a recording as backup means the note-taker's interpretation isn't the only record if anyone disagrees later on what was actually decided.",
      "The practical default: record everything, and reserve a dedicated note-taker for the handful of meetings where judgment calls matter more than a literal transcript.",
    ],
    relatedHref: '/features',
    relatedLabel: 'See how Lumina records and transcribes',
  },
  {
    slug: 'meeting-overload-calendar-stress',
    title: 'Meeting Overload: Why Your Calendar Is Stressing You Out',
    description:
      'A packed calendar causes real, measurable stress. Here are the habits that bring meeting load back under control.',
    excerpt:
      "It isn't the number of meetings that wears people out. It's never having an uninterrupted block to actually think.",
    publishedAt: '2026-07-23',
    body: [
      "A calendar with eight 30-minute meetings a day isn't stressful because of the total hours — it's stressful because there's no block longer than 30 minutes left to do focused work. Every context switch between a meeting and real work costs more than the minutes on the clock; most people need 10 to 15 minutes to actually refocus after an interruption.",
      "The fix that works isn't fewer meetings in the abstract, it's protected blocks: two or three hours a day with no meetings allowed, defended as firmly as the meetings themselves. That single change does more than a blanket 'fewer meetings' policy, because it guarantees the one thing calendars never protect by default — uninterrupted time.",
      "The second lever is a real decline culture: treating 'optional' attendee tags as actually optional, and normalizing catching up from a recap instead of attending live. That only works once a trustworthy recap exists for every meeting someone skips.",
      'Lumina produces that recap automatically, which is what makes declining a meeting a safe choice instead of a risk.',
    ],
    relatedHref: '/features',
    relatedLabel: 'See how Lumina recaps keep everyone in the loop',
  },
  {
    slug: 'better-microsoft-teams-meetings',
    title: 'How to Run Better Microsoft Teams Meetings (Without Losing Anything)',
    description:
      'Practical tips for tighter Microsoft Teams meetings, plus how to keep a searchable record of everything that was said.',
    excerpt:
      "Teams meetings tend to sprawl because the chat, the channel, and the call all compete for the same conversation. Here is how to fix that.",
    publishedAt: '2026-08-13',
    body: [
      "Microsoft Teams meetings have a specific failure mode: the conversation splinters across the call itself, the meeting chat, and whatever channel the invite was posted in. Decisions end up scattered across three places, and finding one later means checking all three.",
      "Three habits fix most of this. Post the agenda in the channel before the call, not in the meeting chat, so it doesn't disappear when the meeting ends. Keep the in-call chat for links and quick questions only — anything that needs to be found later belongs in the channel. And settle on one place decisions get written down, every time, so there's a single source of truth instead of three partial ones.",
      "The remaining gap is that even a well-run Teams meeting still relies on someone remembering to recap it in the right channel afterward. That's the step that gets skipped under deadline pressure, which is exactly when a decision is most likely to get re-litigated two weeks later because nobody can find where it was written down.",
      'Lumina connects directly to Teams, so every call gets a transcript and a recap without anyone having to remember to write one.',
    ],
    relatedHref: '/features',
    relatedLabel: 'See Lumina for Microsoft Teams',
  },
  {
    slug: 'automatic-meeting-recaps',
    title: 'Automatic Meeting Recaps: Set It and Forget It',
    description:
      "What a good automatic meeting recap should include, and how to route it to Slack and Notion without any manual work after the call.",
    excerpt:
      'A good automatic recap needs five things. Most tools that claim to "summarize meetings" only give you two of them.',
    publishedAt: '2026-09-03',
    body: [
      "A genuinely useful automatic recap has five parts: a one-line decision summary, a list of action items with named owners and dates, key discussion points for anyone who wasn't there, a link to the full searchable transcript, and a timestamp so it's clear which meeting it came from when several happened the same day. Tools that just bullet-point the transcript are giving you the fourth part and calling it done.",
      "'Set it and forget it' really means the recap requires zero manual steps after the meeting ends — no one exports a transcript, no one copies action items into another tool, no one posts a summary to the team channel by hand. If any of those steps are still manual, the automation hasn't actually removed the bottleneck, just shortened it.",
      "The setup itself is a one-time connection, not a per-meeting task: connect your calendar once, and every future meeting you invite the assistant to gets recorded, transcribed, summarized, and routed without touching the setup again.",
      'That is the whole premise behind Lumina: connect once, and the recap, the action items, and the routing to Slack or Notion happen automatically for every meeting after that.',
    ],
    relatedHref: '/features',
    relatedLabel: 'See what a Lumina recap includes',
  },
  {
    slug: 'find-old-meeting-decisions-searchable-transcripts',
    title: 'How to Find Old Meeting Decisions Without Rewatching Recordings',
    description:
      'Searchable meeting transcripts let you find any decision from the last year in seconds, instead of scrubbing through old recordings.',
    excerpt:
      '"Didn\'t we already decide this?" is easy to answer when every meeting is searchable text instead of a video you have to scrub through.',
    publishedAt: '2026-09-24',
    body: [
      "\"Didn't we already decide this three months ago?\" is one of the most common questions in any team that's been running for a while, and it's almost always followed by someone scrubbing through an old recording at 2x speed trying to find the ten seconds where it was actually said. A video archive without search is barely an archive at all.",
      'The fix is treating transcripts as text, not video. A searchable, speaker-labeled transcript turns "which meeting was it" into a keyword search, the same way you\'d search a document instead of rereading a whole folder. Searching for a project name or a decision keyword surfaces the exact meeting and the exact moment, with surrounding context, in seconds.',
      "This matters most for decisions that get revisited: pricing changes, scope calls, anything where someone eventually asks for the reasoning months later. Without a search index, that reasoning is effectively lost even though it's sitting in a recording somewhere. With one, it's one search away.",
      'Every meeting Lumina records becomes part of a searchable, speaker-labeled archive across your whole workspace, so old decisions stay findable instead of disappearing into a pile of recordings nobody rewatches.',
    ],
    relatedHref: '/features',
    relatedLabel: 'See searchable transcripts in Lumina',
  },
];
