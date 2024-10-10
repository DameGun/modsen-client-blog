import { getTranslations } from 'next-intl/server';

import { AuthorCard } from '@/components/containers/AuthorCard';
import { ListOfCards } from '@/components/containers/ListOfCards';
import { getAuthors } from '@/services/api';

export default async function ListOfAuthors() {
  const authors = await getAuthors();
  const t = await getTranslations('Home.Authors');

  return (
    <ListOfCards title={t('title')}>
      {authors.map(({ id, ...rest }) => (
        <AuthorCard key={id} author={{ id, ...rest }} />
      ))}
    </ListOfCards>
  );
}
