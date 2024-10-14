'use client';

import type { KeyboardEvent } from 'react';
import { useEffect, useRef } from 'react';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { SearchParamsEnum } from '@/constants/search';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';
import { usePathname, useRouter } from '@/i18n/routing';

import styles from './styles.module.scss';

export function SearchInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const t = useTranslations('Search.Input');

  const [updateParams, searchParams] = useUpdateSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const keyword = searchParams.get(SearchParamsEnum.keyword) as string | undefined;

  const handleSearch = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      const newParamsObject =
        value === ''
          ? {
              deleteParams: [SearchParamsEnum.tagsNames, SearchParamsEnum.keyword],
            }
          : {
              updateParams: { keyword: value },
              deleteParams: [SearchParamsEnum.tagsNames],
            };

      const { queryString } = updateParams(newParamsObject);

      router.push(pathname + '?' + queryString, { scroll: false });
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  useEffect(() => {
    const currentRef = inputRef.current;

    if (searchParams.has(SearchParamsEnum.tagsNames) && currentRef && currentRef.value !== '') {
      currentRef.value = '';
    }
  }, [searchParams]);

  return (
    <span className={styles.searchInputContainer}>
      <input
        ref={inputRef}
        placeholder={t('placeholder')}
        defaultValue={keyword}
        onKeyDown={handleKeyDown}
        data-testid='searchInput'
      />
      <Button onClick={handleSearch}>{t('title')}</Button>
    </span>
  );
}
