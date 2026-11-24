import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'See how Lumina joins Zoom, Meet, and Teams calls, transcribes them, and turns the transcript into decisions and action items.',
  alternates: { canonical: '/features' },
};

export default function FeaturesPage() {
  return (
    <main>
      <h1>Features</h1>
      <p>
        Lumina handles the parts of a meeting that nobody wants to do manually: joining the
        call, transcribing it, and turning that transcript into a record your team will
        actually use.
      </p>

      <section>
        <h2>Joins the call for you</h2>
        <p>
          Connect your calendar once and Lumina joins every meeting you invite it to on
          Zoom, Google Meet, or Microsoft Teams — no separate bot invite required for each
          call.
        </p>
      </section>

      <section>
        <h2>Live transcription with speaker labels</h2>
        <p>
          Every call is transcribed in real time, with each line attributed to the speaker
          who said it, so the record reflects who actually said what.
        </p>
      </section>

      <section>
        <h2>Decisions and action items, separated</h2>
        <p>
          Lumina extracts decisions as standalone statements and action items as a
          checklist with an owner and a due date for each one, instead of a single wall of
          summarized text.
        </p>
      </section>

      <section>
        <h2>Recap sent the moment the call ends</h2>
        <p>
          The recap goes out immediately after the meeting, while the context is still
          fresh, instead of depending on someone finding time later to write it up.
        </p>
      </section>

      <p>
        Ready to see it on your own calls? <a href="/pricing">Check pricing</a> and start
        free.
      </p>
    </main>
  );
}
