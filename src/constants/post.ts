import type { PostImageSizeType } from '@/types/post';

export enum PostVariant {
  Minified = 'minified',
  Featured = 'featured',
  Extended = 'extended',
}

export const PostImageSize: Record<PostVariant.Extended | PostVariant.Featured, PostImageSizeType> =
  {
    [PostVariant.Featured]: { width: 669, height: 352 },
    [PostVariant.Extended]: { width: 490, height: 318 },
  };
