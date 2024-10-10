import { CategoriesRepository } from '@/services/repositories/categories';

export function GET() {
  const data = CategoriesRepository.getCategories();
  return Response.json(data);
}
