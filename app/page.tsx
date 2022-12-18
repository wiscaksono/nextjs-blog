import React from "react";
import getPostMetadata from "../utils/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main className="grid grid-cols-1 md:grid-col-2 gap-4">{postPreviews}</main>
  );
};

export default HomePage;
