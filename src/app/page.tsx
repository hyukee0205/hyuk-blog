import FeaturePosts from '@/components/FeaturePosts';
import FilterablePosts from '@/components/FilterablePosts';
import SlidePosts from '@/components/SlidePosts';
import { getAllPosts } from '@/service/posts';

export default async function HomePage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <>
     <FilterablePosts posts={posts} categories={categories} />
    </>
  );
}
