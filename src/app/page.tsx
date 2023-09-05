import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav
        style={{
          display: "flex",
          backgroundColor: "#f1f1f1",
          paddingInline: 10,
        }}
      >
        <Link href="login" style={{ marginRight: 10 }}>
          <h3>Login</h3>
        </Link>

        <Link href="posts">
          <h3>Posts</h3>
        </Link>
      </nav>
    </main>
  );
}
