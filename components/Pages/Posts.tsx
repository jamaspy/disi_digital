import React from 'react';
import Wrapper from './Wrapper';
import { LuNewspaper } from 'react-icons/lu';
import Link from 'next/link';
import { getAllPostsWithFrontMatter } from '@/lib/posts';
export const PostsPage = async () => {
  const posts = await getAllPostsWithFrontMatter('blog');
  return (
    <Wrapper id="posts">
      <div className="flex items-center justify-center min-h-[80vh] ">
        <div className="flex flex-col px-8  max-w-[980px] mx-auto">
          <p className="text-5xl font-black">
            Posts<span className="text-highlight">.</span>
          </p>
          <hr className="my-4 border-highlight max-w-md" />
          <div className="flex flex-col md:flex-row gap-12 items-start justify-center ">
            <div className="flex-1 flex flex-col items-start justify-start  h-full">
              <div className="w-full">
                <p className="flex flex-row items-center text-xl font-semibold">
                  <LuNewspaper className="text-highlight mr-2" />
                  Something I wrote down for you.
                </p>
                <div className=" md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4 w-full">
                  {posts.map((post, index) => (
                    <Link
                      className="p-4 rounded-xl shadow-md flex flex-col gap-2 hover:shadow-lg transition-all duration-200 ease-in-out bg-primary-100 hover:bg-primary-200 text-primary-900 hover:text-primary-900 mb-2 md:mb-0"
                      key={index}
                      href={`/posts/${post.slug}`}
                    >
                      <p className="font-semibold">{post.frontMatter.title}</p>
                      <p className="text-xs text-secondary-500">
                        {post.frontMatter.date}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
