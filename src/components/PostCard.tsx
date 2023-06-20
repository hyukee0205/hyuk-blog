import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = {post: Post};

export default function PostCard({
  post: {title, description, date, category, path}
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='rounded-md overflow-hidden shadow-md hover:shadow-xl'>
        <Image
          className='w-full h-1/5 max-h-[500px]'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className='flex flex-col px-5 py-4 bg-white dark:bg-darkSecond'>
          <p className='text-sm mb-1 text-lightSub dark:text-darkSub'>{category}</p>
          <h3 className='text-xl font-semibold mb-1'>{title}</h3>
          <p className='w-full truncate mb-6'>{description}</p>
          <time className='text-sm text-lightSub dark:text-darkSub'>{date.toString()}</time>
        </div>
      </article>
    </Link>
  );
}

