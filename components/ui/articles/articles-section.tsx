import { getAllPostsWithFrontMatter } from "@/lib/posts";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ArticleCard } from "../article-card";

export const ArticlesSection = async () => {
  const posts = await getAllPostsWithFrontMatter("blog");

  const firstFourPosts = posts.slice(0, 4);

  return (
    <section id="articles" className="dark:bg-zinc-950 bg-neutral-100">
      <h2 className="pl-10 pt-10 text-left text-xl md:text-4xl font-bold dark:text-neutral-200 text-neutral-900">
        Articles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
        {firstFourPosts?.map((post, index) => {
          const { frontMatter, slug } = post;
          return (
            <ArticleCard
              key={index}
              title={frontMatter?.title}
              description={frontMatter?.excerpt}
              author={frontMatter?.author}
              minutes={frontMatter?.minutes}
              image={frontMatter?.image}
              avatar={frontMatter?.avatar}
              slug={`/posts/${slug}`}
            />
          );
        })}
      </div>
      <Link href="/posts">
        <p className="pl-4 md:pl-10 hover:text-pink-600 inline-block">
          See all articles
          <ChevronRightIcon className="inline ml-1" />
        </p>
      </Link>
    </section>
  );
};
