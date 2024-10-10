'use client';

import type { MouseEvent } from 'react';

import cn from 'classnames';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { PostImageSize, PostVariant } from '@/constants/post';
import { Routes } from '@/constants/routes';
import { Link, useRouter } from '@/i18n/routing';
import extendsVariables from '@/styles/abstracts/extends.module.scss';
import type { PropsWithPost } from '@/types/post';

import styles from './styles.module.scss';

type PostProps = PropsWithPost & {
  variant?: PostVariant;
};

export function Post({
  variant = PostVariant.Extended,
  post: { id, image, author, createdAt, title, description },
}: PostProps) {
  const router = useRouter();
  const t = useTranslations('Post');

  const handlePostClick = () => {
    router.push(Routes.Post(author.id, id));
  };

  const handleAuthorNameClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <div
      className={cn(styles.postContainer, styles[variant])}
      onClick={variant !== PostVariant.Featured ? handlePostClick : undefined}
    >
      {variant !== PostVariant.Minified && (
        <Image src={image} {...PostImageSize[variant]} alt='Post Image' />
      )}
      <p className={extendsVariables.label}>
        {t('info')}&nbsp;
        <Link href={Routes.Author(author.id)} onClick={handleAuthorNameClick}>
          {author.name}
        </Link>
        &nbsp; | {createdAt}
      </p>
      <h3>{title}</h3>
      {variant !== PostVariant.Minified && (
        <p className={extendsVariables.body1Gray}>{description}</p>
      )}
      {variant === PostVariant.Featured && (
        <Button onClick={handlePostClick}>{t('Featured.button')}</Button>
      )}
    </div>
  );
}
