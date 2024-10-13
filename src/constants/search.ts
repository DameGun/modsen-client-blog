export enum SearchParamsEnum {
  category = 'category',
  keyword = 'keyword',
  tagsNames = 'tagsNames',
}

export const SearchParamsEmptyFallback = {
  [SearchParamsEnum.category]: (paramName: string, category?: string) =>
    `${paramName}: "${category}"`,
  [SearchParamsEnum.keyword]: (paramName: string, keyword?: string) => `${paramName}: "${keyword}"`,
  [SearchParamsEnum.tagsNames]: (paramName: string, tagsNames?: string) =>
    `${paramName}: "${tagsNames?.split(',').map((tagName) => `${tagName}`)}"`,
} as const;
