'use client';

import { getPostsBySearch } from "@/services/getPosts";
import { useAppDispatch } from "@/services/hooks";
import { FormEventHandler, useState } from "react";
import * as postsAction from '../features/posts';

export const PostSearch = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(postsAction.searchPosts(search.trim()));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};