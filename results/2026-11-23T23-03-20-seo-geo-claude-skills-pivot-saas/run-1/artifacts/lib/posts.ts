export type PostSection = {
  heading: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  sections: PostSection[];
};

// Slugs are preserved from before the InboxZap -> Lumina rebrand: these URLs
// already carry search impressions (see gsc/Pages.csv), so content is
// rewritten in place rather than issuing new URLs and losing that equity.
export const posts: Post[] = [
  {
    slug: 'post-1',
    title: 'How to Write Meeting Notes People Actually Read',
    metaDescription:
      'A simple template for meeting notes that teams actually open later: decisions, owners, and action items, not a transcript.',
    excerpt:
      'Most meeting notes die in a shared drive. Here is a short template that keeps decisions and action items visible.',
    publishedAt: '2026-01-12',
    sections: [
      {
        heading: 'Notes are for decisions, not transcripts',
        paragraphs: [
          'A full transcript of a meeting is rarely useful a week later. What teams actually go back to is a short record of what was decided, who owns the follow-up, and by when.',
          'Structure every set of notes around three sections: Decisions, Action items (with an owner and a date), and Open questions. Everything else is context that belongs in the recording, not the summary.',
        ],
      },
      {
        heading: 'Let the assistant draft it, a human skims it',
        paragraphs: [
          'Lumina joins the call, transcribes it, and drafts the Decisions / Action items / Open questions summary automatically so nobody has to type while they are supposed to be participating.',
          'The fastest teams we work with spend 30 seconds skimming the draft before it goes out, not 20 minutes writing it from scratch.',
        ],
      },
    ],
  },
  {
    slug: 'post-2',
    title: 'Meeting Action Items: How to Track Them So They Actually Get Done',
    metaDescription:
      'Action items only work if they have an owner, a deadline, and a place to live. Here is a lightweight system that holds up.',
    excerpt:
      'An action item with no owner is a wish. Here is how to make follow-ups stick without another tool to manage.',
    publishedAt: '2026-01-19',
    sections: [
      {
        heading: 'Every action item needs an owner and a date',
        paragraphs: [
          'If an action item is phrased as "we should look into X," it will not happen. Rewrite it as "Priya checks X by Thursday." The owner and the date are not optional metadata, they are the whole point.',
        ],
      },
      {
        heading: 'Put them where people already look',
        paragraphs: [
          'Lumina extracts action items from the conversation automatically and attaches an owner and due date to each one, then surfaces them in the recap so they do not require a separate project-management step to exist.',
        ],
      },
    ],
  },
  {
    slug: 'post-3',
    title: 'Async Meetings: When to Skip the Call Entirely',
    metaDescription:
      'Not every status update needs a live meeting. A simple test for deciding when a call is worth everyone\'s time.',
    excerpt:
      'Before you send a calendar invite, ask whether this actually needs a room full of people at the same time.',
    publishedAt: '2026-01-26',
    sections: [
      {
        heading: 'The test: does this need real-time back and forth?',
        paragraphs: [
          'If a meeting exists to share information with no debate expected, it should be a written update, not a call. Reserve live time for anything that needs real-time negotiation, brainstorming, or a decision among people who disagree.',
        ],
      },
      {
        heading: 'Recaps make async easier to trust',
        paragraphs: [
          'Teams skip fewer necessary meetings and cancel more unnecessary ones once they trust that anything important gets written down. A reliable recap from Lumina is often what makes "let\'s just send an update instead" feel safe.',
        ],
      },
    ],
  },
  {
    slug: 'post-4',
    title: 'How to Run a Stand-up That Does Not Waste Everyone\'s Time',
    metaDescription:
      'Daily stand-ups go long for predictable reasons. Here is how to keep them under ten minutes without losing visibility.',
    excerpt:
      'If your stand-up regularly runs past 15 minutes, the format is broken, not the team.',
    publishedAt: '2026-02-02',
    sections: [
      {
        heading: 'Three questions, no exceptions',
        paragraphs: [
          'What did you finish, what are you doing today, and what is blocking you. Anything that needs more than two sentences gets taken offline immediately, with a named owner for the follow-up conversation.',
        ],
      },
      {
        heading: 'Let the recap carry the detail',
        paragraphs: [
          'Lumina\'s recap captures the blockers raised in stand-up so people who were heads-down on something else can catch up in a minute instead of asking "what did I miss" in the thread.',
        ],
      },
    ],
  },
  {
    slug: 'post-5',
    title: 'Meeting Fatigue: Why It Happens and How to Reduce It',
    metaDescription:
      'Back-to-back meetings are a scheduling problem as much as a mental one. Practical ways to cut the load.',
    excerpt:
      'Meeting fatigue is usually a calendar design problem wearing a psychology costume.',
    publishedAt: '2026-02-09',
    sections: [
      {
        heading: 'Audit a week of your calendar honestly',
        paragraphs: [
          'List every recurring meeting and ask who actually needs to be there live versus who just needs the outcome. Most calendars have two or three recurring meetings that exist out of habit rather than necessity.',
        ],
      },
      {
        heading: 'Make it safe to send a regret',
        paragraphs: [
          'People over-attend meetings because they are afraid of missing something. A dependable written recap removes that fear, which is often the real unlock, not a new scheduling policy.',
        ],
      },
    ],
  },
  {
    slug: 'post-6',
    title: 'Zoom vs Google Meet vs Microsoft Teams: Which Works Best with an AI Notetaker',
    metaDescription:
      'A practical comparison of how Zoom, Google Meet, and Microsoft Teams handle AI meeting assistants joining calls.',
    excerpt:
      'The three major video platforms handle bots differently. Here is what matters if you want clean transcripts.',
    publishedAt: '2026-02-16',
    sections: [
      {
        heading: 'What actually differs between platforms',
        paragraphs: [
          'Audio quality, speaker labeling, and how easily a bot can join as a named participant all vary by platform. Teams and Zoom both support calendar-based auto-join; Google Meet requires the bot to be let in explicitly in some workspace configurations.',
        ],
      },
      {
        heading: 'Lumina works across all three',
        paragraphs: [
          'Connect your calendar once and Lumina joins Zoom, Google Meet, or Microsoft Teams calls the same way, so switching platforms for a client call does not mean losing your notes workflow.',
        ],
      },
    ],
  },
  {
    slug: 'post-7',
    title: 'How AI Meeting Assistants Work (and How Accurate They Really Are)',
    metaDescription:
      'A plain-language look at how AI meeting assistants transcribe and summarize calls, and where they still make mistakes.',
    excerpt:
      'Transcription accuracy, speaker attribution, and summarization are three separate problems. Here is how each works.',
    publishedAt: '2026-02-23',
    sections: [
      {
        heading: 'Three separate jobs, three separate error rates',
        paragraphs: [
          'Transcription turns audio into text. Speaker attribution figures out who said it. Summarization decides what mattered. Most complaints about "the AI got it wrong" are actually about the third step, not the first.',
        ],
      },
      {
        heading: 'Why a human skim still matters',
        paragraphs: [
          'Lumina\'s summaries are designed to be skimmed and corrected in seconds, not treated as a final record untouched. That one-minute review is cheap insurance against the summarizer missing a nuance.',
        ],
      },
    ],
  },
  {
    slug: 'post-8',
    title: 'The Hidden Cost of Status Meetings (and How to Cut Them)',
    metaDescription:
      'Status meetings quietly consume hours of payroll every week. Here is how to calculate the real cost and trim it.',
    excerpt:
      'Multiply attendees by duration by loaded hourly cost and most "quick" status meetings stop looking cheap.',
    publishedAt: '2026-03-02',
    sections: [
      {
        heading: 'Do the math once',
        paragraphs: [
          'A 30-minute weekly status meeting with eight people costs roughly 4 person-hours every week, or about 200 hours a year. Most of that content could be a two-paragraph written update.',
        ],
      },
      {
        heading: 'Replace, don\'t just shorten',
        paragraphs: [
          'Shortening a bad meeting to 15 minutes still costs half as much for the same low-value content. Replacing it with a written recap distributed through Lumina usually eliminates the meeting entirely.',
        ],
      },
    ],
  },
  {
    slug: 'post-9',
    title: 'How to Write a Meeting Recap Your Team Actually Reads',
    metaDescription:
      'Most meeting recaps go unread because they are too long or arrive too late. Here is the format that gets opened.',
    excerpt:
      'Length and timing matter more than detail. A recap sent an hour later is worth less than one sent instantly.',
    publishedAt: '2026-03-09',
    sections: [
      {
        heading: 'Short, scannable, and immediate',
        paragraphs: [
          'A recap that arrives within minutes of the call ending, structured as Decisions / Action items / Open questions, gets read. One that arrives the next day as a wall of text does not.',
        ],
      },
      {
        heading: 'Automate the delivery, not just the drafting',
        paragraphs: [
          'Lumina sends the recap automatically as soon as the call ends, before attention has moved on to the next thing.',
        ],
      },
    ],
  },
  {
    slug: 'post-10',
    title: 'Why Every Team Needs a Decision Log',
    metaDescription:
      'Teams re-litigate the same decisions because nobody wrote down why the first one was made. A decision log fixes that.',
    excerpt:
      '"Why did we decide this?" is a question a decision log answers in ten seconds instead of a 20-minute meeting.',
    publishedAt: '2026-03-16',
    sections: [
      {
        heading: 'A decision log is not a meeting history',
        paragraphs: [
          'It is a short list: what was decided, why, and who made the call. It should be searchable and separate from the general stream of meeting notes.',
        ],
      },
      {
        heading: 'Pull it straight from your recaps',
        paragraphs: [
          'Since Lumina already tags decisions separately from action items in every recap, building a running decision log is mostly a matter of collecting what is already being captured.',
        ],
      },
    ],
  },
  {
    slug: 'post-11',
    title: 'Remote Team Communication: Meetings vs. Async Docs',
    metaDescription:
      'Remote teams default to meetings out of habit, not necessity. A framework for choosing between a call and a doc.',
    excerpt:
      'Distance did not make meetings necessary. Uncertainty about whether written updates will be trusted did.',
    publishedAt: '2026-03-23',
    sections: [
      {
        heading: 'Match the format to the problem',
        paragraphs: [
          'Use a live call for anything that needs negotiation, disagreement, or relationship-building. Use an async doc for anything that is purely informational, regardless of time zone.',
        ],
      },
      {
        heading: 'Trustworthy recaps make async viable',
        paragraphs: [
          'Remote teams that skip more meetings successfully almost always have a reliable written record behind them, which is exactly what a Lumina recap is built to provide.',
        ],
      },
    ],
  },
  {
    slug: 'post-12',
    title: 'A One-on-One Meeting Template That Managers Actually Use',
    metaDescription:
      'A simple, repeatable one-on-one template covering wins, blockers, growth, and feedback, built for weekly use.',
    excerpt:
      'A good one-on-one template is boring on purpose. It should be reusable every single week without redesign.',
    publishedAt: '2026-03-30',
    sections: [
      {
        heading: 'Four recurring sections',
        paragraphs: [
          'Wins since last time, current blockers, growth or career conversation, and open feedback in either direction. Keep the same structure every week so neither person has to think about format.',
        ],
      },
      {
        heading: 'Carry context forward automatically',
        paragraphs: [
          'Lumina\'s recap of the previous one-on-one makes it easy to open the next one with "last time you mentioned X, how did that go" instead of starting from zero.',
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
