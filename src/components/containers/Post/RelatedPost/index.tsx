import Image from 'next/image';

import { PostImageSize } from '@/constants/post';
import extendsVariables from '@/styles/abstracts/extends.module.scss';
import type { PostVariantProps } from '@/types/post';

import styles from './styles.module.scss';

import { PostInfo } from '../PostInfo';

export function RelatedPost({
  post: { image, title, createdAt, author, description },
  handleClick,
  ...rest
}: PostVariantProps) {
  return (
    <div className={styles.relatedPostContainer} onClick={handleClick} {...rest}>
      <Image src={image} {...PostImageSize.extended} alt='Post Image' />
      <PostInfo createdAt={createdAt} author={author} />
      <h3>{title}</h3>
      <p className={extendsVariables.body1Gray}>{description}</p>
    </div>
  );
}
