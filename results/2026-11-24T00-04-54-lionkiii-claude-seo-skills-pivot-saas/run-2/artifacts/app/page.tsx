const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lumina',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'AI meeting assistant that records, transcribes, and summarizes team meetings.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <section className="hero">
        <h1>Never take meeting notes again</h1>
        <p>
          Lumina is the AI meeting assistant for teams. It joins your calls, records and
          transcribes them, and delivers a summary with decisions and action items before
          you&apos;re back at your desk.
        </p>
        <a className="cta" href="/pricing">
          Start free
        </a>
      </section>

      <section className="how-it-works">
        <h2>How Lumina works</h2>
        <p>
          Connect your calendar once. Lumina joins every meeting you invite it to — Zoom,
          Google Meet, or Microsoft Teams — and does the busywork humans shouldn&apos;t.
          Within minutes of the call ending, your team has a speaker-labeled transcript, a
          structured recap of what was decided, and action items routed to the people who
          own them.
        </p>
        <p>
          No bots to babysit and no settings to configure per meeting. Invite Lumina once to
          a recurring series, or add it to a one-off call straight from your calendar invite,
          and it shows up every time without being asked.
        </p>
      </section>

      <section className="social-proof">
        <h2>Teams run better on Lumina</h2>
        <p>
          &ldquo;We stopped arguing about what was decided. Lumina remembers for
          us.&rdquo; — a happy operations lead
        </p>
        <p>
          Loved by product, sales, and customer success teams at fast-growing startups who
          were tired of losing context between meetings. Teams on Lumina report spending
          noticeably less time re-explaining decisions and chasing down who owns what.
        </p>
      </section>

      <section className="faq" id="faq">
        <h2>Frequently asked questions</h2>
        <div className="faq-item">
          <h3>Which video platforms does Lumina support?</h3>
          <p>
            Lumina joins meetings on Zoom, Google Meet, and Microsoft Teams. Connect your
            calendar once and Lumina will join any meeting you invite it to automatically.
          </p>
        </div>
        <div className="faq-item">
          <h3>How accurate is the transcription?</h3>
          <p>
            Lumina produces speaker-labeled transcripts in more than 30 languages, searchable
            across your whole workspace, minutes after a call ends.
          </p>
        </div>
        <div className="faq-item">
          <h3>Where do action items end up?</h3>
          <p>
            Decisions, blockers, and next steps are extracted automatically and can be routed
            to Slack or synced to Notion and Confluence, so the recap lands wherever your team
            already works.
          </p>
        </div>
        <div className="faq-item">
          <h3>Is Lumina free?</h3>
          <p>
            Yes — teams of up to five get unlimited meetings with 30-day transcript history
            at no cost. Paid plans add unlimited history and integrations; see{' '}
            <a href="/pricing">pricing</a> for details.
          </p>
        </div>
      </section>
    </main>
  );
}
