'use client';
import { Post } from '@/service/posts';
import { useState } from 'react';
import PostsGrid from './PostsGrid';
import Categories from './Categories';

type Props = {
  posts: Post[];
  categories: string[];
}
const AllPosts = 'All'

export default function FilterablePosts({posts, categories}: Props) {
  const [selected, setSelected] = useState(AllPosts);
  const filtered = 
  selected === AllPosts ? posts : posts.filter((post) => post.category === selected);

  return (
    <section className='flex flex-col mt-10'>
      <Categories
        categories={[AllPosts, ...categories]}
        selected={selected}
        onClick={(selected) => setSelected(selected)}
      />
      <PostsGrid posts={filtered} />

    </section>
  );
}

