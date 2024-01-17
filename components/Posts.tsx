'use client';

import { useAppDispatch, useAppSelector } from "@/services/hooks";
import Link from "next/link";
import { useEffect } from "react";
import * as postsAction from '../features/posts';

export const Posts = () => {
  const dispatch = useAppDispatch();
  const {
    posts,
    loading,
    hasError,
  } = useAppSelector(state => state.posts);

  useEffect(() => {
    dispatch(postsAction.clear());
    dispatch(postsAction.initPosts());
  }, [dispatch]);

  if (hasError) {
    throw new Error("Unable to fetch posts!");
  };

  return loading 
    ? (<h3>Loading...</h3>) 
    : (<ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>);
};