import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export async function getFiles(dataType: string) {
  return fs.readdirSync(path.join(root, "data", dataType), "utf-8");
}

export async function getPostBySlug(dataType: string, slug: string) {
  const source = fs.readFileSync(
    path.join(root, "data", dataType, `${slug}.md`),
    "utf8"
  );

  const { data, content } = matter(source);

  return {
    frontMatter: data,
    markdownBody: content,
  };
}

export async function getAllPostsWithFrontMatter(dataType: string) {
  const files = fs.readdirSync(path.join(root, "data", dataType));

  // @ts-ignore
  const posts = files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", dataType, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        frontMatter: data,
        slug: postSlug.replace(".md", ""),
      },
      ...allPosts,
    ];
  }, []);

  return posts.sort((a, b) => {
    const dateA = new Date(
      a.frontMatter.date.replace(/(\d+)(st|nd|rd|th)/, "$1")
    );
    const dateB = new Date(
      b.frontMatter.date.replace(/(\d+)(st|nd|rd|th)/, "$1")
    );
    return dateB.getTime() - dateA.getTime();
  });
}
