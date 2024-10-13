import { POSTS_LENGTH_LIMIT } from '@/constants/post';
import type { PaginationMetadataExtended, PaginationQueryParams } from '@/types/api';

export const getPaginationMetadata = <T>(
  length: number,
  { limit = POSTS_LENGTH_LIMIT, page = 0 }: PaginationQueryParams = {}
): PaginationMetadataExtended<T> => {
  const totalCount = length;
  const startIndex = page * limit;
  const endIndex = startIndex + limit;

  return {
    totalCount,
    page,
    perPage: limit,
    pageCount: Math.floor(totalCount / limit),
    hasMore: endIndex < totalCount - 1,
    startIndex,
    endIndex,
  };
};
