import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';
import { Metadata } from 'next';


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

  return (
    <article className='mt-12'>
      <PostContent post={post} />
    </article>
  );
}

