import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Socials } from '@/components/containers';
import type { Author } from '@/types/author';

import styles from './styles.module.scss';

type AuthorPageProps = {
  author: Author;
};

export function AuthorPageHeader({ author: { image, name, bio, socials } }: AuthorPageProps) {
  const t = useTranslations('Author');

  return (
    <section className={styles.authorPageHeaderWrapper}>
      <div className={styles.authorPageHeaderContainer}>
        <div className={styles.imageContainer}>
          <Image src={image} fill alt='Author Avatar' />
        </div>
        <div className={styles.authorInfo}>
          <h1>{t('title', { name })}</h1>
          <p>{bio}</p>
          <Socials {...socials} />
        </div>
      </div>
    </section>
  );
}
