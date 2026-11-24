import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, getRelatedPosts, posts } from '../../../lib/blog-posts';

const BASE = 'https://lumina.example';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  const url = `${BASE}/blog/${post.slug}`;
  return {
    title: { absolute: post.title },
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post);
  const url = `${BASE}/blog/${post.slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.dateModified ?? post.publishedAt,
    author: { '@type': 'Organization', name: 'Lumina' },
    publisher: { '@type': 'Organization', name: 'Lumina' },
    mainEntityOfPage: url,
  };

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        {post.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>

      <aside className="pivot-note">
        <p>
          Lumina started as InboxZap, an inbox-zero tool, and we&apos;re keeping guides like
          this one up for anyone still fighting email overload. These days we&apos;re
          focused on a different kind of overload: meetings. If back-to-back calls are your
          bigger time sink, see{' '}
          <Link href="/features">how Lumina turns every meeting into a summary and action
          items</Link>{' '}
          automatically.
        </p>
      </aside>

      {related.length > 0 && (
        <section className="related-posts">
          <h2>Related guides</h2>
          <ul>
            {related.map((relatedPost) => (
              <li key={relatedPost.slug}>
                <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </main>
  );
}
