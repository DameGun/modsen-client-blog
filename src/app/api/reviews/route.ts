import { ReviewsRepository } from '@/services/repositories/reviews';

export function GET() {
  const data = ReviewsRepository.getReviews();
  return Response.json(data);
}
