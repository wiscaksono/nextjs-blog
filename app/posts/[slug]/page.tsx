import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
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

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <>
      <div className="pb-5 mb-5 border-b border-primary/10">
        <h1 className="text-4xl font-bold text-primary">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <Markdown
        options={{ wrapper: "article" }}
        className="prose prose-img:mx-auto mx-auto max-w-none"
      >
        {post.content}
      </Markdown>
    </>
  );
};

export default PostPage;
