const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL!;

async function fetchAPI<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`GraphQL request failed: ${res.status}`);

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  categories?: {
    nodes: { name: string; slug: string }[];
  };
}

export interface PostDetail extends Post {
  content: string;
  author?: {
    node: { name: string };
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const data = await fetchAPI<{ posts: { nodes: Post[] } }>(`
    query GetAllPosts {
      posts(first: 20, where: { status: PUBLISH }) {
        nodes {
          id
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `);
  return data.posts.nodes;
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  const data = await fetchAPI<{ post: PostDetail | null }>(`
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        slug
        title
        excerpt
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  `, { slug });
  return data.post;
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  const data = await fetchAPI<{ posts: { nodes: { slug: string }[] } }>(`
    query GetAllSlugs {
      posts(first: 100, where: { status: PUBLISH }) {
        nodes {
          slug
        }
      }
    }
  `);
  return data.posts.nodes;
}
