import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '../posts';

const BASE = 'https://lumina.example';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — InboxZap`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.h1,
    description: post.description,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'InboxZap' },
    publisher: { '@type': 'Organization', name: 'InboxZap' },
    mainEntityOfPage: `${BASE}/blog/${post.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <nav aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>{post.h1}</span>
      </nav>
      <article>
        <h1>{post.h1}</h1>
        {post.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>

      <section className="cta-box">
        <h2>Stop doing this by hand</h2>
        <p>
          InboxZap automates everything in this guide — bulk deleting, mass unsubscribing,
          and freeing up storage — in a few clicks.{' '}
          <Link href="/pricing">See pricing</Link>.
        </p>
      </section>

      {related.length > 0 && (
        <section className="related-posts">
          <h2>Related guides</h2>
          <ul>
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/blog/${r.slug}`}>{r.h1}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
