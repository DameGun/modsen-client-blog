'use client';

import { useCallback, useEffect, useState } from 'react';

import cn from 'classnames';
import { useTranslations } from 'next-intl';

import { Post } from '@/components/containers/Post';
import { POSTS_LENGTH_LIMIT_EXTENDED } from '@/constants/post';
import type { PaginationMetadata, PaginationQueryParams } from '@/types/api';
import type { PostType } from '@/types/post';

import styles from './styles.module.scss';

type PostsListProps = {
  title?: string;
  fetch(params?: PaginationQueryParams): Promise<PaginationMetadata<PostType>>;
  emptyFallbackText?: string;
};

export function PostsList({ title, fetch, emptyFallbackText }: PostsListProps) {
  const [page, setPage] = useState(0);
  const [response, setResponse] = useState<PaginationMetadata<PostType>>();
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations('Pagination');

  const getPosts = useCallback(
    async (currentPage: number) => {
      setIsLoading(true);
      const res = await fetch({ limit: POSTS_LENGTH_LIMIT_EXTENDED, page: currentPage });
      setResponse(res);
      setIsLoading(false);
    },
    [fetch]
  );

  const handleNext = () => setPage((prev) => (response?.hasMore ? prev + 1 : prev));
  const handlePrev = () => setPage((prev) => (response?.page !== 0 ? prev - 1 : prev));

  useEffect(() => {
    getPosts(page);
  }, [page, getPosts]);

  return (
    <section className={styles.postsListContainer}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {response && response.data.length > 0 ? (
        <>
          <div>
            {response?.data.map(({ id, ...rest }) => <Post key={id} post={{ id, ...rest }} />)}
          </div>
          <div className={styles.paginationButtonsContainer}>
            <button
              className={cn(styles.paginationButton, { [styles.isDisabled]: response?.page === 0 })}
              onClick={handlePrev}
            >
              <h4>{t('prevButton')}</h4>
            </button>
            <button
              className={cn(styles.paginationButton, { [styles.isDisabled]: !response?.hasMore })}
              onClick={handleNext}
            >
              <h4>{t('nextButton')}</h4>
            </button>
          </div>
        </>
      ) : (
        !isLoading && <h4>{emptyFallbackText ?? 'No posts found.'}</h4>
      )}
    </section>
  );
}
