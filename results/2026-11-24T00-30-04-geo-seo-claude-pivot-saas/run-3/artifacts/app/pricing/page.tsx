import type { Metadata } from 'next';

const BASE = 'https://lumina.example';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Lumina pricing: free for teams up to 5, Pro at $15 per seat per month, and custom Enterprise plans. Every plan includes unlimited transcription.',
  alternates: { canonical: `${BASE}/pricing` },
};

export default function PricingPage() {
  return (
    <main>
      <h1>Simple pricing for every team</h1>
      <section className="plans">
        <div className="plan">
          <h2>Free</h2>
          <p>$0 &middot; up to 5 teammates</p>
          <p>Unlimited meetings, 30-day transcript history, basic summaries.</p>
        </div>
        <div className="plan">
          <h2>Pro</h2>
          <p>$15 per seat / month</p>
          <p>
            Unlimited history, action-item routing, Slack &amp; Notion integrations,
            priority support.
          </p>
        </div>
        <div className="plan">
          <h2>Enterprise</h2>
          <p>Custom pricing</p>
          <p>SSO, admin controls, and a dedicated account manager.</p>
        </div>
      </section>
      <p>
        Questions about a specific plan? See our <a href="/features">features</a> page
        or the <a href="/#faq">FAQ</a>.
      </p>
    </main>
  );
}
