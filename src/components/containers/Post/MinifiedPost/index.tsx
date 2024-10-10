import type { PostVariantProps } from '@/types/post';

import styles from './styles.module.scss';

import { PostInfo } from '../PostInfo';

export function MinifiedPost({
  post: { author, createdAt, title },
  handleClick,
}: PostVariantProps) {
  return (
    <div className={styles.minifiedPostContainer} onClick={handleClick}>
      <PostInfo author={author} createdAt={createdAt} />
      <h3>{title}</h3>
    </div>
  );
}
