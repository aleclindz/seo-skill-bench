import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { getAllSlugs, getHubPost, getPost, getRelatedPosts, posts } from '../../../lib/posts';
import { ORG_ID, SITE_URL } from '../../../lib/seo';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

// Turns a bare slug mention inside prose (e.g. "see bulk-delete-emails-gmail for...")
// into a link with readable anchor text, so the single prose source doubles as internal linking.
function linkify(text: string, currentSlug: string): ReactNode[] {
  const others = posts.filter((p) => p.slug !== currentSlug);
  const pattern = new RegExp(`(${others.map((p) => p.slug).join('|')})`, 'g');
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    const match = others.find((p) => p.slug === part);
    if (match) {
      return (
        <Link key={i} href={`/blog/${match.slug}`}>
          {match.anchorText}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const hub = getHubPost();
  const related = getRelatedPosts(post);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { '@type': 'Organization', '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 2, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  const faqJsonLd = post.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/blog">Blog</Link> / <span>{post.title}</span>
      </nav>

      <article>
        <h1>{post.title}</h1>
        <p className="direct-answer">{post.answer}</p>
        <p className="data-asof">Current as of {post.dataAsOf}.</p>

        {post.body.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((p, i) => (
              <p key={i}>{linkify(p, post.slug)}</p>
            ))}
            {section.table && (
              <table>
                <thead>
                  <tr>
                    {section.table.headers.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        ))}

        {post.faq.length > 0 && (
          <section className="faq">
            <h2>FAQ</h2>
            {post.faq.map((f) => (
              <div className="faq-item" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </section>
        )}

        <section className="sources">
          <h2>Sources</h2>
          <ul>
            {post.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url}>{s.name}</a>
              </li>
            ))}
          </ul>
        </section>

        <nav className="related-links" aria-label="Related reading">
          <h2>Related</h2>
          <ul>
            {!post.isHub && (
              <li>
                <Link href={`/blog/${hub.slug}`}>{hub.anchorText}</Link>
              </li>
            )}
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/blog/${r.slug}`}>{r.anchorText}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </main>
  );
}
