import type { NextRequest } from 'next/server';

import { PostsRepository } from '@/services/repositories/posts';

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = searchParams.get('limit');

  const data = PostsRepository.getPosts(Number(limit));
  return Response.json(data);
}
