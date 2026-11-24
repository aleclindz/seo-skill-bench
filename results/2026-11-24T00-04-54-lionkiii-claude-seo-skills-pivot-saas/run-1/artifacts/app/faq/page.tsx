import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Lumina: what happened to InboxZap, which video platforms are supported, pricing, data retention, and security.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ — Lumina AI Meeting Assistant',
    description: 'Answers on the InboxZap rename, supported platforms, pricing, and data handling.',
    url: 'https://lumina.example/faq',
  },
};

export default function FaqPage() {
  return (
    <main>
      <h1>Frequently asked questions</h1>

      <section>
        <h2>What happened to InboxZap?</h2>
        <p>
          InboxZap is now Lumina. We moved from email cleanup to an AI meeting assistant —
          read the full story on the{' '}
          <Link href="/blog/lumina-formerly-inboxzap">blog</Link>. InboxZap accounts were not
          migrated automatically; start a new free Lumina workspace from the homepage.
        </p>
      </section>

      <section>
        <h2>Which video platforms does Lumina support?</h2>
        <p>Zoom, Google Meet, and Microsoft Teams, with no extra setup required for most workspaces.</p>
      </section>

      <section>
        <h2>How much does Lumina cost?</h2>
        <p>
          Free for teams up to 5 people. Pro is $12 per seat per month. See the{' '}
          <Link href="/pricing">pricing</Link> page for details on what&apos;s included in each plan.
        </p>
      </section>

      <section>
        <h2>How long are transcripts and recordings kept?</h2>
        <p>
          Free plans keep 30 days of transcript history. Pro and Enterprise plans support
          unlimited history, and Enterprise customers can set custom retention windows.
        </p>
      </section>

      <section>
        <h2>Is my meeting data secure?</h2>
        <p>
          Enterprise plans include SSO/SAML and configurable data residency. See{' '}
          <Link href="/features">features</Link> for the full list of integrations and controls.
        </p>
      </section>
    </main>
  );
}
