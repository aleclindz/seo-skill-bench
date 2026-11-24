export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: 'meeting-notes-without-taking-notes',
    title: 'How to Get Perfect Meeting Notes Every Time (Without Taking Any)',
    excerpt:
      "The best meeting notes are the ones nobody has to write. Here's how teams are replacing manual note-taking with automatic recaps.",
    description:
      'Why manual meeting notes fail, and how automatic recording, transcription, and AI summaries fix it.',
    date: '2026-11-03',
    content: [
      "Manual meeting notes fail for a predictable reason: whoever is writing them can't fully listen at the same time. Something always gets paraphrased, skipped, or misattributed, and the person who most needs the decision in writing is usually the one too busy running the meeting to type it.",
      'Lumina removes the trade-off by handling recording, speaker-labeled transcription, and summarization automatically. It joins the call like any other participant, and the transcript is searchable within minutes of the meeting ending — no one has to choose between participating and documenting.',
      'The summary that comes out the other side is not a transcript dump. It separates decisions, open questions, and blockers, and routes action items to the people responsible for them, so a 45-minute meeting turns into a two-minute read for anyone who missed it.',
    ],
  },
  {
    slug: 'zoom-meet-teams-meeting-transcription-compared',
    title: 'Zoom, Google Meet, or Teams: Which Is Easiest to Automate Meeting Notes For?',
    excerpt:
      'A practical comparison of how meeting-note automation behaves across the three most common video call platforms.',
    description:
      'How automated recording and transcription differ across Zoom, Google Meet, and Microsoft Teams.',
    date: '2026-11-10',
    content: [
      "Most teams don't pick one video call platform and stick with it — they end up running Zoom for external calls, Meet because a partner uses Google Workspace, and Teams because IT standardized on it internally. That mix is exactly why meeting-note tooling needs to work the same way regardless of which app the invite is in.",
      'Lumina joins all three the same way: you connect your calendar once, and it joins any meeting you invite it to on Zoom, Google Meet, or Microsoft Teams. The transcript, summary, and action items come out in the same format no matter which platform hosted the call.',
      'The practical benefit shows up when you search later. Instead of remembering "was that decision made on the Tuesday Zoom call or the Thursday Teams sync," you search once across every meeting, on every platform, and get the answer.',
    ],
  },
  {
    slug: 'action-items-falling-through-the-cracks',
    title: 'Action Items Keep Falling Through the Cracks? Here’s the Fix',
    excerpt:
      'Most dropped action items aren’t a discipline problem — they’re a visibility problem. Here’s how automatic routing closes the gap.',
    description:
      'Why action items get lost after meetings, and how automatic extraction and routing to Slack or Notion fixes it.',
    date: '2026-11-17',
    content: [
      'An action item agreed on in a meeting and typed into a notes doc nobody reopens is, in practice, the same as no action item at all. The decision was made, but the follow-through depended on someone remembering to check a document they have no reason to revisit.',
      "Lumina extracts action items directly from the conversation and routes them to Slack or Notion automatically, so they land where the owner already works instead of in a meeting-notes archive. The recap also keeps decisions and blockers next to the action items, so anyone checking later gets the context, not just the task.",
      "Teams that make this switch tend to notice the same thing first: it's not that people got more disciplined about follow-through, it's that the follow-through stopped requiring anyone to remember a step at all.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
