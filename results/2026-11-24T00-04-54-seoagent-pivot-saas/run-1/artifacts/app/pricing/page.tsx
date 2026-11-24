import type { Metadata } from 'next';

const DOMAIN = 'https://lumina.example';

export const metadata: Metadata = {
  title: { absolute: 'Pricing — Lumina AI Meeting Assistant' },
  description:
    'Lumina pricing: free for teams up to 5, Pro at $12 per seat per month, and custom Enterprise plans. Every plan includes unlimited transcription.',
  alternates: { canonical: `${DOMAIN}/pricing` },
  openGraph: {
    title: 'Pricing — Lumina AI Meeting Assistant',
    description: 'Free for teams up to 5. Pro at $12/seat/month. Unlimited transcription on every plan.',
    url: `${DOMAIN}/pricing`,
    images: [`${DOMAIN}/img/og-lumina.png`],
  },
  twitter: { card: 'summary_large_image' },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Lumina',
  description: 'AI meeting assistant that records, transcribes, and summarizes team meetings.',
  brand: { '@type': 'Brand', name: 'Lumina' },
  offers: [
    {
      '@type': 'Offer',
      name: 'Free',
      price: '0',
      priceCurrency: 'USD',
      url: `${DOMAIN}/pricing#free`,
    },
    {
      '@type': 'Offer',
      name: 'Pro',
      price: '12',
      priceCurrency: 'USD',
      url: `${DOMAIN}/pricing#pro`,
    },
  ],
};

export default function PricingPage() {
  return (
    <main>
      <h1>Simple pricing for every team</h1>
      <section className="plans">
        <div className="plan" id="free">
          <h2>Free</h2>
          <p>$0 &middot; up to 5 teammates</p>
          <p>Unlimited meetings, 30-day transcript history, basic summaries.</p>
        </div>
        <div className="plan" id="pro">
          <h2>Pro</h2>
          <p>$12 per seat / month</p>
          <p>
            Unlimited history, action-item routing, Slack &amp; Notion integrations,
            priority support.
          </p>
        </div>
        <div className="plan" id="enterprise">
          <h2>Enterprise</h2>
          <p>Custom</p>
          <p>SSO/SAML, data residency, custom retention, dedicated success manager.</p>
        </div>
      </section>
      <p>Every plan includes unlimited recording and transcription. No per-minute fees.</p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    </main>
  );
}
