"use client";

import Link from "next/link";
import { Grid } from "@mui/material";
import PostCard from "@src/app/posts/components/post-card";

const posts = [
  {
    id: 1,
    text: "Post 1",
  },
  {
    id: 2,
    text: "Post 2",
  },
];

const Page = () => {
  return (
    <div>
      <div>
        <Link href="/" style={{ textDecoration: "none", marginRight: 10 }}>
          <span>&#8592;</span> Go Back
        </Link>
      </div>

      <Grid container columnSpacing={2} rowSpacing={2} mt={4}>
        {posts.map((post) => {
          return (
            <Grid item xs={4} key={post.id}>
              <PostCard id={post.id} heading={post.text} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Page;
