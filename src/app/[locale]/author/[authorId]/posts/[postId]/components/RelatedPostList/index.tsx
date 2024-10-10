import { Post } from '@/components/containers/Post';
import { POSTS_LENGTH_LIMIT_RELATED, PostVariant } from '@/constants/post';
import { PostsRepository } from '@/services/repositories/posts';

import styles from './styles.module.scss';

type RelatedPostsProps = {
  postId: string;
  categoryId: number;
};

export function RelatedPostList({ postId, categoryId }: RelatedPostsProps) {
  const relatedPosts = PostsRepository.getPostsByCategoryId(
    postId,
    categoryId,
    POSTS_LENGTH_LIMIT_RELATED
  );

  return (
    <section className={styles.relatedPostsContainer}>
      <h2>What to read next</h2>
      <div className={styles.relatedPostsList}>
        {relatedPosts.map(({ id, ...rest }) => (
          <Post key={id} variant={PostVariant.Related} post={{ id, ...rest }} />
        ))}
      </div>
    </section>
  );
}
