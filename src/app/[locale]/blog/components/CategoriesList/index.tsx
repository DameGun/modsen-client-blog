import { getTranslations } from 'next-intl/server';

import { CategoryCard } from '@/components/containers/CategoryCard';
import { ListOfCards } from '@/components/containers/ListOfCards';
import { CategoryVariant } from '@/constants/category';
import { CategoriesRepository } from '@/services/repositories/categories';

export async function CategoriesList() {
  const categories = CategoriesRepository.getCategories();
  const t = await getTranslations('Blog.Categories');

  return (
    <ListOfCards title={t('title')} titlePosition='start'>
      {categories.map(({ id, ...rest }) => (
        <CategoryCard key={id} category={{ id, ...rest }} variant={CategoryVariant.Extended} />
      ))}
    </ListOfCards>
  );
}
