import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features — Lumina AI Meeting Assistant',
  description:
    'Everything Lumina does in your meetings: recording, speaker-labeled transcription, AI summaries, action items, and integrations with Slack and Notion.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'Features — Lumina AI Meeting Assistant',
    description:
      'Recording, transcription, AI summaries, action items, and integrations.',
    url: 'https://lumina.example/features',
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
          Every meeting produces a structured recap: key decisions, open questions,
          blockers, and next steps — written for the people who weren&apos;t in the
          room.
        </p>
      </section>

      <section>
        <h2>Integrations</h2>
        <p>
          Push action items to Slack, sync recaps to Notion and Confluence, and attach
          transcripts to your CRM. Lumina fits your stack instead of replacing it.
        </p>
      </section>
    </main>
  );
}
