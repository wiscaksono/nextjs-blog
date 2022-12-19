import React from "react";
import { PostMetadata } from "../types/PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="py-10 flex items-center justify-between gap-14">
      <div key={props.slug} className="text-primary">
        <p className="text-xs font-medium leading-120 mb-6">{props.date}</p>
        <a href={`/posts/${props.slug}`} className="mb-3">
          <h2 className="font-bold text-28 leading-130 capitalize line-clamp-2">
            {props.slug.replace(/-/g, " ")}
          </h2>
        </a>
        <p className="text-slate-700 line-clamp-2">
          {props.subtitle} Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aspernatur aperiam commodi non modi quam sapiente porro est
          soluta mollitia ab, veniam vero dolore. Fugit cumque rerum sed earum!
          Autem minima totam dicta asperiores, ex error commodi excepturi
          pariatur iusto placeat veniam nam fuga repudiandae officia molestias
          optio at dolore, veritatis magnam? Saepe facilis quos deleniti,
          doloremque nihil natus repellat autem quisquam et quam animi
          voluptatum suscipit quibusdam! Quidem, inventore! Magnam perferendis
          sed molestias ut? Dolorum quis fugit ad numquam doloremque vel rem
          aliquam similique illo libero non deleniti iusto laborum, a magni
          tenetur tempora exercitationem maiores? Hic beatae fugit assumenda?
        </p>
      </div>
      <div className="flex-shrink-0">
        <img src="/thumbnail.png" alt="" />
      </div>
    </div>
  );
};
export default PostPreview;
