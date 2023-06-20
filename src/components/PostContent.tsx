import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/posts';
import Image from 'next/image';



export default function PostContent({post}: {post: PostData}) {
  const {title, description, date, content, path} = post;

  return (
    <section className='flex flex-col p-4'>
      <h1 className='text-4xl font-bold mb-1'>{title}</h1>
      <div className='mb-5'>
        <p className='text-sm text-lightSub dark:text-darkSub'>{date.toString()}</p> 
      </div>
      <p className='text-xl border-b pb-10 mb-10'>{description}</p>
      <Image 
          className='w-full h-1/5 max-h-[500px] mb-8 rounded-2xl'
          src={`/images/posts/${path}.png`} 
          alt={title}
          width={760}
          height={420}
      />

      <MarkdownViewer content={content} />
    </section>
  );
}

