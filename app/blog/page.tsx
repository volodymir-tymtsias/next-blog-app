import NewPostForm from "@/components/NewPostForm";
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export const revalidate = 10;

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <Link href="/blog/new">Add new post</Link>
      <PostSearch />
      <Posts />

      <hr />

      <NewPostForm
        onSuccess={async () => {
          'use server';
          revalidatePath('/blog');
        }}
      />
    </>
  );
}
