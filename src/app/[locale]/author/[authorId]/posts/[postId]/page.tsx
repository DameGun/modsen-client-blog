import JoinNow from '@/components/containers/JoinNow';
import { PostsRepository } from '@/services/repositories/posts';

import { BlogPostContent } from './components/BlogPostContent';
import { BlogPostHeader } from './components/BlogPostHeader';
import { BlogPostImage } from './components/BlogPostImage';
import { RelatedPostList } from './components/RelatedPostList';
import styles from './styles.module.scss';

type BlogPostProps = {
  params: {
    postId: string;
  };
};

export default function BlogPost({ params: { postId } }: BlogPostProps) {
  const { id, content, image, category, ...rest } = PostsRepository.getPostById(postId);

  return (
    <section className={styles.blogPostContainer}>
      <BlogPostHeader {...rest} category={category} id={id} />
      <BlogPostImage image={image} />
      <BlogPostContent content={content} />
      <RelatedPostList postId={id} categoryId={category.id} />
      <JoinNow />
    </section>
  );
}
