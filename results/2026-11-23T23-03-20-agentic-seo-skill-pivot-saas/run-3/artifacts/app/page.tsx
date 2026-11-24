export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>Clean your inbox in minutes, not weekends</h1>
        <p>
          InboxZap bulk-deletes old email, mass-unsubscribes you from newsletters you never
          read, and gets you to inbox zero without you touching a single message by hand.
        </p>
        <a className="cta" href="/pricing">
          Start free
        </a>
      </section>

      <section className="how-it-works">
        <h2>How InboxZap works</h2>
        <p>
          Connect your Gmail or Outlook account once. InboxZap scans your mail, groups it by
          sender and size, and shows you exactly what&apos;s safe to bulk delete or unsubscribe
          from before you confirm anything.
        </p>
        <div className="steps">
          <div className="step">
            <h3>Scan your inbox</h3>
            <p>
              See your biggest senders, oldest mail, and largest attachments in one view —
              no more guessing what&apos;s filling up your storage.
            </p>
          </div>
          <div className="step">
            <h3>Bulk delete &amp; unsubscribe</h3>
            <p>
              Mass-unsubscribe from newsletters in one click and bulk delete thousands of old
              emails by sender, age, or size — with your important mail protected.
            </p>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <h2>Thousands of inboxes back under control</h2>
        <p>
          &ldquo;I deleted twelve years of email and unsubscribed from forty newsletters in
          one sitting.&rdquo; — a relieved InboxZap user
        </p>
      </section>

      <section className="faq-preview" id="faq">
        <h2>Common questions</h2>
        <p>
          Want the full breakdown of bulk deleting, archiving, and unsubscribing? See our{' '}
          <a href="/faq">FAQ</a> or browse the{' '}
          <a href="/blog">inbox cleanup guides</a>.
        </p>
      </section>
    </main>
  );
}
