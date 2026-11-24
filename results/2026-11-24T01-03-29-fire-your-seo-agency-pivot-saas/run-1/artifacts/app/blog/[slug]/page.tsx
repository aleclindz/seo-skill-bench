import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, posts } from '../../../content/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.dataAsOf,
    author: { '@type': 'Organization', name: 'Lumina' },
  };

  const faqJsonLd = post.faq && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <article>
        <h1>{post.title}</h1>
        <p className="published">
          Published {post.publishedAt} &middot; Updated {post.dataAsOf}
        </p>
        <p className="direct-answer">{post.directAnswer}</p>
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        {post.faq && (
          <section className="faq">
            <h2>Frequently asked questions</h2>
            {post.faq.map((f) => (
              <div className="faq-item" key={f.question}>
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </section>
        )}
        <p className="sources">
          Sources: {post.sources.map((s, i) => (
            <span key={s}>
              {i > 0 && ', '}
              <a href={s}>{s}</a>
            </span>
          ))}
        </p>
      </article>
    </main>
  );
}
