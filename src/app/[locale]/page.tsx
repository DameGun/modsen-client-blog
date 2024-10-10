import { FeaturedPost } from '@/components/containers/FeaturedPost';
import { RevealComponent } from '@/components/containers/RevealComponent';
import { DynamicComponents } from '@/constants/dynamic';
import { getFeaturedPost } from '@/services/api';

export default async function HomePage() {
  const featuredPost = await getFeaturedPost('home-banner');

  return (
    <>
      <FeaturedPost post={featuredPost} />
      {DynamicComponents.map((Component, index) => (
        <RevealComponent key={index}>
          <Component />
        </RevealComponent>
      ))}
    </>
  );
}
