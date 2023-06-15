import { getAllPosts, getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturePosts() {
  const posts = await getAllPosts();
  return (
    <section className='mt-20'>
      <h2 className='text-2xl font-semibold my-2'>All</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

