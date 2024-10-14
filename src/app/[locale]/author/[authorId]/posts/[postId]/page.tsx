import { getTranslations } from 'next-intl/server';

import JoinNow from '@/components/containers/JoinNow';
import { PostsRepository } from '@/services/repositories/posts';
import type { MetadataWithLocaleProps } from '@/types/i18n';

import { BlogPostContent } from './components/BlogPostContent';
import { BlogPostHeader } from './components/BlogPostHeader';
import { BlogPostImage } from './components/BlogPostImage';
import { RelatedPostList } from './components/RelatedPostList';
import styles from './styles.module.scss';

type BlogPostProps = MetadataWithLocaleProps & {
  params: {
    postId: string;
  };
};

export async function generateMetadata({ params: { locale, postId } }: BlogPostProps) {
  const {
    title,
    author: { name },
  } = PostsRepository.getPostById(postId);
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('post', { title, name }),
  };
}

export default function BlogPost({ params: { postId } }: BlogPostProps) {
  const { id, content, image, category, ...rest } = PostsRepository.getPostById(postId);

  return (
    <section className={styles.blogPostContainer}>
      <BlogPostHeader {...rest} category={category} />
      <BlogPostImage image={image} />
      <BlogPostContent content={content} />
      <RelatedPostList postId={id} categoryId={category.id} />
      <JoinNow />
    </section>
  );
}
