export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'ai-meeting-notes-vs-manual-note-taking',
    title: 'AI Meeting Notes vs. Manual Note-Taking: What Actually Saves Your Team Time',
    description:
      'A practical comparison of AI-generated meeting notes and manual note-taking, including where each one breaks down for real teams.',
    excerpt:
      'Manual notes capture what one person thought was important. AI notes capture everything — here is where that actually matters.',
    date: '2026-09-02',
    body: [
      'When one person is responsible for taking notes, the notes reflect what they personally found important — not what every attendee needed. Decisions made in a side comment get missed. Action items assigned to someone who was only half-listening get dropped.',
      'AI meeting notes solve a narrower problem than people expect: they do not make your meetings better, they make the record of your meetings complete. Every decision, every assigned task, and every "wait, what did we agree on?" moment is captured verbatim and attributed to the person who said it.',
      'The time savings shows up downstream, not during the call. Teams that switch from manual notes to automatic transcription and summaries report the biggest gains in follow-up: fewer "can you remind me what I owe you" Slack threads, fewer meetings re-litigating a decision that was already made.',
      'The trade-off is that AI notes still need a human to read the summary, not just archive it. A five-bullet recap with clear owners and deadlines is useful. A full transcript nobody opens is not. Lumina leads with the structured summary — decisions, blockers, next steps — and keeps the full transcript searchable underneath for when you need the exact wording.',
    ],
  },
  {
    slug: 'reduce-meeting-overload',
    title: 'Meeting Overload Is Real: 5 Ways AI Notetakers Cut Time Spent in Follow-Up',
    description:
      'Meeting overload usually shows up as email and Slack overload afterward. Here is how automatic meeting notes cut that follow-up load.',
    excerpt:
      'The meeting itself is rarely the problem. The hour of follow-up messages after it is.',
    date: '2026-09-18',
    body: [
      'Most complaints about "too many meetings" are really complaints about what happens after them: writing a recap, chasing down who owns what, and re-explaining the outcome to the one person who could not attend.',
      'Here are five concrete ways an AI notetaker like Lumina reduces that load:',
      '1. It writes the recap for you, immediately after the call ends, instead of an hour later when details have already faded.',
      "2. It assigns action items to the person who volunteered for them in the conversation, instead of leaving that to whoever drafts the follow-up email.",
      '3. It gives absent teammates a summary they can read in two minutes instead of a 45-minute recording they will never watch.',
      '4. It makes past decisions searchable, so "did we already decide this?" is a 10-second search instead of a re-litigated meeting.',
      '5. It routes recaps straight into Slack and Notion, so there is no separate "write up the notes" task competing with everything else on your list.',
      'None of this reduces the number of meetings on your calendar. It reduces the hours of unpaid admin work those meetings generate afterward — which, for most teams, is the bigger cost.',
    ],
  },
  {
    slug: 'zoom-google-meet-teams-transcription-compared',
    title: 'Zoom vs. Google Meet vs. Teams: Comparing Built-In Transcription',
    description:
      "A comparison of Zoom, Google Meet, and Microsoft Teams' native transcription features, and where a dedicated AI meeting assistant still fills the gaps.",
    excerpt:
      'All three platforms can transcribe a call now. Fewer of them can tell you what actually got decided.',
    date: '2026-10-07',
    body: [
      'Zoom, Google Meet, and Microsoft Teams all ship some form of built-in transcription today, which raises a fair question: do you still need a dedicated AI meeting assistant?',
      "For a single platform, single-workspace team, native transcription can be enough. The gaps show up with cross-platform teams: a transcript generated in Zoom does not show up next to a transcript from a client call on Google Meet, so your meeting history is split across three different tools' archives.",
      'Native transcripts are also largely literal — a wall of text with speaker labels, not a structured recap. Turning that into "who owes what by when" is still manual work.',
      'Lumina joins calls on all three platforms and normalizes the output: one searchable archive regardless of which tool the meeting happened on, plus the structured summary — decisions, blockers, action items — that raw transcripts do not produce on their own.',
      'If your team lives entirely inside one platform and nobody needs more than a literal transcript, native tools may be enough. If meetings happen across tools, or you need the output to be a decision log rather than a transcript, that is the specific gap Lumina is built for.',
    ],
  },
];
