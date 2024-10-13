import { DefaultPost } from '@/components/containers/Post/DefaultPost';
import { ExtendedPost } from '@/components/containers/Post/ExtendedPost';
import { FeaturedPost } from '@/components/containers/Post/FeaturedPost';
import { MinifiedPost } from '@/components/containers/Post/MinifiedPost';
import { RelatedPost } from '@/components/containers/Post/RelatedPost';
import type { PostImageSizeType, PostVariantProps } from '@/types/post';

export enum PostVariant {
  Minified = 'minified',
  Default = 'default',
  Extended = 'extended',
  Featured = 'featured',
  Related = 'related',
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
export const POSTS_LENGTH_LIMIT_RELATED = 3;

export const PostVariantMap = {
  [PostVariant.Default]: (props: PostVariantProps) => DefaultPost(props),
  [PostVariant.Extended]: (props: PostVariantProps) => ExtendedPost(props),
  [PostVariant.Featured]: (props: PostVariantProps) => FeaturedPost(props),
  [PostVariant.Minified]: (props: PostVariantProps) => MinifiedPost(props),
  [PostVariant.Related]: (props: PostVariantProps) => RelatedPost(props),
} as const;
