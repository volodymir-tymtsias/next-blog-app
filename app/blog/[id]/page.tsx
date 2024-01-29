import { Metadata } from "next";
import { getAllPosts, getPostsById } from "@/services/getPosts";

type Props = {
  params: {
    id: string;
  };
};

// for static rendering
export async function generateStaticParams() {
  const posts: any[] = await getAllPosts();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }))
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPostsById(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPostsById(id);
  console.log(post);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
