import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'See everything Lumina automates in every meeting: recording, speaker-labeled transcripts, AI summaries, and action items routed to the right owner.',
  alternates: { canonical: '/features' },
};

const features = [
  {
    title: 'Record & transcribe',
    description:
      'Lumina joins Zoom, Google Meet, and Microsoft Teams calls and produces speaker-labeled transcripts in 30+ languages, searchable forever.',
  },
  {
    title: 'Summarize & assign',
    description:
      'Decisions, blockers, and action items are extracted automatically and routed to their owners, so nothing falls through the cracks.',
  },
  {
    title: 'Searchable meeting library',
    description:
      'Every past meeting is indexed. Jump straight to the moment a decision was made instead of scrubbing through a recording.',
  },
  {
    title: 'Calendar integration',
    description:
      'Connect your calendar once. Lumina automatically joins every meeting you invite it to, no manual setup per call.',
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <h1>Everything Lumina automates in your meetings</h1>
      <p>
        Lumina removes the busywork around meetings so your team can focus on the
        conversation. Here&apos;s what happens automatically on every call.
      </p>
      <div className="feature-list">
        {features.map((feature) => (
          <section key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </section>
        ))}
      </div>
      <p>
        Ready to try it? <a href="/pricing">See pricing</a> or read{' '}
        <a href="/blog/what-is-an-ai-meeting-assistant">
          what an AI meeting assistant actually does
        </a>
        .
      </p>
    </main>
  );
}
