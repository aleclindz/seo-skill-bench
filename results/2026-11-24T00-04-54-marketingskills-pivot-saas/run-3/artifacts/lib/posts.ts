export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  sections: { heading: string; body: string[] }[];
};

export const posts: Post[] = [
  {
    slug: 'how-to-write-better-meeting-notes',
    title: 'How to Write Better Meeting Notes (Without Taking Any)',
    description:
      'Why manual meeting notes fail, what good notes actually need to capture, and how automatic transcription and summaries fix the habit for good.',
    excerpt:
      'The problem with meeting notes was never the format. It was that someone had to stop participating in order to write them.',
    publishedAt: '2026-01-12',
    sections: [
      {
        heading: 'The real problem with meeting notes',
        body: [
          "Most advice about meeting notes focuses on templates: use bullet points, separate decisions from discussion, assign owners to action items. That advice is fine, but it misses the actual failure mode. The problem with meeting notes was never the format. It was that someone had to stop participating in order to write them.",
          'Whoever takes notes in a meeting is, by definition, half-listening. They miss the nuance of a disagreement because they are summarizing the last point while three new ones come in. The resulting notes are accurate about what was decided, but thin on why — and the "why" is usually what someone needs six weeks later.',
        ],
      },
      {
        heading: 'What good notes actually need to capture',
        body: [
          'Useful meeting notes answer three questions for someone who was not in the room: what was decided, who owns what happens next, and what was the reasoning if the decision gets questioned later. Everything else — a full transcript of who said what — is optional context, not the core deliverable.',
          'That is the gap automatic transcription and AI summaries close. Lumina records and transcribes the call, then generates a structured recap of decisions, action items, and open questions, so the person running the meeting can stay in the conversation instead of typing through it.',
        ],
      },
      {
        heading: 'Making the switch',
        body: [
          'If your team already has a note-taking habit, the easiest way to test this is on your next recurring meeting: let Lumina record and transcribe it, compare the generated summary to what a human note-taker would have written, and see which one you actually reread later.',
          'Most teams find the automatic version wins on the thing that matters most — getting read.',
        ],
      },
    ],
  },
  {
    slug: 'async-standups-with-ai-meeting-notes',
    title: 'How to Run Async Standups With AI Meeting Notes',
    description:
      'A practical guide to replacing daily sync standups with an async format that uses recorded updates and AI summaries to keep distributed teams aligned.',
    excerpt:
      'A daily standup is fifteen minutes of talking and forty-five minutes of waiting for your turn. Distributed teams rarely need the sync part.',
    publishedAt: '2026-01-26',
    sections: [
      {
        heading: 'Why sync standups break down across time zones',
        body: [
          'A daily standup is fifteen minutes of talking and forty-five minutes of waiting for your turn. That tax is bearable when everyone is in the same office. It is punishing when half the team is joining at 7am or 10pm to make the slot work.',
          'Async standups solve the time zone problem, but most async formats — a Slack thread everyone posts into separately — lose the thing standups were actually good for: hearing the full context behind a blocker, not just the headline.',
        ],
      },
      {
        heading: 'A format that keeps the context',
        body: [
          'Instead of a scheduled call, each person records a two-minute update whenever their day starts: what shipped, what is blocked, what is next. Run it through Lumina and the recording becomes a searchable transcript plus a short written summary that teammates can scan in any time zone.',
          'Because it is a recording rather than a text post, people naturally include more of the reasoning behind a blocker — the thing that usually only comes out when someone asks a follow-up question live.',
        ],
      },
      {
        heading: 'Rolling it out',
        body: [
          "Start with one team for two weeks before asking everyone to switch. Keep a weekly synchronous call for anything that actually needs real-time back-and-forth — async standups replace the status update, not every conversation.",
        ],
      },
    ],
  },
  {
    slug: 'meeting-transcription-accuracy',
    title: 'Meeting Transcription Accuracy: What Actually Matters',
    description:
      "Word error rate isn't the metric that predicts whether a meeting transcript is actually useful. Here's what to check before you trust one.",
    excerpt:
      "Every transcription vendor quotes a word error rate. It is almost never the number that determines whether you can trust the transcript.",
    publishedAt: '2026-02-09',
    sections: [
      {
        heading: 'Why word error rate is the wrong benchmark',
        body: [
          'Every transcription vendor quotes a word error rate, usually somewhere between 5% and 10% on clean audio. It is almost never the number that determines whether you can trust the transcript for a real meeting, because meeting audio is not clean audio.',
          'The failures that actually matter are speaker attribution (who said a given line), overlapping speech on video calls, and domain-specific terms — product names, acronyms, customer names — that a general-purpose model has never seen.',
        ],
      },
      {
        heading: 'What to check instead',
        body: [
          'Test any transcription tool on a real meeting with cross-talk, not a clean single-speaker recording. Check whether it labels speakers correctly across a 45-minute call, and whether it holds up on your team\'s actual vocabulary — product names, internal shorthand, customer names — rather than generic dictation.',
          'Lumina handles speaker labeling automatically and lets teams add custom vocabulary so recurring product and customer names transcribe correctly instead of turning into near-miss guesses.',
        ],
      },
      {
        heading: 'The summary is only as good as the transcript',
        body: [
          'Any AI summary is built on top of the transcript underneath it. If the transcript misattributes a decision to the wrong speaker, the summary will too. Accuracy at the transcript layer is what everything else — search, summaries, action items — depends on.',
        ],
      },
    ],
  },
  {
    slug: 'reduce-meeting-overload',
    title: 'Meeting Overload Is Costing Your Team More Than Time',
    description:
      'Back-to-back meetings fragment focus time and compound over a week. A practical framework for auditing your team\'s calendar and cutting meetings that no longer earn their slot.',
    excerpt:
      "The real cost of a bad meeting isn't the thirty minutes it takes. It's the hour on either side that never recovers.",
    publishedAt: '2026-02-20',
    sections: [
      {
        heading: 'The cost is bigger than the time on the invite',
        body: [
          "The real cost of a bad meeting isn't the thirty minutes it takes. It's the hour on either side that never recovers, because a 30-minute meeting at 2pm turns a free afternoon into two disconnected 90-minute blocks that are too short for real focus work.",
          'Teams that audit their calendars usually find the same pattern: a handful of recurring meetings that started for a good reason and kept their slot long after that reason went away.',
        ],
      },
      {
        heading: 'A simple audit',
        body: [
          'For one week, have every recurring meeting owner answer a single question in writing: what decision or update actually requires everyone live, right now? If the honest answer is "a status update," that meeting is a candidate for an async format instead — see our guide on async standups.',
          'Meetings that survive the audit are usually the ones with real back-and-forth: planning, review, and anything where a decision needs live pushback before it ships.',
        ],
      },
      {
        heading: 'Make the ones you keep count',
        body: [
          'For the meetings that stay, recording and summarizing them removes the second-biggest cost: the meeting that happens again next week because nobody has a clear record of what was decided this week. A short automatic recap after every meeting is usually enough to stop that cycle.',
        ],
      },
    ],
  },
  {
    slug: 'action-items-that-actually-get-done',
    title: 'Why Action Items Never Get Done (and How to Fix It)',
    description:
      "Action items written during a meeting usually die in the notes doc. Here's why follow-through fails and what actually closes the loop.",
    excerpt:
      "An action item that lives in a notes document nobody reopens is not an action item. It's a wish.",
    publishedAt: '2026-03-03',
    sections: [
      {
        heading: 'Where action items go to die',
        body: [
          'An action item that lives in a notes document nobody reopens is not an action item. It is a wish. The notes doc from Tuesday\'s meeting is, realistically, never opened again unless someone is specifically looking for it — and by the time a deadline slips, nobody remembers which doc it was in.',
        ],
      },
      {
        heading: 'What actually closes the loop',
        body: [
          "Action items only get done when they land somewhere the owner already looks — a task tracker, a Slack DM, a calendar reminder — not in a static document. That means the step that matters is routing, not writing.",
          "Lumina extracts action items from the meeting transcript and pushes them directly into Slack or the tools your team already checks, with an owner and the surrounding context attached, instead of leaving them in a recap that has to be rediscovered.",
        ],
      },
      {
        heading: 'Close the loop at the next meeting',
        body: [
          'The simplest habit that compounds: open every recurring meeting by reviewing last time\'s action items before starting new discussion. It takes two minutes and it is the single biggest predictor of whether a team\'s meetings produce real follow-through.',
        ],
      },
    ],
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
