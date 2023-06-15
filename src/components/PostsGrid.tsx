import { Post } from '@/service/posts';
import PostCard from './PostCard';

type Props = {
  posts: Post[]
};

export default function PostsGrid({posts}: Props) {
  return (
    <ul className='grid gap-5 grid-cols-1 sm:grid-cols-2'>
      {posts.map((post, index) => (
        <li key={index}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

