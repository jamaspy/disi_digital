import { getAllPostsWithFrontMatter } from "@/lib/posts";
import React from "react";
import { ArticleCard } from "../article-card";

export const ArticlesSection = async () => {
  const posts = await getAllPostsWithFrontMatter("blog");
  return (
    <section className='bg-zinc-950'>
      <h2 className="pl-10 pt-10 text-left text-xl md:text-4xl font-bold text-black dark:text-white">
        Articles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
        {posts?.map((post, index) => {
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
    </section>
  );
};
