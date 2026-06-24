import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/graphql";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
        {post.featuredImage ? (
          <div className="relative h-48 w-full">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <span className="text-slate-400 text-4xl">📝</span>
          </div>
        )}
        <div className="p-5">
          {post.categories?.nodes.length ? (
            <div className="flex gap-2 mb-3 flex-wrap">
              {post.categories.nodes.slice(0, 2).map((cat) => (
                <span
                  key={cat.slug}
                  className="text-xs font-medium px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          ) : null}
          <h2 className="font-semibold text-gray-900 text-lg leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
              {stripHtml(post.excerpt)}
            </p>
          )}
          <p className="text-xs text-gray-400 mt-4">{formatDate(post.date)}</p>
        </div>
      </article>
    </Link>
  );
}
