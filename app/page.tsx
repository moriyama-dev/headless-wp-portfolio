import { getAllPosts } from "@/lib/graphql";
import PostCard from "@/components/PostCard";

export const revalidate = 3600;

const techPoints = [
  {
    icon: "🔌",
    title: "Headless WordPress",
    description:
      "WordPress runs purely as a CMS backend. Content is exposed via WPGraphQL and consumed by the frontend — no WordPress theme involved.",
  },
  {
    icon: "⚡",
    title: "Next.js App Router + SSG",
    description:
      "Pages are statically generated at build time using Next.js App Router. Fast load, SEO-friendly, and ready to scale.",
  },
  {
    icon: "🔄",
    title: "Incremental Static Regeneration",
    description:
      "Content auto-refreshes every hour (revalidate: 3600) without a full rebuild — so the site stays up-to-date without manual deploys.",
  },
  {
    icon: "🚀",
    title: "Deployed on Vercel",
    description:
      "CI/CD via GitHub Actions: push to main → type check → lint → auto-deploy to Vercel. This page is live at a public URL.",
  },
];

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div>
      {/* Tech overview banner */}
      <div className="mb-12 rounded-2xl border border-blue-100 bg-blue-50 px-6 py-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">
          How this site is built
        </p>
        <h2 className="text-xl font-bold text-gray-900 mb-5">
          Headless WordPress × Next.js — running in production
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {techPoints.map((point) => (
            <div key={point.title} className="flex gap-3">
              <span className="text-2xl leading-none mt-0.5">{point.icon}</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{point.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-xs">
          <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-600">WordPress + WPGraphQL</span>
          <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-600">Next.js 16 App Router</span>
          <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-600">TypeScript</span>
          <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-600">Tailwind CSS</span>
          <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-600">Vercel</span>
          <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-600">GitHub Actions</span>
        </div>
      </div>

      {/* Post list */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Posts</h1>
        <p className="text-sm text-gray-400">
          Demo content fetched live from{" "}
          <a
            href="https://content.wpgraphql.com/graphql"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            WPGraphQL public demo
          </a>
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-400">No posts found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
