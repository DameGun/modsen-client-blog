import { AuthorsRepository } from '@/services/repositories/authors';
import { CategoriesRepository } from '@/services/repositories/categories';
import { TagsRepository } from '@/services/repositories/tags';
import type { PostDTO } from '@/types/post';

export function mapPostData(post: PostDTO) {
  const { authorId, categoryId, tagsIds, ...rest } = post;

  const author = AuthorsRepository.getAuthorById(authorId)!;
  const category = CategoriesRepository.getCategoryById(categoryId)!;
  const tags = TagsRepository.getTagsByIds(tagsIds)!;
  const createdAt = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return {
    ...rest,
    author,
    category,
    tags,
    createdAt,
  };
}
