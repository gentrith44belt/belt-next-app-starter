"use client";

import Link from "next/link";

interface PageProps {}

const Page = (props: PageProps) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="/" style={{ textDecoration: "none", marginRight: 10 }}>
          <span>&#8592;</span> Go Back
        </Link>



        <h3>Posts</h3>
      </div>

      <hr />

      <ul>
        <li>
          <Link
            href="posts/1"
            style={{ textDecoration: "none", marginRight: 10 }}
          >
            Post 1
          </Link>
        </li>
        <li>
          <Link
            href="posts/2"
            style={{ textDecoration: "none", marginRight: 10 }}
          >
            Post 2
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
