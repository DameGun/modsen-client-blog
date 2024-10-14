import Image from 'next/image';

import { PostImageSize } from '@/constants/post';
import type { PostVariantProps } from '@/types/post';

import styles from './styles.module.scss';

export function DefaultPost({
  post: { image, category, title, description },
  handleClick,
  ...rest
}: PostVariantProps) {
  return (
    <div className={styles.defaultPostContainer} onClick={handleClick} {...rest}>
      <Image src={image} {...PostImageSize.default} alt='Post Image' />
      <div className={styles.defaultPostContentContainer}>
        <p className={styles.categoryName}>{category.name}</p>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
