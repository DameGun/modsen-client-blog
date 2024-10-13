import type { Author } from './author';
import type { Article } from './content';
import type { Category, Tag } from './identifiers';

type PostDTO = {
  id: string;
  title: string;
  authorId: string;
  createdAt: string;
  categoryId: number;
  image: string;
  tagsIds: number[];
  description: string;
  content: Article[];
  featuredOnPage?: string;
};

type PostType = Omit<PostDTO, 'categoryId' | 'tagsIds' | 'authorId'> & {
  author: Author;
  category: Category;
  tags: Tag[];
};

type PropsWithPost = {
  post: PostType;
};

type PostVariantProps = PropsWithPost & {
  handleClick: VoidFunction;
};

type PostImageSizeType = {
  width: number;
  height: number;
};

type FeaturedPostParams = {
  params: {
    page: string;
  };
};

export type {
  FeaturedPostParams,
  PostDTO,
  PostImageSizeType,
  PostType,
  PostVariantProps,
  PropsWithPost,
};
