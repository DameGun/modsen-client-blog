import { databaseInstance } from '../database';

export class CategoriesRepository {
  static getCategories() {
    return databaseInstance.categories;
  }

  static getCategoryById(categoryId: number) {
    return databaseInstance.categories.find(({ id }) => id === categoryId);
  }

  static getCategoryByName(categoryName: string) {
    return databaseInstance.categories.find(({ name }) => name === categoryName)!;
  }
}
