import { getAllPosts } from "@/lib/graphql";
import PostCard from "@/components/PostCard";

export const revalidate = 3600;

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Posts</h1>
        <p className="text-gray-500">
          Content fetched from WordPress via WPGraphQL — rendered with Next.js on Vercel.
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
