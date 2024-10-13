import { useTranslations } from 'next-intl';

import { CategoryCard } from '@/components/containers/CategoryCard';
import { CategoryVariant } from '@/constants/category';
import { CategoriesRepository } from '@/services/repositories/categories';
import type { SearchParams } from '@/types/search';

import styles from './styles.module.scss';

type CategoriesListParams = Pick<SearchParams, 'category'>;

export function CategoriesList({ category }: CategoriesListParams) {
  const categories = CategoriesRepository.getCategories();
  const t = useTranslations('Search.Categories');

  return (
    <div className={styles.categoriesListContainer}>
      <h2>{t('title')}</h2>
      {categories.map(({ id, name, ...rest }) => (
        <CategoryCard
          key={id}
          preventScrollOnClick
          variant={CategoryVariant.Minified}
          category={{ id, name, ...rest }}
          isSelected={name === category}
        />
      ))}
    </div>
  );
}
