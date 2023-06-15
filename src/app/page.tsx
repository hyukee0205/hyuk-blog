import FeaturePosts from '@/components/FeaturePosts';

export default function HomePage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <FeaturePosts />
    </>
  );
}
