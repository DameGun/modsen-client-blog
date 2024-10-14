import { ReviewsRepository } from '@/services/repositories/reviews';

describe('Reviews repository', () => {
  it('Should return all Reviews', () => {
    const reviews = ReviewsRepository.getReviews();
    expect(reviews.length).toBe(2);
  });
});
