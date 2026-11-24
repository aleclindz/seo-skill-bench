import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features — Lumina AI Meeting Assistant',
  description:
    'Everything Lumina does in your meetings: recording, speaker-labeled transcription, AI summaries, action items, and integrations with Slack and Notion.',
  alternates: {
    canonical: '/features',
  },
  openGraph: {
    title: 'Features — Lumina AI Meeting Assistant',
    description: 'Recording, transcription, AI summaries, action items, and integrations.',
    url: '/features',
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
        <h2>AI summaries &amp; action items</h2>
        <p>
          Every meeting gets a summary with the decisions made and the action items
          assigned, so nobody has to ask &ldquo;wait, who&apos;s doing what?&rdquo; after
          the call ends.
        </p>
      </section>

      <section>
        <h2>Integrations</h2>
        <p>
          Route action items straight to Slack or Notion, and keep your calendar in sync
          so Lumina knows which meetings to join.
        </p>
      </section>
    </main>
  );
}
