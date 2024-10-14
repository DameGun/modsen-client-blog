'use client';

import { useCallback } from 'react';

import { PostVariant, PostVariantMap } from '@/constants/post';
import { Routes } from '@/constants/routes';
import { useRouter } from '@/i18n/routing';
import type { PropsWithTestId } from '@/types/helpers';
import type { PropsWithPost } from '@/types/post';

type PostProps = PropsWithPost &
  PropsWithTestId & {
    variant?: PostVariant;
  };

export function Post({ variant = PostVariant.Default, post, ...rest }: PostProps) {
  const router = useRouter();

  const handleClick = useCallback(() => {
    const { author, id } = post;
    router.push(Routes.Post(author.id, id));
  }, [post, router]);

  return PostVariantMap[variant]({ post, handleClick, ...rest });
}
