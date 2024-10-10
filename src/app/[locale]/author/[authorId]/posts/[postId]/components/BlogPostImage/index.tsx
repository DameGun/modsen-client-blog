import Image from 'next/image';

import type { PostType } from '@/types/post';

import styles from './styles.module.scss';

type BlogPostImageProps = Pick<PostType, 'image'>;

export function BlogPostImage({ image }: BlogPostImageProps) {
  return (
    <span className={styles.blogPostImageContainer}>
      <Image src={image} fill alt='Post Image' />
    </span>
  );
}
