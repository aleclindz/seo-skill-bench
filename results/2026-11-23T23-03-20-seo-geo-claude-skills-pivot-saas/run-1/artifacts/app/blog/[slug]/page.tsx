import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPostBySlug } from '../../../lib/posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `https://lumina.example/blog/${post.slug}`;
  return {
    title: `${post.title} — Lumina`,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      images: ['/img/og-lumina.png'],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Lumina' },
  };

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <p className="post-meta">{post.publishedAt}</p>
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>

      <aside>
        <h2>Related posts</h2>
        <ul>
          {related.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </aside>

      <p>
        <Link href="/pricing">See how Lumina works for your team &rarr;</Link>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
