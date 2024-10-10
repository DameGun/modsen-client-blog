import { PostsRepository } from '@/services/repositories/posts';
import type { ParamsWithId } from '@/types/api';

export function GET(_: Request, { params: { id } }: ParamsWithId) {
  const data = PostsRepository.getPostById(id);
  return Response.json(data);
}
