import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";
import { posts } from "../posts";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string }},
) {
  const id = params.id;

  const headerList = headers();
  const type = headerList.get('Content-Type');

  const cookieList = cookies();
  const coo2 = cookieList.get('Cookie_2')?.value;

  //logic delete post
  // redirect('/blog');

  return NextResponse.json({id, type, coo2});
};

export async function GET(
  req: Request,
  { params }: { params: { id: string }},
) {
  const id = params.id;
  const currentPost = posts.find(post => post.id === +id);


  return NextResponse.json(currentPost);
};