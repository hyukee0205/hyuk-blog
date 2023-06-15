import { getAllPosts, getFeaturedPosts } from '@/service/posts';
import MultiCarousel from './MultiCarousel';
import PostCard from './PostCard';


export default async function SlidePosts() {
  const posts = await getAllPosts();

  return (
    <section className='my-10'>
      <h2 className='text-4xl font-semibold'>Featured</h2>
      <MultiCarousel>
        {posts.map((post, index) => (
          <PostCard key={index} post={post}/>
        ))}
      </MultiCarousel>
    </section>
  );
}

