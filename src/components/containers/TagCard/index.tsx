'use client';

import { useCallback } from 'react';

import cn from 'classnames';

import { Routes } from '@/constants/routes';
import { SearchParamsEnum } from '@/constants/search';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';
import { useRouter } from '@/i18n/routing';
import type { Tag } from '@/types/identifiers';

import styles from './styles.module.scss';

type TagCardProps = {
  tag: Tag;
  isSelected?: boolean;
};

export function TagCard({ tag: { name }, isSelected = false }: TagCardProps) {
  const router = useRouter();
  const [updateParams, searchParams] = useUpdateSearchParams();

  const createQueryString = useCallback(() => {
    const previousTags = searchParams.get(SearchParamsEnum.tagsNames);

    const createNewTags = () => {
      const mappedPreviousTags = previousTags ? previousTags.split(',') : [];

      if (isSelected) {
        return mappedPreviousTags.filter((tagName) => tagName !== name);
      } else {
        return [...mappedPreviousTags, name];
      }
    };

    const newTags = createNewTags();

    return newTags.length > 0
      ? updateParams({
          updateParams: { tagsNames: newTags.toString() },
          deleteParams: [SearchParamsEnum.keyword],
        }).queryString
      : updateParams({ deleteParams: [SearchParamsEnum.tagsNames, SearchParamsEnum.keyword] })
          .queryString;
  }, [updateParams, searchParams, isSelected, name]);

  const handleClick = () => {
    router.push(Routes.Search + '?' + createQueryString(), { scroll: false });
  };

  return (
    <button
      className={cn(styles.tagCard, { [styles.isSelected]: isSelected })}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
