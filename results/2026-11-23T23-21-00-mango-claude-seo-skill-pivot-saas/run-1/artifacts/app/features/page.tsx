import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'See how Lumina records, transcribes, and summarizes every meeting — with decisions and action items ready before you are back at your desk.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'Lumina Features — AI Meeting Recording, Transcription & Summaries',
    description:
      'Automatic recording, transcription, and AI summaries with decisions and action items for every meeting.',
    url: 'https://lumina.example/features',
  },
};

export default function FeaturesPage() {
  return (
    <main>
      <h1>Everything Lumina does in your meetings</h1>
      <p>
        Lumina joins the calls already on your calendar and handles the busywork around them,
        so your team can stay present in the conversation.
      </p>

      <section>
        <h2>Automatic recording</h2>
        <p>
          Connect your calendar once. Lumina joins every meeting you invite it to on Zoom,
          Google Meet, or Microsoft Teams — no dial-in codes or manual setup per call.
        </p>
      </section>

      <section>
        <h2>Transcription</h2>
        <p>
          Every call is transcribed as it happens, so there is a written record of what was
          said without anyone having to type it.
        </p>
      </section>

      <section>
        <h2>AI summaries</h2>
        <p>
          After each meeting, Lumina delivers a summary covering the decisions that were made
          and the action items that came out of the discussion — ready before you are back at
          your desk.
        </p>
      </section>

      <section>
        <h2>A record your team can trust</h2>
        <p>
          &ldquo;We stopped arguing about what was decided. Lumina remembers for us.&rdquo; — a
          happy operations lead
        </p>
      </section>
    </main>
  );
}
