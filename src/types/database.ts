import type { AuthorDTO } from './author';
import type { Category, Tag } from './identifiers';
import type { PostDTO } from './post';
import type { ReviewDTO } from './review';

type Database = {
  tags: Tag[];
  categories: Category[];
  posts: PostDTO[];
  authors: AuthorDTO[];
  reviews: ReviewDTO[];
};

export type { Database };
