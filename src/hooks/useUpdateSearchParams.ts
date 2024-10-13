'use client';

import { useCallback } from 'react';

import type { ReadonlyURLSearchParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

type UpdateSearchParamsProps = Partial<{
  updateParams: Record<string, string>;
  deleteParams: string[];
}>;

type SearchParamsReturnType = {
  queryObject: URLSearchParams;
  queryString: string;
};

export function useUpdateSearchParams(): [
  (props: UpdateSearchParamsProps) => SearchParamsReturnType,
  ReadonlyURLSearchParams,
] {
  const searchParams = useSearchParams();

  const newQueryParams = useCallback(
    ({ updateParams, deleteParams }: UpdateSearchParamsProps) => {
      const params = new URLSearchParams(searchParams.toString());

      deleteParams?.forEach((param) => params.delete(param));

      if (updateParams) {
        for (const paramName in updateParams) {
          params.set(paramName, updateParams[paramName]);
        }
      }

      return { queryObject: params, queryString: params.toString() };
    },
    [searchParams]
  );

  return [newQueryParams, searchParams];
}
