import React from "react";
import { PostMetadata } from "../types/PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="py-10 flex items-center justify-between gap-14">
      <div key={props.slug} className="text-primary">
        <div className="mb-6 flex items-center">
          <button className="bg-[#EBF2FE] text-xs font-semibold text-primary px-4 py-2 rounded-l-md">
            DESIGN TOOLS
          </button>
          <p className="text-xs font-medium leading-120 px-4 py-2">
            {props.date}
          </p>
        </div>
        <a href={`/posts/${props.slug}`}>
          <h2 className="font-bold text-28 leading-130 capitalize line-clamp-2 w-max">
            {props.slug.replace(/-/g, " ")}
          </h2>
        </a>
        <p className="text-slate-700 line-clamp-4 mt-2">{props.subtitle}</p>
      </div>
      <div className="flex-shrink-0">
        <img src="/thumbnail.png" alt="" />
      </div>
    </div>
  );
};
export default PostPreview;
