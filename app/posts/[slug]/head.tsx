import React from "react";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "../../../utils/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({ slug: post.slug }));
};

export default function Head(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <>
      <title>{post.data.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
