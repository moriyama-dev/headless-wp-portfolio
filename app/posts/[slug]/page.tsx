import { getPostBySlug, getAllPostSlugs } from "@/lib/graphql";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Takumi`,
    description: post.excerpt?.replace(/<[^>]*>/g, "").trim(),
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-2xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors"
      >
        ← Back to posts
      </Link>

      {post.categories?.nodes.length ? (
        <div className="flex gap-2 mb-4 flex-wrap">
          {post.categories.nodes.map((cat) => (
            <span
              key={cat.slug}
              className="text-xs font-medium px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full"
            >
              {cat.name}
            </span>
          ))}
        </div>
      ) : null}

      <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
        {post.title}
      </h1>

      <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
        {post.author?.node.name && <span>{post.author.node.name}</span>}
        {post.author?.node.name && <span>·</span>}
        <time>{formatDate(post.date)}</time>
      </div>

      {post.featuredImage && (
        <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div
        className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
