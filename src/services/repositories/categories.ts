import { databaseInstance } from '../database';

export class CategoriesRepository {
  static getCategories() {
    return databaseInstance.categories;
  }

  static getCategoryById(categoryId: number) {
    return databaseInstance.categories.find(({ id }) => id === categoryId);
  }
}
