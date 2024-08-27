import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import { getFiles, getPostBySlug } from "@/lib/posts";
import { ArticleBackButton } from "@/components/ui/article-back-button";
import Image from "next/image";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getFiles("blog");

  return posts.map((post) => ({
    params: { id: post.replace(/\.md$/, "") },
  }));
}

type Props = {
  params: { id: string };

};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const { frontMatter } = await getPostBySlug("blog", id);

  return {
    title: frontMatter.title,
    description: frontMatter.excerpt,
    openGraph: {
      images: [frontMatter.image],
    },
  };
}

const PostPage = async ({ params }: { params: { id: string } }) => {
  const { frontMatter, markdownBody } = await getPostBySlug("blog", params.id);
  return (
    <article className="bg-gradient-to-br from-primary-100 to-primary min-h-screen pl-12 md:px-20 lg:pl-24 p-12">
      <div className="h-72 relative rounded-t-xl overflow-hidden">
      <Image src={frontMatter.image} alt="Post Image" fill className='object-cover object-center' />
      </div>
      <p className="font-black text-3xl mt-8">
        {frontMatter.title}
        <span className="text-highlight">.</span>
      </p>
     
      <p className="font-light text-neutral-300 text-xs my-4">
        Published {frontMatter.date} by {frontMatter.author}
      </p>
      <ArticleBackButton />
      <ReactMarkdown
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <div className="my-8">
                <SyntaxHighlighter
                  showLineNumbers
                  language="js"
                  style={dracula}
                  PreTag="div"
                >
                  {children as string[]}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          p({ node, children, ...props }) {
            return (
              <p className="text-md  mt-4" {...props}>
                {children}
              </p>
            );
          },
          h2({ node, children, ...props }) {
            return (
              <h2 className="text-2xl font-bold mt-8" {...props}>
                {children}
              </h2>
            );
          },
          ul({ node, children, ...props }) {
            return (
              <ul className="list-disc pl-8 mt-4" {...props}>
                {children}
              </ul>
            );
          },
          ol({ node, children, ...props }) {
            return (
              <ol className="list-decimal pl-8 mt-4" {...props}>
                {children}
              </ol>
            );
          },
        }}
      >
        {markdownBody}
      </ReactMarkdown>
      <ArticleBackButton />
    </article>
  );
};

export default PostPage;
