type ParamsWithId = {
  params: {
    id: string;
  };
};

type PaginationQueryParams = Partial<{
  limit: number;
  page: number;
}>;

type PaginationMetadata<T> = {
  page: number;
  totalCount: number;
  pageCount: number;
  perPage: number;
  hasMore: boolean;
  data: T[];
};

type PaginationMetadataExtended<T> = Omit<PaginationMetadata<T>, 'data'> & {
  startIndex: number;
  endIndex: number;
};

export type { PaginationMetadata, PaginationMetadataExtended, PaginationQueryParams, ParamsWithId };
