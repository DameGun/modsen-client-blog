import { POSTS_LENGTH_LIMIT } from '@/constants/post';
import type { PaginationMetadata, PaginationQueryParams } from '@/types/api';
import type { PostType } from '@/types/post';
import { mapPostData } from '@/utils/mappings';

import { databaseInstance } from '../database';

export class PostsRepository {
  static getPosts({ limit = POSTS_LENGTH_LIMIT, page = 0 }: PaginationQueryParams = {}) {
    const data = databaseInstance.posts;

    const totalCount = data.length;
    const startIndex = page * limit;
    const endIndex = startIndex + limit;

    const posts: PostType[] = data.slice(startIndex, endIndex).map((post) => mapPostData(post));
    const response: PaginationMetadata<PostType> = {
      totalCount,
      page,
      data: posts,
      perPage: limit,
      pageCount: Math.floor(totalCount / limit),
      hasMore: endIndex < totalCount - 1,
    };

    return response;
  }

  static getPostById(postId: string) {
    const data = databaseInstance.posts.find(({ id }) => postId === id)!;
    const post: PostType = mapPostData(data);

    return post;
  }

  static getPostsByAuthorId(id: string) {
    const data = databaseInstance.posts.filter(({ authorId }) => authorId === id)!;
    const posts: PostType[] = data.map((post) => mapPostData(post));

    return posts;
  }

  static getFeaturedPost(page: string) {
    const data = databaseInstance.posts.find(({ featuredOnPage }) => featuredOnPage === page)!;
    const post: PostType = mapPostData(data);

    return post;
  }

  static getPostsByCategoryId(relatedPostId: string, searchCategoryId: number, limit?: number) {
    const data = databaseInstance.posts
      .filter(({ id, categoryId }) => categoryId === searchCategoryId && id !== relatedPostId)
      .slice(0, limit);
    const posts: PostType[] = data.map((post) => mapPostData(post));

    return posts;
  }
}
