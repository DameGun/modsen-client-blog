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

export type { PaginationMetadata, PaginationQueryParams, ParamsWithId };
