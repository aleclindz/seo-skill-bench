import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Lumina AI Meeting Assistant',
  description:
    'Lumina pricing: free for teams up to 5, Pro at $12 per seat per month, and custom Enterprise plans. Every plan includes unlimited transcription.',
  alternates: { canonical: 'https://lumina.example/pricing' },
  openGraph: {
    title: 'Pricing — Lumina AI Meeting Assistant',
    description: 'Free for teams up to 5. Pro at $12/seat/month. Unlimited transcription on every plan.',
    url: 'https://lumina.example/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Lumina AI Meeting Assistant',
    description: 'Free for teams up to 5. Pro at $12/seat/month. Unlimited transcription on every plan.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Lumina',
  offers: [
    { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Pro', price: '12', priceCurrency: 'USD' },
  ],
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
            Unlimited history, action-item routing, Slack &amp; Notion integrations,
            priority support.
          </p>
        </div>
        <div className="plan">
          <h2>Enterprise</h2>
          <p>Custom</p>
          <p>SSO/SAML, data residency, custom retention, dedicated success manager.</p>
        </div>
      </section>
      <p>Every plan includes unlimited recording and transcription. No per-minute fees.</p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
