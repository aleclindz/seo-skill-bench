export type PostSection = { heading?: string; paragraphs: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  excerpt: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: 'meeting-minutes-template',
    title: 'The Meeting Minutes Template Teams Actually Use',
    description:
      'A practical meeting minutes template covering decisions, action items, and owners — plus why most templates fail in practice.',
    publishedAt: '2026-01-12',
    excerpt:
      'Most meeting minutes templates die after two weeks. Here is the four-section format that survives contact with a real team.',
    sections: [
      {
        paragraphs: [
          'Most meeting minutes templates die after two weeks, because they ask someone to type while everyone else talks. The format that survives has four sections and takes under five minutes to fill in: decisions, open questions, blockers, and next steps.',
        ],
      },
      {
        heading: 'Why the four-section format works',
        paragraphs: [
          'Decisions go first because they are the only thing people reliably check later. Open questions capture what was debated but not resolved, so the same argument does not happen again next week. Blockers surface anything stopping progress before it becomes a surprise in the next meeting. Next steps list exactly who is doing what, not a vague summary of the discussion.',
        ],
      },
      {
        heading: 'Letting the recap write itself',
        paragraphs: [
          'Lumina generates this structure automatically from the transcript, so the format stays consistent even when nobody volunteers to take notes. See the full breakdown in our guide to the <a href="/blog/meeting-recap-anatomy">anatomy of a great meeting recap</a>.',
        ],
      },
    ],
  },
  {
    slug: 'ai-meeting-notes-vs-manual',
    title: 'AI Meeting Notes vs. Manual Note-Taking: What Gets Missed',
    description:
      "Manual note-takers miss a surprising share of decisions made in a meeting. Here's what AI notetakers catch that humans don't.",
    publishedAt: '2026-02-09',
    excerpt:
      'Someone taking notes by hand is also trying to participate in the meeting. Those two jobs compete for the same attention.',
    sections: [
      {
        paragraphs: [
          "Someone taking notes by hand is also trying to participate in the meeting. Those two jobs compete for the same attention, and participation usually wins — which means the notes quietly get worse the moment the discussion gets interesting.",
        ],
      },
      {
        heading: 'What tends to get lost',
        paragraphs: [
          'Decisions made in passing, without a clear "let\'s go with X" moment, rarely make it into manual notes. Neither do caveats attached to a decision — "yes, but only if the vendor confirms pricing by Friday" often becomes just "yes" by the time it is written down.',
        ],
      },
      {
        heading: 'Where AI notes help without replacing judgment',
        paragraphs: [
          'A transcript-based summary catches the caveats because it works from everything that was said, not from what one person had time to write. It does not replace someone deciding what matters — it just makes sure that person is choosing from the full conversation. Read more in <a href="/features">how Lumina generates summaries</a>.',
        ],
      },
    ],
  },
  {
    slug: 'async-standups',
    title: 'Async Standups: How Remote Teams Replace the Daily Meeting',
    description:
      'A step-by-step guide to running standups asynchronously, including what to track and how to keep people accountable without a call.',
    publishedAt: '2026-03-03',
    excerpt:
      'A daily standup across three time zones is really a meeting optimized for the people awake when it starts.',
    sections: [
      {
        paragraphs: [
          'A daily standup across three time zones is really a meeting optimized for whoever is awake when it starts. Async standups fix that by replacing the live call with a short written update on a fixed schedule.',
        ],
      },
      {
        heading: 'What to track instead of a call',
        paragraphs: [
          'Three questions are enough: what shipped since the last update, what is blocked, and what is planned next. Posted in a shared channel by a fixed time each day, this takes less time to write than it takes to wait for your turn to speak in a live standup.',
        ],
      },
      {
        heading: 'When you still need the live version',
        paragraphs: [
          'Async works for status. It does not work for a decision that needs real back-and-forth. Keep a short synchronous meeting for that, and use <a href="/blog/action-items-follow-through">a follow-up system</a> so the decision does not get lost either way.',
        ],
      },
    ],
  },
  {
    slug: 'meeting-fatigue',
    title: 'Meeting Fatigue Is a Calendar Problem, Not a Willpower Problem',
    description:
      'Why back-to-back meetings exhaust teams, and three calendar habits that cut meeting load without cutting collaboration.',
    publishedAt: '2026-03-27',
    excerpt:
      'Telling people to "just say no" to meetings does not work, because most invites look individually reasonable.',
    sections: [
      {
        paragraphs: [
          'Telling people to "just say no" to meetings does not work, because most invites look individually reasonable. The problem is almost never one bad meeting — it is the accumulation of reasonable ones with no gaps between them.',
        ],
      },
      {
        heading: 'Three habits that actually reduce load',
        paragraphs: [
          'Default new invites to 25 or 50 minutes instead of 30 or 60, so there is a buffer between calls. Require a written agenda before a meeting can be booked on a shared calendar, which quietly filters out meetings nobody can justify in a sentence. And set one no-meeting block per day that recurring invites are not allowed to touch.',
        ],
      },
      {
        heading: 'Cutting meetings without losing context',
        paragraphs: [
          'Teams worry that fewer meetings means less shared context. In practice, a reliable recap sent after every meeting — covering decisions and next steps — replaces most of the context that attendance used to provide for people who did not need to be there.',
        ],
      },
    ],
  },
  {
    slug: 'who-needs-to-be-in-the-meeting',
    title: 'A Simple Framework for Deciding Who Needs to Be in the Room',
    description:
      'Use the decider, informed, and optional framework to cut meeting attendance without anyone missing something important.',
    publishedAt: '2026-04-21',
    excerpt:
      'Most invite lists are built from habit: whoever was on the last one, plus anyone who might be offended to be left off.',
    sections: [
      {
        paragraphs: [
          'Most invite lists are built from habit: whoever was on the last one, plus anyone who might be offended to be left off. A better invite list has exactly three categories — deciders, informed, and optional.',
        ],
      },
      {
        heading: 'The three categories',
        paragraphs: [
          'Deciders are the people whose input actually changes the outcome, and the meeting cannot proceed without them. Informed people need to know the outcome but add nothing to the decision itself — they get the recap, not the invite. Optional attendees can join if they want context, but their absence changes nothing.',
        ],
      },
      {
        heading: 'Making "informed" painless',
        paragraphs: [
          'This framework only works if informed people trust they will actually get the recap. A transcript-based summary sent automatically after every meeting is what makes it safe to leave people off the invite in the first place.',
        ],
      },
    ],
  },
  {
    slug: 'searchable-meeting-transcripts',
    title: 'How to Turn Meeting Transcripts Into Searchable Team Knowledge',
    description:
      'Transcripts are only useful if someone can find anything in them. Here is how to structure and tag recordings so they become a real knowledge base.',
    publishedAt: '2026-05-18',
    excerpt:
      'A pile of unlabeled meeting recordings is not a knowledge base, it is a storage cost.',
    sections: [
      {
        paragraphs: [
          'A pile of unlabeled meeting recordings is not a knowledge base, it is a storage cost. The difference between the two is whether anyone can find a specific answer without rewatching an hour of video.',
        ],
      },
      {
        heading: 'What makes a transcript searchable',
        paragraphs: [
          'Speaker labels matter more than people expect — "what did the customer say about pricing" is a very different search than "what did anyone say about pricing" once a transcript is tagged by speaker. Consistent meeting titles and a project tag on every call turn a transcript archive into something you can filter, not just full-text search.',
        ],
      },
      {
        heading: 'Where this pays off',
        paragraphs: [
          'New hires get the most value: instead of asking "why did we decide this," they can search the actual decision moment across every past meeting on a project, in seconds, in any of the 30+ languages Lumina transcribes.',
        ],
      },
    ],
  },
  {
    slug: 're-watching-recordings-cost',
    title: "The Real Cost of 'I'll Just Re-Watch the Recording'",
    description:
      "Re-watching a 45-minute meeting to find one decision costs more than attending it did. Here's the math, and a better habit.",
    publishedAt: '2026-06-15',
    excerpt:
      'Skipping a meeting to "catch up on the recording later" sounds efficient. It rarely is.',
    sections: [
      {
        paragraphs: [
          'Skipping a meeting to "catch up on the recording later" sounds efficient. It rarely is: finding the ten minutes that actually mattered usually means scrubbing through the whole recording at least once.',
        ],
      },
      {
        heading: 'The math most people skip',
        paragraphs: [
          'A 45-minute meeting watched at 1x to find one decision costs close to the full 45 minutes — plus the time spent guessing where in the timeline to look. That is more expensive than attending live, and it happens after the information was already stale for a day.',
        ],
      },
      {
        heading: 'A faster habit',
        paragraphs: [
          'Read the written recap first. It takes two minutes and covers the decisions and action items directly. Only drop into the recording itself for the handful of moments where tone or nuance actually matters — see <a href="/blog/meeting-recap-anatomy">what a good recap includes</a>.',
        ],
      },
    ],
  },
  {
    slug: 'zoom-meet-teams-comparison',
    title: 'Zoom, Google Meet, or Teams: Does Your Meeting Tool Actually Matter?',
    description:
      'A practical comparison of Zoom, Google Meet, and Microsoft Teams for transcription quality, integrations, and meeting hygiene.',
    publishedAt: '2026-07-13',
    excerpt:
      'For the actual video call, Zoom, Google Meet, and Teams are close enough that the choice rarely matters.',
    sections: [
      {
        paragraphs: [
          'For the actual video call, Zoom, Google Meet, and Microsoft Teams are close enough that the choice rarely matters on its own. What matters more is what happens to the meeting after it ends.',
        ],
      },
      {
        heading: 'Where the real differences show up',
        paragraphs: [
          'Teams leans on Microsoft 365 integrations — handy if your company already lives in Outlook and SharePoint. Meet is lightest-weight and fastest to join from a calendar invite. Zoom has the most mature ecosystem of add-ons. None of the three ship a recap that tells you what was decided; that layer has to come from somewhere else.',
        ],
      },
      {
        heading: 'Pick the call tool, add the notes layer separately',
        paragraphs: [
          'Lumina joins all three the same way, so the choice of video tool stops being a meeting-notes decision at all — it becomes a question of which app the rest of your company already uses.',
        ],
      },
    ],
  },
  {
    slug: 'action-items-follow-through',
    title: 'How to Get Your Team to Actually Follow Up on Action Items',
    description:
      'Most action items die in the meeting notes doc. Here is a lightweight system for routing, owning, and closing the loop.',
    publishedAt: '2026-08-10',
    excerpt:
      'An action item written in a notes document that nobody reopens is not an action item, it is a sentence.',
    sections: [
      {
        paragraphs: [
          'An action item written in a notes document that nobody reopens is not an action item, it is a sentence. For it to actually happen, it needs an owner, a place it is visible outside the doc, and a reason to come back to it.',
        ],
      },
      {
        heading: 'A lightweight routing system',
        paragraphs: [
          'Route each action item to the tool the owner already checks daily — Slack for something this week, a project board for anything bigger. The action item should name a person, not a team; "someone from design" never gets done.',
        ],
      },
      {
        heading: 'Closing the loop',
        paragraphs: [
          'Open action items from the last meeting should be the first thing reviewed in the next one. That single habit does more to prevent dropped follow-ups than any amount of individual discipline.',
        ],
      },
    ],
  },
  {
    slug: 'meeting-recap-anatomy',
    title: 'The Anatomy of a Great Meeting Recap',
    description:
      'Decisions, open questions, blockers, and next steps: the four sections every meeting recap needs, with examples.',
    publishedAt: '2026-09-07',
    excerpt:
      'A good recap is not a transcript, and it is not a summary of who talked. It answers one question: what changed because of this meeting?',
    sections: [
      {
        paragraphs: [
          'A good recap is not a transcript, and it is not a summary of who talked. It answers one question: what changed because of this meeting? Everything in the recap should serve that question.',
        ],
      },
      {
        heading: 'The four sections, with examples',
        paragraphs: [
          'Decisions: "We are shipping the redesign to 10% of users on Thursday." Open questions: "Still unresolved — does the redesign apply to enterprise accounts?" Blockers: "Waiting on legal sign-off for the new pricing copy." Next steps: "Priya ships the 10% rollout Thursday; Sam follows up with legal by Wednesday."',
        ],
      },
      {
        heading: 'Why specificity matters',
        paragraphs: [
          'Vague recaps — "discussed the redesign, good progress" — give readers nothing to act on and nothing to disagree with if it is wrong. Specific recaps can be checked against reality, which is what makes people actually trust them instead of re-attending the next meeting just in case.',
        ],
      },
    ],
  },
  {
    slug: 'meetings-without-action-items',
    title: 'How to Run a Meeting With No Action Items (and Why That Is a Warning Sign)',
    description:
      'A meeting that produces zero action items usually means it should have been an email. Here is how to tell the difference.',
    publishedAt: '2026-10-05',
    excerpt:
      'Some meetings are supposed to end with zero action items. Most are not, and that is worth noticing.',
    sections: [
      {
        paragraphs: [
          'Some meetings are supposed to end with zero action items — a status readout, a retro that surfaces feelings rather than tasks, an all-hands. Most recurring meetings are not supposed to be that, and a string of recaps with nothing in the next-steps section is worth noticing.',
        ],
      },
      {
        heading: 'The pattern to watch for',
        paragraphs: [
          'If a weekly sync has produced no action items for three weeks running, the work is probably happening somewhere else already, and the meeting has become a habit rather than a function. That is easier to spot when recaps are written consistently — it is nearly invisible when notes are inconsistent or skipped.',
        ],
      },
      {
        heading: 'What to do about it',
        paragraphs: [
          'Cancel the standing invite and replace it with an async update for two weeks. If nobody asks for the meeting back, it was not needed. If someone does, you now know specifically what it was for.',
        ],
      },
    ],
  },
  {
    slug: 'async-meeting-notes-playbook',
    title: 'Meeting Notes for Async Teams: A Practical Playbook',
    description:
      'How distributed teams use meeting notes as the primary communication artifact, not an afterthought.',
    publishedAt: '2026-11-02',
    excerpt:
      'On a distributed team, the meeting notes are not a record of the meeting. For everyone who was not on the call, they are the meeting.',
    sections: [
      {
        paragraphs: [
          'On a distributed team, the meeting notes are not a record of the meeting — for everyone who was not on the call, they are the meeting. That changes what "good enough" notes look like.',
        ],
      },
      {
        heading: 'Write for the person who was not there',
        paragraphs: [
          'Assume zero shared context. State the decision before the reasoning, name people instead of using "we," and spell out acronyms the first time. This is more effort than notes written for people who were in the room, and it is the difference between notes that replace attendance and notes that just gesture at a meeting that happened.',
        ],
      },
      {
        heading: 'Putting it together',
        paragraphs: [
          'Combine this with the <a href="/blog/meeting-recap-anatomy">four-section recap format</a> and a clear <a href="/blog/action-items-follow-through">action item owner</a>, and a distributed team can run on half the live meetings a co-located one needs — without losing the decisions.',
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
