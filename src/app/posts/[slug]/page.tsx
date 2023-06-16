import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';
import { Metadata } from 'next';
import Image from 'next/image';


type Props = {
  params: {
    slug: string;
  };
};


export async function generateMetadata({
  params: {slug},
}: Props): Promise<Metadata> {
  const {title, description} = await getPostData(slug);
  return {
    title: title,
    description: description,
  }
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const {title, path} = post;

  return (
    <article className='mt-20 rounded-2xl overflow-hidden bg-gray-100 shadow-lg'>
      <Image 
        className='w-full h-1/5 max-h-[500px]'
        src={`/images/posts/${path}.png`} 
        alt={title}
        width={760}
        height={420}
      />
    <PostContent post={post} />
    </article>
  );
}

