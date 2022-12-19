import React from "react";
import getPostMetadata from "../utils/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();

  return (
    <main className="flex flex-col divide-y divide-primary/50">
      {postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </main>
  );
};

export default HomePage;
