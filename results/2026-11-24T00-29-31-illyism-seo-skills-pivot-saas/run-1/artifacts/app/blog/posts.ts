export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  paragraphs: string[];
};

export const posts: Post[] = [
  {
    slug: 'how-to-write-meeting-notes-that-get-read',
    title: 'How to Write Meeting Notes That Actually Get Read',
    description:
      'Most meeting notes rot in a doc nobody opens. Here is the structure that gets notes read and acted on.',
    publishedAt: '2026-10-02',
    paragraphs: [
      "Meeting notes fail for one reason: they're written as a transcript, not a decision log. Nobody re-reads a play-by-play of who said what. They want three things — what was decided, what changed, and what they're now on the hook for.",
      'Structure every recap the same way: decisions first, then open questions, then action items with a named owner and a date. If a line in your notes has no owner and no deadline, it is not an action item, it is a wish.',
      "Send the recap within the hour, while the meeting is still fresh enough that people actually read it instead of skimming. Lumina generates this structure automatically from the call recording, so the recap is in Slack before you're back at your desk.",
    ],
  },
  {
    slug: 'async-standups-guide-for-remote-teams',
    title: 'Async Standups: A Practical Guide for Remote Teams',
    description:
      'Daily standups are often the least useful meeting on a remote team’s calendar. Here is how to run them async without losing visibility.',
    publishedAt: '2026-10-09',
    paragraphs: [
      "A 15-minute standup across 3 time zones costs more than 15 minutes — someone is always joining at 7am or staying up late. Async standups fix the scheduling problem, but only if they replace the habit, not just the meeting.",
      'The format that works: each person posts what shipped yesterday, what’s next, and any blocker, in a fixed channel, by a fixed time. No replies required unless there’s a blocker — that keeps it from turning into a second meeting in text form.',
      "Teams that still run a few live syncs a week can use Lumina to turn those into the same structured recap, so async and live updates land in the same place instead of two different systems.",
    ],
  },
  {
    slug: 'meeting-transcription-what-it-is-and-why-you-need-it',
    title: 'Meeting Transcription: What It Is and Why Your Team Needs It',
    description:
      'A plain-English look at automatic meeting transcription, what it actually captures, and where teams use it beyond note-taking.',
    publishedAt: '2026-10-16',
    paragraphs: [
      'Meeting transcription converts the audio of a call into searchable text, speaker by speaker. The obvious use is note-taking, but the bigger value shows up later: searching across every meeting your team has ever had for the one time a decision got made.',
      'Good transcription tools label who said what, timestamp it against the recording, and support enough languages that a mixed-nationality team isn’t stuck with garbled output.',
      'Lumina transcribes every call automatically in more than 30 languages and keeps the transcript linked to the recap, so "what did we agree on in that call three weeks ago" becomes a 10-second search instead of a re-watch.',
    ],
  },
  {
    slug: 'action-items-101-turning-decisions-into-done-work',
    title: 'Action Items 101: Turning Meeting Decisions Into Done Work',
    description:
      'Most action items die in the meeting notes they were written in. Here is how to get them into the systems where work actually happens.',
    publishedAt: '2026-10-23',
    paragraphs: [
      'An action item that lives only in a shared doc has a short life expectancy. It needs to land in the tool the owner actually works in — a Slack DM, a Notion task, a ticket — or it quietly disappears by the next sprint.',
      "Write action items as a single sentence with a verb, an owner, and a date: 'Maria ships the pricing page copy by Thursday,' not 'pricing page needs work.' Vague action items produce vague follow-through.",
      'Lumina extracts action items from the call automatically and can route them straight to Slack or Notion, so the gap between ‘we agreed on this’ and ‘it’s in someone’s task list’ closes itself.',
    ],
  },
  {
    slug: 'zoom-vs-meet-vs-teams-with-an-ai-meeting-assistant',
    title: 'Zoom vs. Google Meet vs. Teams: Which Works Best With an AI Meeting Assistant',
    description:
      'A practical comparison of how Zoom, Google Meet, and Microsoft Teams behave with an AI note-taking bot in the call.',
    publishedAt: '2026-10-30',
    paragraphs: [
      "If your team already standardized on one video platform, the AI-assistant question is simple: does the bot join cleanly, and does it respect your org's recording permissions? All three major platforms now support bots joining as a named participant.",
      'Zoom and Meet tend to be the most forgiving for cross-company calls, since external guests rarely need extra permissions to let a bot record. Teams calls are more locked down by default in enterprise tenants, which is worth checking with IT before your first recorded call.',
      "Lumina joins Zoom, Google Meet, and Microsoft Teams calls the same way — invited like any other guest — so the choice of video platform doesn't change how your recaps and transcripts show up.",
    ],
  },
  {
    slug: 'how-much-do-meetings-actually-cost-your-company',
    title: 'How Much Do Meetings Actually Cost Your Company?',
    description:
      'A simple way to estimate the real cost of your team’s meeting load, and where that cost usually comes from.',
    publishedAt: '2026-11-06',
    paragraphs: [
      'Multiply average fully-loaded salary by hours in meetings by headcount, and most companies are stunned by the number. A 10-person team averaging 8 hours of meetings a week at $60/hour loaded cost is spending roughly $4,800 a week just sitting in calls.',
      'The cost rarely comes from any single meeting being too long. It comes from redundant status meetings that exist only because the last update got lost, and from meetings people attend "just in case" because the notes from last time were unreliable.',
      'The fix is usually not fewer meetings, it’s better recall: a reliable recap means fewer people need to attend live to find out what happened. Lumina’s free plan is enough to test that on one team before rolling it out further.',
    ],
  },
];
