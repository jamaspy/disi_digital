import { ArticleCard } from "@/components/ui/article-card";
import { getAllPostsWithFrontMatter } from "@/lib/posts";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import image from "next/image";
import Link from "next/link";
import { HomeButton } from "@/components/ui/home-button";

const PostsPage = async () => {
  const posts = await getAllPostsWithFrontMatter("blog");
  return (
    <div className="bg-slate-950 p-4 min-h-screen">
      <div className="w-full mb-4">
        <HomeButton />
      </div>
      <div className="flex-1 h-full w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts?.map((post, index) => {
          const { frontMatter, slug } = post;
          return (
            <Link
              key={index}
              href={`posts/${slug}`}
              className={cn(
                "group/card w-full flex-1 border rounded-xl overflow-hidden",
                {
                  "md:col-span-2": index % 3 === 0,
                  "md:col-span-1": index % 3 === 1 || index % 3 === 2,
                }
              )}
            >
              <div className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl backgroundImage flex flex-col justify-between p-4">
                <Image
                  fill
                  alt="Avatar"
                  src={frontMatter.image}
                  className="absolute inset-0 z-0 object-cover group-hover/card:scale-110 group-hover/card:skew-x-2 transition duration-300"
                />
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-neutral-100 opacity-20"></div>
                <div className="flex flex-row items-center space-x-4 z-10">
                  <Image
                    height="100"
                    width="100"
                    alt="Avatar"
                    src={`${frontMatter.avatar}`}
                    className="h-10 w-10 rounded-full border-2 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-normal text-base text-gray-50 relative z-10">
                      {frontMatter.author}
                    </p>
                    <p className="text-sm text-gray-400">
                      {frontMatter.minutes} min read
                    </p>
                  </div>
                </div>
                <div className="text content">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                    {frontMatter.title}
                  </h1>
                  <p className="font-semibold text-sm text-gray-50 relative z-10 my-4">
                    {frontMatter.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PostsPage;
