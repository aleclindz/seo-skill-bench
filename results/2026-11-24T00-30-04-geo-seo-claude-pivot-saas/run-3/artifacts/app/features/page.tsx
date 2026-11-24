import type { Metadata } from 'next';

const BASE = 'https://lumina.example';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Everything Lumina does in your meetings: recording, speaker-labeled transcription, AI summaries, action items, and integrations with Slack and Notion.',
  alternates: { canonical: `${BASE}/features` },
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
          Speaker-labeled transcripts are ready minutes after the call ends and are
          searchable across your whole workspace.
        </p>
      </section>

      <section>
        <h2>AI summaries &amp; action items</h2>
        <p>
          Every meeting gets a short summary with decisions made and action items
          assigned, delivered to the channel of your choice before you&apos;re back at
          your desk.
        </p>
      </section>

      <section>
        <h2>Search across every meeting</h2>
        <p>
          Forgot who owns a task, or what was decided three weeks ago? Search across
          every transcript your team has ever had instead of scrolling through old
          notes or asking around.
        </p>
      </section>

      <section>
        <h2>Integrations</h2>
        <p>
          Push summaries and action items straight into Slack or Notion, so follow-up
          happens where your team already works.
        </p>
      </section>

      <section>
        <h2>Coming from InboxZap?</h2>
        <p>
          If you used InboxZap to clean up email, Lumina applies the same idea —
          fewer decisions left dangling — to meetings instead. See{' '}
          <a href="/pricing">pricing</a> or browse the <a href="/blog">blog</a> for our
          original email guides.
        </p>
      </section>
    </main>
  );
}
