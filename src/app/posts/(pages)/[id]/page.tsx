import PostDetailsContainer from "@src/app/posts/containers/post-details-container";

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

interface PageProps {
  params: { id: string };
}

export default async function PostDetails({ params }: PageProps) {
  const data = await getData(params.id);

  return <PostDetailsContainer post={data} />;
}
