import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { Routes } from '@/constants/routes';
import { Link } from '@/i18n/routing';
import extendsVariables from '@/styles/abstracts/extends.module.scss';
import type { PropsWithPost } from '@/types/post';

import styles from './styles.module.scss';

export function FeaturedPost({
  post: { id, category, title, author, createdAt, description, image },
}: PropsWithPost) {
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
          <p className={extendsVariables.body1}>
            {t('info')}&nbsp;
            <Link href={Routes.Author(id)} className={styles.authorName}>
              {author.name}
            </Link>
            &nbsp; | {createdAt}
          </p>
        </span>
        <p className={extendsVariables.body1}>{description}</p>
        <Button>{t('Featured.button')}</Button>
      </div>
    </section>
  );
}
