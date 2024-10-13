import type { useTranslations } from 'next-intl';

import { SearchParamsEmptyFallback } from '@/constants/search';
import type { Article } from '@/types/content';
import type { PostDTO } from '@/types/post';
import type { SearchParams } from '@/types/search';

export function fullTextSearch(data: PostDTO[], keyword: string) {
  const lowerCaseKeyword = keyword.toLowerCase();

  return data.filter(
    ({ title, description, content }) =>
      title.toLowerCase().includes(lowerCaseKeyword) ||
      description.toLowerCase().includes(lowerCaseKeyword) ||
      searchInContent(content, lowerCaseKeyword)
  );
}

function searchInContent(content: Article[], keyword: string) {
  return content.some(
    ({ title, paragraph }) =>
      title.toLowerCase().includes(keyword) || paragraph.toLowerCase().includes(keyword)
  );
}

export function generatePostsEmptyFallbackText(
  intl: ReturnType<typeof useTranslations>,
  params: SearchParams
) {
  let index = 0;
  let resString = intl('title');
  let param: keyof typeof params;

  for (param in params) {
    if (param in params) {
      const value = SearchParamsEmptyFallback[param](intl(param), params[param]);
      resString += index === 0 ? `${intl('with')} ${value} ` : `${intl('and')} ${value} `;
      index++;
    }
  }

  resString = resString.trim() + '...';

  return resString;
}
