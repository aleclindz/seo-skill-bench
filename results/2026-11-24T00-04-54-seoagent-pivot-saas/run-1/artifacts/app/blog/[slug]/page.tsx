import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { getAllPosts, getPostBySlug } from '../../../lib/posts';

const DOMAIN = 'https://lumina.example';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

function readFaq(slug: string): { q: string; a: string }[] {
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  if (!fs.existsSync(filePath)) return [];
  const { data } = matter(fs.readFileSync(filePath, 'utf8'));
  return data.faq ?? [];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = `${DOMAIN}/blog/${post.slug}`;
  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: 'article',
      images: [`${DOMAIN}/img/og-lumina.png`],
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const faq = readFaq(params.slug);
  const url = `${DOMAIN}/blog/${post.slug}`;

  const jsonLd: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      datePublished: post.date,
      dateModified: post.dateModified,
      image: `${DOMAIN}/img/og-lumina.png`,
      publisher: {
        '@type': 'Organization',
        name: 'Lumina',
        logo: { '@type': 'ImageObject', url: `${DOMAIN}/img/og-lumina.png` },
      },
      author: { '@type': 'Organization', name: 'Lumina' },
      mainEntityOfPage: url,
    },
  ];

  if (faq.length > 0) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      {jsonLd.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </main>
  );
}
