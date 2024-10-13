import type { PostImageSizeType } from '@/types/post';

export enum PostVariant {
  Minified = 'minified',
  Default = 'default',
  Extended = 'extended',
  Featured = 'featured',
}

export const PostImageSize: Record<PostVariant.Extended | PostVariant.Default, PostImageSizeType> =
  {
    [PostVariant.Extended]: { width: 669, height: 352 },
    [PostVariant.Default]: { width: 490, height: 318 },
  };

export enum FeaturedPostsNames {
  HomeBanner = 'home-banner',
  HomeList = 'home-list',
  Blog = 'blog',
}

export const POSTS_LENGTH_LIMIT = 4;
export const POSTS_LENGTH_LIMIT_EXTENDED = 5;
