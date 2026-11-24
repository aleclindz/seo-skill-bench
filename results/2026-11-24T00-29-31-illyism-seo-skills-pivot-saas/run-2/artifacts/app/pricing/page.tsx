import type { Metadata } from 'next';
import { SITE_NAME } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Lumina pricing: free for teams up to 5, $12/user/month for Team, and custom pricing for Enterprise.',
  alternates: { canonical: '/pricing' },
};

const plans = [
  {
    name: 'Free',
    price: '$0',
    cadence: 'forever',
    blurb: 'For teams up to 5 people trying Lumina on real meetings.',
    features: [
      'Up to 5 team members',
      'Unlimited meeting transcription',
      'Decisions and action items recap',
      '30 days of meeting history',
    ],
  },
  {
    name: 'Team',
    price: '$12',
    cadence: 'per user / month',
    blurb: 'For teams that want full history and integrations.',
    features: [
      'Unlimited team members',
      'Unlimited meeting history',
      'Slack and project-tracker sync for action items',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'contact us',
    blurb: 'For larger organizations with security and procurement requirements.',
    features: [
      'SSO and SCIM provisioning',
      'Custom data retention policy',
      'Dedicated onboarding',
      'Volume pricing',
    ],
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: SITE_NAME,
  offers: plans.map((plan) => ({
    '@type': 'Offer',
    name: plan.name,
    price: plan.price.replace('$', '') || '0',
    priceCurrency: 'USD',
  })),
};

export default function PricingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Pricing</h1>
      <p>Simple pricing that scales with your team. No credit card required to start free.</p>

      <div className="plans">
        {plans.map((plan) => (
          <section key={plan.name}>
            <h2>{plan.name}</h2>
            <p>
              <strong>{plan.price}</strong> {plan.cadence}
            </p>
            <p>{plan.blurb}</p>
            <ul>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p>
        Questions about pricing? See the <a href="/faq">FAQ</a> or compare plans on the{' '}
        <a href="/features">features page</a>.
      </p>
    </main>
  );
}
