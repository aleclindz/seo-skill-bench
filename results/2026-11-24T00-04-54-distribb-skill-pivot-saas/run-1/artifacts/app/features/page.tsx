import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features — Lumina AI Meeting Assistant',
  description:
    'Everything Lumina does in your meetings: recording, speaker-labeled transcription, AI summaries, action items, and Slack & Notion integrations.',
  openGraph: {
    title: 'Features — Lumina AI Meeting Assistant',
    description: 'Recording, transcription, AI summaries, action items, and integrations.',
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
          Lumina joins Zoom, Google Meet, and Microsoft Teams calls automatically. Speaker-labeled
          transcripts are ready minutes after the call ends and searchable across your whole
          workspace.
        </p>
      </section>

      <section>
        <h2>AI summaries</h2>
        <p>
          Every meeting produces a structured recap: decisions, open questions, and action items,
          written for the people who weren&apos;t in the room. See our{' '}
          <Link href="/blog/meeting-summary-template">meeting summary template</Link> for the exact
          structure.
        </p>
      </section>

      <section>
        <h2>Action items with owners</h2>
        <p>
          Lumina tags each commitment with the person who made it and the date it&apos;s due, so
          nothing depends on someone remembering to write it down correctly.
        </p>
      </section>

      <section>
        <h2>Slack &amp; Notion integrations</h2>
        <p>
          On Pro and Enterprise plans, action items route straight into a Slack channel or a Notion
          database the moment a meeting ends. See <Link href="/pricing">pricing</Link> for plan
          details.
        </p>
      </section>
    </main>
  );
}
