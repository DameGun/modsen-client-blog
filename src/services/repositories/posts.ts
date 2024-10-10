import type { PostType } from '@/types/post';
import { mapPostData } from '@/utils/mappings';

import { databaseInstance } from '../database';

export class PostsRepository {
  static getPosts(limit?: number) {
    let data = databaseInstance.posts;

    if (limit) data = data.slice(0, 4);
    const posts: PostType[] = data.map((post) => mapPostData(post));

    return posts;
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
}
