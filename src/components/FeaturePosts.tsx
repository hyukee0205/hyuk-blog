import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturePosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className='mt-20'>
<<<<<<< HEAD
      <h2 className='text-2xl font-semibold my-2'>Featured pr</h2>
=======
      <h2 className='text-2xl font-semibold my-2'>Featured</h2>
>>>>>>> release
      <PostsGrid posts={posts} />
    </section>
  );
}

