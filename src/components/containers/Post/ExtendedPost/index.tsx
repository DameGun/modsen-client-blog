import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/Button';
import { PostImageSize } from '@/constants/post';
import extendsVariables from '@/styles/abstracts/extends.module.scss';
import type { PostVariantProps } from '@/types/post';

import styles from './styles.module.scss';

import { PostInfo } from '../PostInfo';

export function ExtendedPost({
  post: { image, title, createdAt, author, description },
  handleClick,
  ...rest
}: PostVariantProps) {
  const t = useTranslations('Post.Featured');

  return (
    <div className={styles.extendedPostContainer} {...rest}>
      <Image src={image} {...PostImageSize.extended} alt='Post Image' />
      <PostInfo createdAt={createdAt} author={author} />
      <h3>{title}</h3>
      <p className={extendsVariables.body1Gray}>{description}</p>
      <Button onClick={handleClick}>{t('button')}</Button>
    </div>
  );
}
