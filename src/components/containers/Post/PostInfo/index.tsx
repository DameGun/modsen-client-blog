'use client';

import type { MouseEvent } from 'react';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Routes } from '@/constants/routes';
import extendsVariables from '@/styles/abstracts/extends.module.scss';
import type { PostType } from '@/types/post';

type PostInfoProps = Pick<PostType, 'createdAt' | 'author'>;

export function PostInfo({ author, createdAt }: PostInfoProps) {
  const t = useTranslations('Post');

  const handleAuthorNameClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <p className={extendsVariables.label}>
      {t('info')}&nbsp;
      <Link href={Routes.Author(author.id)} onClick={handleAuthorNameClick}>
        {author.name}
      </Link>
      &nbsp;| {createdAt}
    </p>
  );
}
