'use client';

import { useCallback, useEffect, useState } from 'react';

import cn from 'classnames';
import { useTranslations } from 'next-intl';

import { Post } from '@/components/containers/Post';
import { POSTS_LENGTH_LIMIT_EXTENDED } from '@/constants/post';
import { PostsRepository } from '@/services/repositories/posts';
import type { PaginationMetadata } from '@/types/api';
import type { PostType } from '@/types/post';

import styles from './styles.module.scss';

export function PostsList() {
  const [page, setPage] = useState(0);
  const [response, setResponse] = useState<PaginationMetadata<PostType>>();
  const t = useTranslations('Blog.Posts');

  const getPosts = useCallback((currentPage: number) => {
    const res = PostsRepository.getPosts({ limit: POSTS_LENGTH_LIMIT_EXTENDED, page: currentPage });
    console.log(res);
    setResponse(res);
  }, []);

  const handleNext = () => setPage((prev) => (response?.hasMore ? prev + 1 : prev));
  const handlePrev = () => setPage((prev) => (response?.page !== 0 ? prev - 1 : prev));

  useEffect(() => {
    getPosts(page);
  }, [page, getPosts]);

  return (
    <section className={styles.postsListContainer}>
      <h1 className={styles.title}>{t('title')}</h1>
      <div>{response?.data.map(({ id, ...rest }) => <Post key={id} post={{ id, ...rest }} />)}</div>
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
    </section>
  );
}
