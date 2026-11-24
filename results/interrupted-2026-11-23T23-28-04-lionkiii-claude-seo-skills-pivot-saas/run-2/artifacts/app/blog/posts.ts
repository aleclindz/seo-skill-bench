export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'meeting-notes-template',
    title: 'A Meeting Notes Template Your Team Will Actually Use',
    excerpt:
      'Most meeting notes templates get abandoned after a week. Here is a format that survives contact with a real team.',
    publishedAt: '2026-01-12',
    body: [
      'Most meeting notes templates die within a week because they ask someone to type while everyone else talks. The fix is not a better template — it is removing the typing.',
      'The format that survives contact with a real team has four sections and nothing else: attendees, decisions, open questions, and action items with an owner and a date. Anything longer gets skipped under deadline pressure.',
      'Decisions should be written as statements, not summaries: "We will ship the redesign behind a flag on March 3" reads differently than "discussed redesign timeline." The first is searchable six months later; the second is not.',
      'Lumina generates this structure automatically from the transcript of every call, so the format survives because nobody has to maintain it by hand.',
    ],
  },
  {
    slug: 'automatic-meeting-transcription',
    title: 'How Automatic Meeting Transcription Actually Works',
    excerpt:
      'Speaker labels, accuracy, and what happens to the recording afterward — a practical look under the hood.',
    publishedAt: '2026-01-26',
    body: [
      'Automatic meeting transcription has three jobs: capture the audio, split it by speaker, and turn it into text that is still useful a month later.',
      'Speaker labeling is what separates a usable transcript from a wall of text. Modern systems fingerprint each voice early in the call and track it through interruptions and crosstalk, so "Decision: ship Friday" is attributed to the right person.',
      'Accuracy depends more on audio quality than on the model: a muted laptop mic on a train will always transcribe worse than a headset in a quiet room. Reviewing the first few minutes of any transcript is the fastest way to catch systematic errors.',
      'Lumina keeps transcripts searchable across every past meeting, so "what did we decide about pricing in October" is a search query, not a scroll through someone\'s notes.',
    ],
  },
  {
    slug: 'action-items-from-meetings',
    title: 'Turning Meeting Talk Into Action Items That Get Done',
    excerpt:
      'Action items only work if they have an owner, a deadline, and somewhere to live besides the meeting itself.',
    publishedAt: '2026-02-09',
    body: [
      'An action item that lives only in the meeting it was created in is already dead. It needs an owner, a deadline, and a home outside that meeting — a ticket, a Slack thread, a doc.',
      'The most common failure mode is vagueness: "someone should look into this" is not an action item, it is a wish. Rewriting it as "Priya checks the API rate limits by Thursday" is what makes it trackable.',
      'Routing matters as much as wording. If action items stay buried in a notes doc nobody reopens, they do not get done. Pushing them straight to the tool where work already happens — Slack, Notion, a project tracker — closes that gap.',
      'Lumina extracts action items from every transcript with an owner and due date attached, and can route them to Slack or Notion automatically.',
    ],
  },
  {
    slug: 'reduce-meeting-overload',
    title: 'Meeting Overload: How Teams Are Cutting Meeting Time in Half',
    excerpt:
      'The fastest way to reduce meeting load is not fewer invites — it is making each meeting replaceable by its recap.',
    publishedAt: '2026-02-20',
    body: [
      'Meeting overload is rarely solved by scheduling discipline alone, because the underlying fear — "if I\'m not there, I\'ll miss something" — does not go away just because someone deleted a recurring invite.',
      'Teams that actually cut meeting time do it by making meetings skippable: anyone who cannot attend gets a transcript and a written recap with decisions and action items, so missing a meeting stops being risky.',
      'Once recaps are reliable, status-update meetings are usually the first to go, followed by meetings that exist only because "we always have one on Tuesdays."',
      'A good recap turns a meeting from a mandatory event into an optional one — and most people will opt out once they trust it will not cost them anything.',
    ],
  },
  {
    slug: 'async-standups-vs-daily-meetings',
    title: 'Async Standups: Do You Still Need a Daily Meeting?',
    excerpt:
      'A daily standup earns its slot on the calendar only when it surfaces blockers faster than a written update would.',
    publishedAt: '2026-03-05',
    body: [
      'The daily standup was designed for co-located teams who needed a reason to sync. Distributed teams across time zones inherit the ritual without the reason.',
      'An async standup — a short written update posted once a day — surfaces the same information (what I did, what I am doing, what is blocking me) without forcing everyone online at the same time.',
      'The daily meeting still earns its place when blockers need a live back-and-forth to resolve, or when the team is small enough that the meeting takes five minutes, not thirty.',
      'Many teams land on a hybrid: async updates by default, with a short live call only when someone flags a blocker that needs real-time discussion.',
    ],
  },
  {
    slug: 'best-ai-meeting-assistants',
    title: 'The Best AI Meeting Assistants in 2026, Compared',
    excerpt:
      'What to actually look for when comparing meeting assistants — accuracy, integrations, and where your data lives.',
    publishedAt: '2026-03-18',
    body: [
      'Every AI meeting assistant promises transcription and summaries. The differences that matter show up in three places: transcription accuracy on real calls, how summaries are structured, and where recordings and transcripts are stored.',
      'Transcription accuracy varies most on calls with accents, crosstalk, or bad audio — exactly the calls where good notes matter most. Test with a real, messy call before committing, not a clean demo.',
      'Summary structure matters more than summary length. A tool that reliably separates decisions from discussion and assigns action items to owners saves more time than one that produces a longer, unstructured recap.',
      'Data residency and retention controls are table stakes for any team handling customer or financial conversations — check this before the audio ever hits a server.',
      'Lumina focuses on exactly these three: speaker-accurate transcripts, structured recaps with owners attached, and enterprise controls for data residency and retention.',
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
