import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getRelatedPosts, posts } from '../posts';

const BASE = 'https://lumina.example';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: { absolute: `${post.title} — Lumina Blog` },
    description: post.description,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${BASE}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: `${BASE}/blog/${post.slug}`,
    author: { '@type': 'Organization', name: 'Lumina Labs, Inc.' },
    publisher: { '@type': 'Organization', name: 'Lumina Labs, Inc.' },
  };

  return (
    <main>
      <article>
        <nav aria-label="Breadcrumb">
          <Link href="/blog">Blog</Link>
        </nav>
        <h1>{post.title}</h1>
        <p className="post-meta">
          Published {post.publishedAt} &middot; Updated {post.updatedAt}
        </p>
        {post.sections.map((section) => (
          <section key={section.h2}>
            <h2>{section.h2}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>

      {related.length > 0 && (
        <aside aria-label="Related posts">
          <h2>Related reading</h2>
          <ul>
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/blog/${r.slug}`}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
