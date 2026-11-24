import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing — Lumina AI Meeting Assistant',
  description:
    'Lumina pricing: free for teams up to 5, Pro at $12 per seat per month, and custom Enterprise plans. Every plan includes unlimited transcription.',
  openGraph: {
    title: 'Pricing — Lumina AI Meeting Assistant',
    description: 'Free for teams up to 5. Pro at $12/seat/month. Unlimited transcription on every plan.',
    url: 'https://lumina.example/pricing',
    images: ['/img/og-lumina.png'],
  },
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
          <p>$12 per seat / month</p>
          <p>
            Unlimited history, action-item routing, Slack &amp; Notion integrations, priority
            support.
          </p>
        </div>
        <div className="plan">
          <h2>Enterprise</h2>
          <p>Custom pricing</p>
          <p>SSO, audit logs, a dedicated onboarding contact, and a custom data-retention policy.</p>
        </div>
      </section>
      <p>
        See everything included on the <Link href="/features">features page</Link>.
      </p>
    </main>
  );
}
