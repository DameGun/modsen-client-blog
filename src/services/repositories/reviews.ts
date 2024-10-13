import { databaseInstance } from '../database';

export class ReviewsRepository {
  static getReviews() {
    return databaseInstance.reviews;
  }
}
