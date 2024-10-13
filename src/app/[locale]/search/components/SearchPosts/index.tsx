import { useMemo } from 'react';

import { PostsList } from '@/components/containers/PostsList';
import { PostsRepository } from '@/services/repositories/posts';
import type { PaginationQueryParams } from '@/types/api';
import type { SearchParams } from '@/types/search';
import { generatePostsEmptyFallbackText } from '@/utils/search';

export function SearchPosts(searchParams: SearchParams) {
  const fetchPosts = async (paginationParams?: PaginationQueryParams) => {
    'use server';
    return PostsRepository.getPostsWithSearchParams(paginationParams, searchParams);
  };

  const emptyFallbackText = useMemo(() => {
    return generatePostsEmptyFallbackText(searchParams);
  }, [searchParams]);

  return <PostsList fetch={fetchPosts} emptyFallbackText={emptyFallbackText} />;
}
