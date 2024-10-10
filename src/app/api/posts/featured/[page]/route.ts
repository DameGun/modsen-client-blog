import { PostsRepository } from '@/services/repositories/posts';
import type { FeaturedPostParams } from '@/types/post';

export function GET(_: Request, { params: { page } }: FeaturedPostParams) {
  const data = PostsRepository.getFeaturedPost(page);
  return Response.json(data);
}
