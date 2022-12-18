import React from "react";
import { PostMetadata } from "../types/PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      key={props.slug}
      className="border border-violet-300 p-4 rounded-md shadow-sm bg-white"
    >
      <p className="text-sm text-slate-400">{props.date}</p>
      <a href={`/posts/${props.slug}`}>
        <h2 className="text-violet-600 hover:underline mb-4 capitalize">
          {props.slug.replace(/-/g, " ")}
        </h2>
      </a>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};
export default PostPreview;
