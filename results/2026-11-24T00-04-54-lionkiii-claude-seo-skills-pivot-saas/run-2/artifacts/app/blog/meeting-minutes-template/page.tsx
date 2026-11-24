import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Meeting Minutes Template Your Team Will Actually Use',
  description:
    'Most meeting-minutes templates get abandoned after a week. Here is a format built around decisions and owners instead of a wall of notes.',
  alternates: { canonical: '/blog/meeting-minutes-template' },
  openGraph: {
    type: 'article',
    title: 'A Meeting Minutes Template Your Team Will Actually Use',
    url: 'https://lumina.example/blog/meeting-minutes-template',
  },
};

export default function Post() {
  return (
    <main>
      <article>
        <h1>A Meeting Minutes Template Your Team Will Actually Use</h1>
        <p>
          Most meeting-minutes templates die the same way: someone builds a detailed doc with
          sections for attendees, agenda, discussion, and next steps, the team uses it twice,
          and by the third meeting everyone is back to a half-finished Slack message. The
          problem usually isn&apos;t the template — it&apos;s that it tries to capture
          everything that was said instead of the two or three things that actually matter
          afterward: what got decided, and who is doing what about it.
        </p>

        <h2>The four sections worth keeping</h2>
        <p>
          Strip a meeting-minutes template down to this and almost nothing important gets
          lost:
        </p>
        <p>
          <strong>Decisions.</strong> One line per decision, written as a statement, not a
          summary of the debate. &ldquo;We are shipping the redesign to 50% of users on
          Friday&rdquo; — not &ldquo;discussed the redesign rollout timeline.&rdquo;
        </p>
        <p>
          <strong>Owners.</strong> Every action item gets exactly one name next to it. If two
          people are jointly responsible, pick one as the accountable owner anyway; shared
          ownership is how action items quietly disappear.
        </p>
        <p>
          <strong>Open questions.</strong> Anything raised but not resolved goes here instead
          of getting buried in a narrative paragraph, so it&apos;s the first thing the next
          meeting picks back up.
        </p>
        <p>
          <strong>Due dates.</strong> &ldquo;Soon&rdquo; is not a due date. If a task doesn&apos;t
          have one, that&apos;s usually a sign it wasn&apos;t a real commitment yet.
        </p>

        <h2>Why most templates get abandoned</h2>
        <p>
          The honest reason most meeting-minutes formats fail isn&apos;t the structure —
          it&apos;s that writing them in real time while also participating in the meeting is
          genuinely hard. Whoever is &ldquo;on notes&rdquo; either writes too little and the
          doc is useless, or writes too much and spends the meeting transcribing instead of
          contributing. This is the specific gap AI meeting assistants were built for: Lumina
          records and transcribes the call automatically, then applies a structure like the one
          above to the transcript, so a human only has to review and confirm owners rather than
          write everything from a blank page. See how that works on our{' '}
          <a href="/features">features</a> page.
        </p>

        <h2>Making the template stick</h2>
        <p>
          A template survives past the second meeting if it&apos;s attached to something that
          happens automatically rather than something someone has to remember to open. Keep
          minutes in the same place every time, link the previous meeting&apos;s open
          questions at the top of the next one, and route action items to wherever your team
          already tracks work — Slack or a project tool — instead of leaving them in a
          document nobody reopens. If you&apos;re evaluating whether an automated version is
          worth it for your team size, our{' '}
          <a href="/pricing">pricing</a> page covers the free tier for teams up to five,
          which is enough to try the workflow before committing to anything larger. For a
          closer look at where AI-generated notes still need a human pass, see our guide on{' '}
          <a href="/blog/ai-meeting-notes-guide">AI meeting notes</a>.
        </p>
      </article>
    </main>
  );
}
