import { useTranslations } from 'next-intl';

import { PostsList } from '@/components/containers/PostsList';
import { AuthorsRepository } from '@/services/repositories/authors';
import { PostsRepository } from '@/services/repositories/posts';
import type { PaginationQueryParams } from '@/types/api';

import { AuthorPageHeader } from './components/AuthorPageHeader';

type AuthorPageProps = {
  params: {
    authorId: string;
  };
};

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
