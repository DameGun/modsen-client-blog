import { getTranslations } from 'next-intl/server';

import { AuthorsRepository } from '@/services/repositories/authors';

import { AuthorCard } from '../AuthorCard';
import { ListOfCards } from '../ListOfCards';

export default async function ListOfAuthors() {
  const authors = AuthorsRepository.getAuthors();
  const t = await getTranslations('Home.Authors');

  return (
    <ListOfCards title={t('title')}>
      {authors.map(({ id, ...rest }) => (
        <AuthorCard key={id} author={{ id, ...rest }} />
      ))}
    </ListOfCards>
  );
}
