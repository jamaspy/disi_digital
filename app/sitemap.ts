import { getAllPostsWithFrontMatter } from "@/lib/posts";
import { MetadataRoute } from "next";

function parseDate(dateString: string): Date {
  const parsed = new Date(dateString);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.disi.au";

  const posts = await getAllPostsWithFrontMatter("blog");

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: parseDate(post.frontMatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
