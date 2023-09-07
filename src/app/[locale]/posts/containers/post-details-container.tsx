"use client";

import { useRouter } from "next/navigation";
import { Button } from "@src/components";

export type Post = {
  id: string;
  title: string;
  body: string;
};

interface Props {
  post: Post;
}

const PostDetailsContainer = ({ post }: Props) => {
  const routerNavigation = useRouter();

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          style={{ marginRight: 10 }}
          onClick={() => {
            routerNavigation.back();
          }}
        >
          <span>&#8592;</span> Go Back
        </Button>

        <h3>Post: {post.id}</h3>
      </div>

      <hr />
      <p>
        <strong>title:</strong> {post?.title}
      </p>
      <p>
        <strong>body:</strong> {post?.body}
      </p>
    </div>
  );
};

export default PostDetailsContainer;
