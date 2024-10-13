import { Post } from '@/components/containers/Post';
import { RevealComponent } from '@/components/containers/RevealComponent';
import { DynamicComponents } from '@/constants/dynamic';
import { FeaturedPostsNames, PostVariant } from '@/constants/post';
import { PostsRepository } from '@/services/repositories/posts';

export default async function HomePage() {
  const featuredPost = PostsRepository.getFeaturedPost(FeaturedPostsNames.HomeBanner);

  return (
    <>
      <Post variant={PostVariant.Featured} post={featuredPost} />
      {DynamicComponents.map(({ id, Component }) => (
        <RevealComponent key={id}>
          <Component />
        </RevealComponent>
      ))}
    </>
  );
}
