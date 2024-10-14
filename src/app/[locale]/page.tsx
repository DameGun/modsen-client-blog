import { getTranslations } from 'next-intl/server';

import { Post } from '@/components/containers/Post';
import { RevealComponent } from '@/components/containers/RevealComponent';
import { DynamicComponents } from '@/constants/dynamic';
import { FeaturedPostsNames, PostVariant } from '@/constants/post';
import { PostsRepository } from '@/services/repositories/posts';
import type { MetadataWithLocaleProps } from '@/types/i18n';

export async function generateMetadata({ params: { locale } }: MetadataWithLocaleProps) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('home'),
  };
}

export default async function HomePage() {
  const featuredPost = PostsRepository.getFeaturedPost(FeaturedPostsNames.HomeBanner);

  return (
    <>
      <Post variant={PostVariant.Featured} post={featuredPost} data-testid='homeFeaturedPost' />
      {DynamicComponents.map(({ id, Component }) => (
        <RevealComponent key={id}>
          <Component />
        </RevealComponent>
      ))}
    </>
  );
}
