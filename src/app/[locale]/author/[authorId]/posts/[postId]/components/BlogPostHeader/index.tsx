import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { CategoryCard } from '@/components/containers/CategoryCard';
import { CategoryVariant } from '@/constants/category';
import { Routes } from '@/constants/routes';
import { Link } from '@/i18n/routing';
import extendsVariables from '@/styles/abstracts/extends.module.scss';
import variables from '@/styles/abstracts/variables.module.scss';
import type { PostType } from '@/types/post';
import { parseStylesVariableAsNumber } from '@/utils/styles';

import styles from './styles.module.scss';

type BlogPostHeaderProps = Pick<PostType, 'id' | 'author' | 'title' | 'createdAt' | 'category'>;

export function BlogPostHeader({ id, author, title, createdAt, category }: BlogPostHeaderProps) {
  const t = useTranslations('BlogPost');

  return (
    <div className={styles.blogPostHeaderContainer}>
      <div className={styles.authorInfo}>
        <Image
          src={author.image}
          width={parseStylesVariableAsNumber(variables.imageSizeLg)}
          height={parseStylesVariableAsNumber(variables.imageSizeLg)}
          alt='Author Avatar'
        />
        <span>
          <Link href={Routes.Author(id)}>
            <h3 className={styles.authorName}>{author.name}</h3>
          </Link>
          <p className={extendsVariables.body1Gray}>{t('createdAt', { createdAt })}</p>
        </span>
      </div>
      <h1>{title}</h1>
      <CategoryCard variant={CategoryVariant.Label} category={category} />
    </div>
  );
}
