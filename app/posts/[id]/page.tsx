import { ArticleBackButton } from "@/components/ui/article-back-button";
import { getFiles, getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
    metadataBase: new URL("https://www.disi.au"),
    title: frontMatter.title,
    description: frontMatter.excerpt,
    authors: [{ name: frontMatter.author }],
    openGraph: {
      type: "article",
      title: frontMatter.title,
      description: frontMatter.excerpt,
      url: `https://www.disi.au/posts/${id}`,
      siteName: "disi digital",
      images: [
        {
          url: frontMatter.image,
          width: 1200,
          height: 627,
          alt: frontMatter.title,
        },
      ],
      authors: frontMatter.author,
      publishedTime: frontMatter.date,
      modifiedTime: frontMatter.date,
    },
    twitter: {
      card: "summary_large_image",
      title: frontMatter.title,
      description: frontMatter.excerpt,
      images: [frontMatter.image],
      creator: "@disidigital",
    },
    keywords: frontMatter.tags,
    alternates: {
      canonical: `https://www.disi.au/posts/${id}`,
    },
  };
}

const PostPage = async ({ params }: { params: { id: string } }) => {
  const { frontMatter, markdownBody } = await getPostBySlug("blog", params.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontMatter.title,
    description: frontMatter.excerpt,
    image: frontMatter.image,
    datePublished: frontMatter.date,
    dateModified: frontMatter.date,
    author: {
      "@type": "Person",
      name: frontMatter.author,
      image: frontMatter.avatar,
    },
    publisher: {
      "@type": "Organization",
      name: "disi digital",
      logo: {
        "@type": "ImageObject",
        url: "https://www.disi.au/disi_logo_trans.png",
      },
    },
    keywords: frontMatter.tags.join(", "),
    articleSection: "Technology",
    inLanguage: "en-AU",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.disi.au/posts/${params.id}`,
    },
  };

  return (
    <article className="container bg-gradient-to-br from-primary-100 to-primary min-h-screen pl-12 md:px-20 lg:pl-24 p-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="h-72 relative rounded-t-xl overflow-hidden">
        <Image
          src={frontMatter.image}
          alt="Post Image"
          fill
          className="object-cover object-center"
        />
      </div>
      <p className="font-black text-3xl mt-8">
        {frontMatter.title}
        <span className="text-highlight">.</span>
      </p>

      <div className="flex flex-row gap-2 items-center mt-2">
        <Image
          src={frontMatter.avatar}
          alt="Author Image"
          width={40}
          height={40}
          className="rounded-full w-10 h-10"
        />
        <p className="font-light text-neutral-300 text-xs my-4">
          Published {frontMatter.date} by {frontMatter.author}
        </p>
      </div>
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
          a({ node, children, ...props }) {
            return (
              <a className="text-pink-500 hover:underline" {...props}>
                {children}
              </a>
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
      <div className="my-4 flex flex-wrap flex-row gap-2">
        {frontMatter.tags.length > 0 &&
          frontMatter.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-neutral-800 text-neutral-200 px-2 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}
      </div>
      <ArticleBackButton />
    </article>
  );
};

export default PostPage;
