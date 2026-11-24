import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features — Lumina AI Meeting Assistant',
  description:
    'Everything Lumina does in your meetings: recording, speaker-labeled transcription, AI summaries, action items, and integrations with Slack and Notion.',
  alternates: { canonical: 'https://lumina.example/features' },
  openGraph: {
    title: 'Features — Lumina AI Meeting Assistant',
    description:
      'Recording, transcription, AI summaries, action items, and integrations.',
    url: 'https://lumina.example/features',
    images: ['/img/og-lumina.png'],
  },
};

export default function FeaturesPage() {
  return (
    <main>
      <h1>Features</h1>
      <p>Lumina handles the entire meeting lifecycle so your team can stay present.</p>

      <section>
        <h2>Recording &amp; transcription</h2>
        <p>
          Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically.
          Speaker-labeled transcripts are ready minutes after the call ends, searchable
          across your whole workspace, in more than 30 languages.
        </p>
      </section>

      <section>
        <h2>AI summaries</h2>
        <p>
          Every meeting gets a short summary written for the people who missed it —
          what was discussed, what was decided, and what is still open.
        </p>
      </section>

      <section>
        <h2>Automatic action items</h2>
        <p>
          Lumina detects commitments made during the call and turns them into action
          items with an owner attached, so nothing depends on someone remembering to
          write it down.
        </p>
      </section>

      <section>
        <h2>Integrations</h2>
        <p>
          Summaries and action items route straight into Slack and Notion, so they
          show up where your team already works instead of in a transcript nobody
          opens twice.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          Recordings and transcripts are encrypted in transit and at rest. Workspace
          admins control retention and can delete any transcript on request.
        </p>
      </section>
    </main>
  );
}
