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
    images: ['/img/og-lumina.png'],
  },
  twitter: { card: 'summary_large_image' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Lumina',
  description: 'AI meeting assistant for teams — recording, transcription, and summaries.',
  offers: [
    { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
    {
      '@type': 'Offer',
      name: 'Pro',
      price: '12',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '12',
        priceCurrency: 'USD',
        unitText: 'per seat per month',
      },
    },
    { '@type': 'Offer', name: 'Enterprise', description: 'Custom pricing' },
  ],
};

export default function PricingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <p>Custom</p>
          <p>SSO/SAML, data residency, custom retention, dedicated success manager.</p>
        </div>
      </section>
      <p>Every plan includes unlimited recording and transcription. No per-minute fees.</p>
    </main>
  );
}
