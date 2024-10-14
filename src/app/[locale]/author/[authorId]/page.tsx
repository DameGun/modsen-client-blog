import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { PostsList } from '@/components/containers/PostsList';
import { AuthorsRepository } from '@/services/repositories/authors';
import { PostsRepository } from '@/services/repositories/posts';
import type { PaginationQueryParams } from '@/types/api';
import type { MetadataWithLocaleProps } from '@/types/i18n';

import { AuthorPageHeader } from './components/AuthorPageHeader';

type AuthorPageProps = MetadataWithLocaleProps & {
  params: {
    authorId: string;
  };
};

export async function generateMetadata({ params: { locale, authorId } }: AuthorPageProps) {
  const { name } = AuthorsRepository.getAuthorById(authorId);
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('author', { name }),
  };
}

export default function AuthorPage({ params: { authorId } }: AuthorPageProps) {
  const author = AuthorsRepository.getAuthorById(authorId);
  const t = useTranslations('Author');

  const fetchAuthorPosts = async (params?: PaginationQueryParams) => {
    'use server';
    return PostsRepository.getPostsByAuthorId(author.id, params);
  };

  return (
    <>
      <AuthorPageHeader author={author} />
      <PostsList title={t('posts')} fetch={fetchAuthorPosts} />
    </>
  );
}
