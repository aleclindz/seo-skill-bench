import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Lumina pricing: free for teams up to 5, Pro at $12 per seat per month, and custom Enterprise plans. Every plan includes unlimited transcription.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — Lumina AI Meeting Assistant',
    description: 'Free for teams up to 5. Pro at $12/seat/month. Unlimited transcription on every plan.',
    url: '/pricing',
  },
};

const plans = [
  {
    name: 'Free',
    price: '$0',
    detail: 'up to 5 teammates',
    features: 'Unlimited meetings, 30-day transcript history, basic summaries.',
  },
  {
    name: 'Pro',
    price: '$12 per seat / month',
    detail: null,
    features:
      'Unlimited history, action-item routing, Slack & Notion integrations, priority support.',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    detail: null,
    features: 'SSO/SAML, data residency, custom retention, dedicated success manager.',
  },
];

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Lumina',
  offers: plans
    .filter((plan) => plan.price.startsWith('$'))
    .map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      price: plan.price === '$0' ? '0' : '12',
      priceCurrency: 'USD',
    })),
};

export default function PricingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <h1>Simple pricing for every team</h1>
      <section className="plans">
        {plans.map((plan) => (
          <div className="plan" key={plan.name}>
            <h2>{plan.name}</h2>
            <p>
              {plan.price}
              {plan.detail ? ` · ${plan.detail}` : ''}
            </p>
            <p>{plan.features}</p>
          </div>
        ))}
      </section>
      <p>Every plan includes unlimited recording and transcription. No per-minute fees.</p>
      <p>
        Curious what&apos;s included at each tier? See the full <a href="/features">feature
        list</a>.
      </p>
    </main>
  );
}
