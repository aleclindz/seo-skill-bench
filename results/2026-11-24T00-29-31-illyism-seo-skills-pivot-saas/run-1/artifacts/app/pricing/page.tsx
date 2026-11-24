import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Lumina pricing: free for teams up to 5, Pro at $12 per seat per month, and custom Enterprise plans. Every plan includes unlimited transcription.',
  alternates: { canonical: 'https://lumina.example/pricing' },
  openGraph: {
    title: 'Pricing — Lumina AI Meeting Assistant',
    description:
      'Free for teams up to 5. Pro at $12/seat/month. Unlimited transcription on every plan.',
    url: 'https://lumina.example/pricing',
    images: ['/img/og-lumina.png'],
  },
};

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'up to 5 teammates',
    features: 'Unlimited meetings, 30-day transcript history, basic summaries.',
    offerPrice: '0',
  },
  {
    name: 'Pro',
    price: '$12',
    period: 'per seat / month',
    features:
      'Unlimited history, action-item routing, Slack & Notion integrations, priority support.',
    offerPrice: '12',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: 'SSO/SAML, data residency, custom retention, dedicated success manager.',
    offerPrice: undefined,
  },
];

export default function PricingPage() {
  return (
    <main>
      <h1>Simple pricing for every team</h1>
      <section className="plans">
        {plans.map((plan) => (
          <div className="plan" key={plan.name}>
            <h2>{plan.name}</h2>
            <p>
              {plan.price}
              {plan.period ? ` · ${plan.period}` : ''}
            </p>
            <p>{plan.features}</p>
          </div>
        ))}
      </section>
      <p>Every plan includes unlimited recording and transcription. No per-minute fees.</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Lumina',
            offers: plans
              .filter((plan) => plan.offerPrice !== undefined)
              .map((plan) => ({
                '@type': 'Offer',
                name: plan.name,
                price: plan.offerPrice,
                priceCurrency: 'USD',
              })),
          }),
        }}
      />
    </main>
  );
}
