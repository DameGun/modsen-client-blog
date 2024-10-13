import { FeaturedPost } from '@/components/containers/FeaturedPost';
import { RevealComponent } from '@/components/containers/RevealComponent';
import { DynamicComponents } from '@/constants/dynamic';
import { PostsRepository } from '@/services/repositories/posts';

export default async function HomePage() {
  const featuredPost = PostsRepository.getFeaturedPost('home-banner');

  return (
    <>
      <FeaturedPost post={featuredPost} />
      {DynamicComponents.map(({ id, Component }) => (
        <RevealComponent key={id}>
          <Component />
        </RevealComponent>
      ))}
    </>
  );
}
