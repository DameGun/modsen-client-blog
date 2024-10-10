import { AuthorsRepository } from '@/services/repositories/authors';

export function GET() {
  const data = AuthorsRepository.getAuthors();
  return Response.json(data);
}
