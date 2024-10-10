'use client';

import { useCallback } from 'react';

import { PostVariant } from '@/constants/post';
import { Routes } from '@/constants/routes';
import { useRouter } from '@/i18n/routing';
import type { PropsWithPost } from '@/types/post';

import { DefaultPost } from './DefaultPost';
import { ExtendedPost } from './ExtendedPost';
import { FeaturedPost } from './FeaturedPost';
import { MinifiedPost } from './MinifiedPost';

type PostProps = PropsWithPost & {
  variant?: PostVariant;
};

export function Post({ variant = PostVariant.Default, post }: PostProps) {
  const router = useRouter();

  const handlePostClick = useCallback(() => {
    const { author, id } = post;
    router.push(Routes.Post(author.id, id));
  }, [post, router]);

  switch (variant) {
    case PostVariant.Extended: {
      return <ExtendedPost post={post} handleClick={handlePostClick} />;
    }
    case PostVariant.Minified: {
      return <MinifiedPost post={post} handleClick={handlePostClick} />;
    }
    case PostVariant.Featured: {
      return <FeaturedPost post={post} handleClick={handlePostClick} />;
    }
    default: {
      return <DefaultPost post={post} handleClick={handlePostClick} />;
    }
  }
}
