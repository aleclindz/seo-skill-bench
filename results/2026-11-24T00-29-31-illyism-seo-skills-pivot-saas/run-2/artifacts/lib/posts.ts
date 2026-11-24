export type PostSection = {
  heading?: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: 'post-1',
    title: 'Never Take Meeting Notes Again: A Practical Guide',
    description:
      'Why manual note-taking fails teams, and how to replace it with a system that actually captures decisions and action items.',
    date: '2026-01-12',
    sections: [
      {
        paragraphs: [
          "Someone on the call is always typing instead of talking. They miss half the discussion, their notes are a wall of text nobody rereads, and a week later nobody can say who actually owns the follow-up. That's not a note-taking problem, it's a process problem.",
        ],
      },
      {
        heading: 'Why manual notes break down',
        paragraphs: [
          "A human note-taker has to choose, in real time, what matters. They skip context that seems obvious in the room but is meaningless two weeks later. And because taking notes is a side task, it's the first thing to slip when the conversation gets tense or fast-moving — which is exactly when decisions get made.",
        ],
      },
      {
        heading: 'What to replace it with',
        paragraphs: [
          'The fix is to stop treating notes as a transcript and start treating them as a structured record: who decided what, who owns which action item, and by when. Lumina joins the call, transcribes it, and turns the transcript into exactly that structure automatically, so nobody has to choose between participating and documenting.',
        ],
      },
    ],
  },
  {
    slug: 'post-2',
    title: 'The Hidden Cost of Bad Meeting Notes',
    description:
      'Vague recaps don’t just waste time after the call — they cause the same decisions to get re-litigated over and over.',
    date: '2026-01-19',
    sections: [
      {
        paragraphs: [
          'The real cost of bad meeting notes shows up two weeks later, when the same decision gets debated again because nobody can produce a clear record of what was actually agreed.',
        ],
      },
      {
        heading: 'Re-litigation is the tax you don’t see',
        paragraphs: [
          "Teams rarely notice this cost because it's spread across dozens of small meetings instead of one obvious failure. Each re-discussion is 10-15 minutes, but across a quarter it adds up to entire days of a team's time spent re-deciding things that were already decided.",
        ],
      },
      {
        heading: 'Fixing it with a single source of truth',
        paragraphs: [
          'The fix is a recap that states decisions as decisions, not as a summary of discussion. Lumina generates that recap automatically from the call transcript and sends it before anyone has a chance to misremember what was agreed.',
        ],
      },
    ],
  },
  {
    slug: 'post-3',
    title: 'Action Items vs. Decisions: Why Most Meeting Recaps Get This Wrong',
    description:
      'Most meeting summaries blur decisions and action items together. Here’s why separating them matters and how to do it.',
    date: '2026-01-26',
    sections: [
      {
        paragraphs: [
          'A decision and an action item are not the same thing, but most meeting recaps treat them as one undifferentiated block of text under a heading like "Notes."',
        ],
      },
      {
        heading: 'The difference matters',
        paragraphs: [
          'A decision is a fact: "We will ship the redesign in March." An action item is a commitment with an owner and a deadline: "Priya updates the launch checklist by Friday." When recaps blur the two, decisions get lost in a list of tasks, and tasks get lost in a wall of context.',
        ],
      },
      {
        heading: 'How to structure a recap correctly',
        paragraphs: [
          'A useful recap lists decisions first, as short standalone statements, then action items as a checklist with an explicit owner and due date for each one. Lumina generates recaps in exactly this structure, pulled directly from what was said on the call rather than summarized after the fact.',
        ],
      },
    ],
  },
  {
    slug: 'post-4',
    title: 'Async Standups: A Practical Guide for Remote Teams',
    description:
      'A daily standup meeting isn’t the only way to keep a remote team in sync. Here’s how to run one async without losing the signal.',
    date: '2026-02-02',
    sections: [
      {
        paragraphs: [
          "A daily 15-minute standup across three time zones costs someone an inconvenient early morning or late night. Most remote teams eventually ask whether the meeting needs to be live at all.",
        ],
      },
      {
        heading: 'What async standups get right',
        paragraphs: [
          'Written async updates work well for status broadcast: what I did, what I’m doing, what’s blocking me. They fail when a blocker needs real discussion, because a thread of replies is a worse medium for that than five minutes of live conversation.',
        ],
      },
      {
        heading: 'A hybrid model that works',
        paragraphs: [
          'The teams that get this right default to async and escalate to a short live call only when a blocker needs it. For the live calls that still happen, Lumina keeps the same structured recap format as the async updates, so the two systems stay consistent instead of forking into separate records.',
        ],
      },
    ],
  },
  {
    slug: 'post-5',
    title: 'How to Run a Meeting That Actually Needs Notes',
    description:
      'Half of recurring meetings don’t need to exist. Here’s a quick test for which ones do, and how to run those well.',
    date: '2026-02-09',
    sections: [
      {
        paragraphs: [
          "Before fixing how a meeting is documented, it's worth asking whether the meeting should exist at all. A surprising number of recurring meetings are status updates that would work better as a written doc.",
        ],
      },
      {
        heading: 'The test',
        paragraphs: [
          'If a meeting’s only output is information moving from one person to several others with no discussion or decision required, it doesn’t need to be live. If it routinely produces a decision that affects multiple people’s work, it does.',
        ],
      },
      {
        heading: 'Running the meetings that pass the test',
        paragraphs: [
          'For the meetings that earn their place on the calendar, the goal shifts from "surviving the meeting" to "getting a clean record out of it." That’s where a tool like Lumina pays off — it removes the manual overhead of capturing what happened so the meeting itself can stay focused on the discussion.',
        ],
      },
    ],
  },
  {
    slug: 'post-6',
    title: 'Meeting Fatigue Is a Process Problem, Not a Calendar Problem',
    description:
      'Cutting meeting length doesn’t fix meeting fatigue if the underlying process — unclear outcomes, no follow-through — stays the same.',
    date: '2026-02-16',
    sections: [
      {
        paragraphs: [
          'The usual advice for meeting fatigue is to shorten meetings or cut their number. That treats the symptom. The actual cause is usually that meetings don’t produce anything durable, so people leave feeling like the time was wasted regardless of length.',
        ],
      },
      {
        heading: 'What actually drains people',
        paragraphs: [
          'A 25-minute meeting that ends with clear decisions and assigned owners feels productive. A 25-minute meeting that ends with "let’s circle back" feels exhausting, even though both took the same amount of time.',
        ],
      },
      {
        heading: 'Fix the follow-through, not just the clock',
        paragraphs: [
          'Shorter meetings help, but the bigger lever is making sure every meeting ends with a visible record of what was decided and who’s doing what next. Lumina produces that record automatically, which removes the ambiguity that makes meetings feel like a waste of time in the first place.',
        ],
      },
    ],
  },
  {
    slug: 'post-7',
    title: 'The 5-Minute Meeting Recap Template Your Team Will Actually Read',
    description:
      'A simple recap format — decisions, action items, open questions — that people open instead of archiving unread.',
    date: '2026-02-23',
    sections: [
      {
        paragraphs: [
          "Most meeting recaps go unread because they're long, unstructured, and arrive hours after the meeting when nobody remembers the context anymore.",
        ],
      },
      {
        heading: 'A format that gets read',
        paragraphs: [
          'A recap people actually open has three short sections: decisions made, action items with owners and dates, and open questions still unresolved. Nothing else. If it doesn’t fit one of those three buckets, it probably doesn’t belong in the recap.',
        ],
      },
      {
        heading: 'Making it automatic',
        paragraphs: [
          'The format only works if it goes out immediately after the call, while it’s still relevant. Lumina generates and sends this exact structure right after the meeting ends, instead of waiting for someone to find time to write it up.',
        ],
      },
    ],
  },
  {
    slug: 'post-8',
    title: 'Why "I’ll Send Notes After" Never Works',
    description:
      'The promise to send notes later is usually broken, not out of laziness but because the context decays within the hour.',
    date: '2026-03-02',
    sections: [
      {
        paragraphs: [
          '"I’ll send notes after the call" is one of the most commonly broken promises in a workday, and it’s rarely about effort.',
        ],
      },
      {
        heading: 'The real reason it fails',
        paragraphs: [
          'Context about a 45-minute discussion decays fast. By the time the note-taker gets back to their desk and finds 20 free minutes, the nuance of who argued for what is already gone, and what gets sent is a thin, generic summary — if anything gets sent at all.',
        ],
      },
      {
        heading: 'Capture it at the source',
        paragraphs: [
          'The only reliable fix is to capture the record during the call, not after it. Lumina transcribes the conversation live and generates the recap the moment the call ends, so there’s no gap where the context can decay.',
        ],
      },
    ],
  },
  {
    slug: 'post-9',
    title: 'How AI Meeting Assistants Actually Work, Explained Simply',
    description:
      'A plain-language walkthrough of what happens between joining a call and getting a summary: transcription, speaker separation, and extraction.',
    date: '2026-03-09',
    sections: [
      {
        paragraphs: [
          'An AI meeting assistant looks simple from the outside — it joins a call and a summary shows up later — but there are a few distinct steps happening in between.',
        ],
      },
      {
        heading: 'Step 1: Join and transcribe',
        paragraphs: [
          'The assistant joins the call as a participant on Zoom, Google Meet, or Microsoft Teams, and transcribes the audio in real time, attributing each line to the speaker who said it.',
        ],
      },
      {
        heading: 'Step 2: Extract structure from the transcript',
        paragraphs: [
          'A raw transcript isn’t useful on its own — it’s too long to read. The assistant identifies which lines represent a decision, which represent a commitment with an owner, and which are open questions, and organizes those into the final recap. That’s the part Lumina focuses on getting right: not just transcribing, but turning a transcript into something your team will actually use.',
        ],
      },
    ],
  },
  {
    slug: 'post-10',
    title: '1:1 Meetings: What to Track and Why Most Managers Miss It',
    description:
      'Most 1:1 notes live in a manager’s personal doc and disappear when they leave. Here’s what to track instead.',
    date: '2026-03-16',
    sections: [
      {
        paragraphs: [
          'Most managers keep 1:1 notes in a personal doc that’s never shared, which means commitments made in a 1:1 are only as durable as that one person’s memory.',
        ],
      },
      {
        heading: 'What’s worth tracking',
        paragraphs: [
          'The useful things to track across 1:1s are commitments made on either side ("I’ll get you feedback on the proposal by Wednesday"), recurring themes that show up meeting after meeting, and career-development conversations that otherwise get forgotten between quarterly reviews.',
        ],
      },
      {
        heading: 'Making the record survive turnover',
        paragraphs: [
          'A shared, structured recap solves the durability problem: when a manager changes teams, the new manager has an actual record instead of a blank slate. Lumina generates that recap for 1:1s the same way it does for team meetings, so the history doesn’t live in one person’s head.',
        ],
      },
    ],
  },
  {
    slug: 'post-11',
    title: 'Zoom, Meet, or Teams: Does Your Meeting Tool Choice Matter for Notes?',
    description:
      'The video platform you use shouldn’t determine how good your meeting notes are. Here’s how to decouple the two.',
    date: '2026-03-23',
    sections: [
      {
        paragraphs: [
          'Teams often end up with inconsistent meeting records simply because different groups use different video platforms, each with its own built-in (or missing) transcription features.',
        ],
      },
      {
        heading: 'The platform shouldn’t set the bar',
        paragraphs: [
          "Zoom, Google Meet, and Microsoft Teams each handle transcription and recording differently, and none of them were built to turn a transcript into a structured recap with decisions and owners. Relying on the native tools means your notes quality depends on which app the call happened to be booked in.",
        ],
      },
      {
        heading: 'Decoupling notes from the platform',
        paragraphs: [
          'Lumina joins calls on Zoom, Meet, or Teams and produces the same recap format regardless of which one was used, so the quality of your meeting records stops depending on which calendar invite link got sent.',
        ],
      },
    ],
  },
  {
    slug: 'post-12',
    title: 'From Call to Action Items: Fixing the Meeting Follow-Through Gap',
    description:
      'Most action items agreed on in a meeting are never tracked anywhere after the call ends. Here’s how to close that gap.',
    date: '2026-03-30',
    sections: [
      {
        paragraphs: [
          'A meeting can go well — clear discussion, real decisions — and still fail, if the action items agreed on never make it into anyone’s task list afterward.',
        ],
      },
      {
        heading: 'Where the gap happens',
        paragraphs: [
          "The gap is almost always the handoff between \"said out loud in the meeting\" and \"written down somewhere it'll get checked.\" If that handoff depends on someone remembering to do it manually after the call, it will fail on a regular basis.",
        ],
      },
      {
        heading: 'Closing it automatically',
        paragraphs: [
          'The fix is to make the handoff automatic: extract action items directly from what was said, with an owner and a date, the moment the meeting ends. That’s the specific gap Lumina is built to close — turning the call itself into the task list, instead of relying on a human to do it afterward.',
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
