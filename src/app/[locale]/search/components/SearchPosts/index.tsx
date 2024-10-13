import { useMemo } from 'react';

import { useTranslations } from 'next-intl';

import { PostsList } from '@/components/containers/PostsList';
import { PostsRepository } from '@/services/repositories/posts';
import type { PaginationQueryParams } from '@/types/api';
import type { SearchParams } from '@/types/search';
import { generatePostsEmptyFallbackText } from '@/utils/search';

export function SearchPosts(searchParams: SearchParams) {
  const t = useTranslations('Search.NotFound');
  const fetchPosts = async (paginationParams?: PaginationQueryParams) => {
    'use server';
    return PostsRepository.getPostsWithSearchParams(paginationParams, searchParams);
  };

  const emptyFallbackText = useMemo(() => {
    return generatePostsEmptyFallbackText(t, searchParams);
  }, [searchParams, t]);

  return <PostsList fetch={fetchPosts} emptyFallbackText={emptyFallbackText} />;
}
