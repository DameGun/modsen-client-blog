import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import extendsVariables from '@/styles/abstracts/extends.module.scss';
import type { PostVariantProps } from '@/types/post';

import styles from './styles.module.scss';

import { PostInfo } from '../PostInfo';

export function FeaturedPost({
  post: { category, title, author, createdAt, description, image },
  handleClick,
}: PostVariantProps) {
  const t = useTranslations('Post');

  return (
    <section className={styles.featurePostContainer}>
      <div className={styles.postImage}>
        <Image src={image} fill alt='Featured post image' />
      </div>
      <div className={styles.featuredPost}>
        <h4 className={styles.category}>
          {t('Featured.category')}&nbsp;
          <span className={styles.categoryName}>{category.name}</span>
        </h4>
        <h1 className={extendsVariables.display}>{title}</h1>
        <span className={styles.postInfo}>
          <PostInfo author={author} createdAt={createdAt} />
        </span>
        <p className={extendsVariables.body1}>{description}</p>
        <Button onClick={handleClick}>{t('Featured.button')}</Button>
      </div>
    </section>
  );
}
