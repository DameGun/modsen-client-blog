import type { PaginationMetadata, PaginationQueryParams } from '@/types/api';
import type { PostType } from '@/types/post';
import type { SearchParams } from '@/types/search';
import { mapPostData } from '@/utils/mappings';
import { getPaginationMetadata } from '@/utils/pagination';
import { fullTextSearch } from '@/utils/search';

import { CategoriesRepository } from './categories';
import { TagsRepository } from './tags';

import { databaseInstance } from '../database';

export class PostsRepository {
  static getPosts(params?: PaginationQueryParams) {
    const data = databaseInstance.posts;

    const { startIndex, endIndex, ...metadata } = getPaginationMetadata<PostType>(
      data.length,
      params
    );

    const posts: PostType[] = data.slice(startIndex, endIndex).map((post) => mapPostData(post));
    const response: PaginationMetadata<PostType> = {
      ...metadata,
      data: posts,
    };

    return response;
  }

  static getPostById(postId: string) {
    const data = databaseInstance.posts.find(({ id }) => postId === id)!;
    const post: PostType = mapPostData(data);

    return post;
  }

  static getPostsByAuthorId(id: string, params?: PaginationQueryParams) {
    const data = databaseInstance.posts.filter(({ authorId }) => authorId === id)!;

    const { startIndex, endIndex, ...metadata } = getPaginationMetadata<PostType>(
      data.length,
      params
    );

    const posts: PostType[] = data.slice(startIndex, endIndex).map((post) => mapPostData(post));
    const response: PaginationMetadata<PostType> = {
      ...metadata,
      data: posts,
    };

    return response;
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

  static getPostsWithSearchParams(params?: PaginationQueryParams, searchParams?: SearchParams) {
    let data = databaseInstance.posts;

    if (searchParams) {
      const { category, keyword, tagsNames } = searchParams;

      if (category) {
        const categoryObj = CategoriesRepository.getCategoryByName(category);
        data = data.filter(({ categoryId }) => categoryId === categoryObj.id);
      }

      if (keyword) {
        data = fullTextSearch(data, keyword);
      }

      if (tagsNames) {
        const tags = TagsRepository.getTagsByNames(tagsNames.split(',')).map(({ id }) => id);
        data = data.filter(({ tagsIds }) => tagsIds.some((id) => tags.includes(id)));
      }
    }

    const { startIndex, endIndex, ...metadata } = getPaginationMetadata<PostType>(
      data.length,
      params
    );

    const posts: PostType[] = data.slice(startIndex, endIndex).map((post) => mapPostData(post));
    const response: PaginationMetadata<PostType> = {
      ...metadata,
      data: posts,
    };

    return response;
  }
}
