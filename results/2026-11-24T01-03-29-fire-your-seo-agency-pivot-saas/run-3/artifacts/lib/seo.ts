export const SITE_URL = 'https://lumina.example';
export const BRAND = 'InboxZap';
export const ORG_ID = `${SITE_URL}/#organization`;

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: BRAND,
    url: SITE_URL,
    logo: `${SITE_URL}/img/og-inboxzap.png`,
    legalName: 'Lumina Labs, Inc.',
  };
}

export function softwareApplicationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: BRAND,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'InboxZap bulk-deletes old emails, unsubscribes you from newsletters, and gets you to inbox zero in minutes.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@id': ORG_ID },
  };
}
