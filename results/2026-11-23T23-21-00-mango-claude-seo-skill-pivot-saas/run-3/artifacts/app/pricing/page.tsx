import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Lumina pricing: free for teams up to 5, Pro at $12 per seat per month, and custom Enterprise plans. Every plan includes unlimited transcription.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — Lumina AI Meeting Assistant',
    description:
      'Free for teams up to 5. Pro at $12/seat/month. Unlimited transcription on every plan.',
    url: '/pricing',
  },
};

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'up to 5 teammates',
    features: ['Unlimited meetings', '30-day transcript history', 'Basic AI summaries'],
  },
  {
    name: 'Pro',
    price: '$12',
    tagline: 'per seat / month',
    features: [
      'Unlimited transcript history',
      'Action-item routing',
      'Slack & Notion integrations',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'for larger orgs',
    features: ['SSO / SAML', 'Data residency controls', 'Custom retention', 'Dedicated success manager'],
  },
];

export default function PricingPage() {
  return (
    <main>
      <h1>Simple pricing for every team</h1>
      <p>
        Every plan includes unlimited recording and transcription — no per-minute fees.
        Start on Free, upgrade when your team needs more history or routing.
      </p>

      <section className="plans">
        {PLANS.map((plan) => (
          <div className="plan" key={plan.name}>
            <h2>{plan.name}</h2>
            <p>
              {plan.price} &middot; {plan.tagline}
            </p>
            <ul>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <p>
        Not sure which plan fits? See the full breakdown on the <a href="/features">features</a>{' '}
        page, or <a href="/#faq">read the FAQ</a>.
      </p>
    </main>
  );
}
