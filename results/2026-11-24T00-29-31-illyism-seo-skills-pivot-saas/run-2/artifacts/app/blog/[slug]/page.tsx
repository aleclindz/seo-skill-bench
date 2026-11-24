import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, posts } from '../../../lib/posts';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <h1>{post.title}</h1>
        <p>
          <time dateTime={post.date}>{post.date}</time>
        </p>
        {post.sections.map((section, i) => (
          <div key={i}>
            {section.heading && <h2>{section.heading}</h2>}
            {section.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        ))}
      </article>
      <p>
        <a href="/blog">Back to the blog</a> · Ready to try it? <a href="/pricing">See pricing</a>.
      </p>
    </main>
  );
}
