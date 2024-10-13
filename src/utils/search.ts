import { getTranslations } from 'next-intl/server';

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

export async function generatePostsEmptyFallbackText(params: SearchParams) {
  const t = await getTranslations('Search.NotFound');
  let index = 0;
  let resString = t('title');
  let param: keyof typeof params;

  for (param in params) {
    if (param in params) {
      const value = SearchParamsEmptyFallback[param](t(param), params[param]);
      resString += index === 0 ? `${t('with')} ${value} ` : `${t('and')} ${value} `;
      index++;
    }
  }

  resString = resString.trim() + '...';

  return resString;
}
