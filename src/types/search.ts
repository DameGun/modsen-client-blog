import type { SearchParamsEnum } from '@/constants/search';

type SearchParams = {
  [key in keyof typeof SearchParamsEnum]+?: string;
};

export type { SearchParams };
