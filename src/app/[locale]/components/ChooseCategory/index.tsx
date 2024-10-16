import { getTranslations } from 'next-intl/server';

import { CategoryCard } from '@/components/containers/CategoryCard';
import { ListOfCards } from '@/components/containers/ListOfCards';
import { CategoryVariant } from '@/constants/category';
import { CategoriesRepository } from '@/services/repositories/categories';

export default async function ChooseCategory() {
  const categories = CategoriesRepository.getCategories();
  const t = await getTranslations('Home.Categories');

  return (
    <ListOfCards title={t('title')}>
      {categories.map(({ id, ...rest }) => (
        <CategoryCard key={id} category={{ id, ...rest }} variant={CategoryVariant.Extended} />
      ))}
    </ListOfCards>
  );
}
