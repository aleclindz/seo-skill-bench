import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, getRelatedPosts, posts } from '../posts';

const BASE = 'https://lumina.example';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  const url = `${BASE}/blog/${post.slug}`;
  return {
    title: `${post.title} — InboxZap`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      images: ['/img/og-inboxzap.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const url = `${BASE}/blog/${post.slug}`;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Organization', name: 'InboxZap' },
    publisher: { '@type': 'Organization', name: 'InboxZap' },
    mainEntityOfPage: url,
  };

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <p className="post-meta">
          Updated {new Date(post.updatedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        {post.body.map((block, i) => {
          if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
          if (block.type === 'ul')
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          return <p key={i}>{block.text}</p>;
        })}
      </article>

      <section className="post-cta">
        <h2>Clean up your inbox in minutes</h2>
        <p>
          InboxZap bulk-deletes old email, mass-unsubscribes you from newsletters, and frees
          up storage &mdash; all from one scan. Free for personal inboxes.
        </p>
        <Link className="cta" href="/pricing">
          Start free
        </Link>
      </section>

      {related.length > 0 && (
        <section className="related-posts">
          <h2>Related reading</h2>
          <ul>
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/blog/${r.slug}`}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </main>
  );
}
