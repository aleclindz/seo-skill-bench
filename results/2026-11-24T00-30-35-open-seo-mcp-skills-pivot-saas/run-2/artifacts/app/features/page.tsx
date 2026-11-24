import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features — Automatic Meeting Transcription, Summaries & Action Items',
  description:
    'See how Lumina records, transcribes, and summarizes every meeting automatically, and turns decisions into action items your team actually follows up on.',
  alternates: { canonical: '/features' },
};

const features = [
  {
    title: 'Automatic meeting transcription',
    description:
      'Lumina joins Zoom, Google Meet, and Microsoft Teams calls from your calendar and transcribes every word in real time, with speakers labeled.',
  },
  {
    title: 'AI meeting summaries',
    description:
      'Every call ends with a short summary covering what was discussed, what was decided, and who is doing what next — no manual note-taking required.',
  },
  {
    title: 'Action items with owners',
    description:
      'Lumina extracts action items directly from the conversation and assigns an owner and due date, so follow-up tasks never get lost in a wall of notes.',
  },
  {
    title: 'Searchable meeting history',
    description:
      'Every transcript and summary is searchable. Find the exact moment a decision was made across weeks of meetings in seconds.',
  },
  {
    title: 'Calendar integration',
    description:
      'Connect your calendar once and Lumina automatically joins every meeting you invite it to — no per-call setup.',
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <section className="hero">
        <h1>Everything your team needs instead of meeting notes</h1>
        <p>
          Lumina handles the busywork around meetings — recording, transcribing, summarizing,
          and tracking action items — so your team can focus on the conversation.
        </p>
        <a className="cta" href="/pricing">
          Start free
        </a>
      </section>

      <section className="feature-list">
        {features.map((f) => (
          <article key={f.title}>
            <h2>{f.title}</h2>
            <p>{f.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
