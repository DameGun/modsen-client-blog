import { CategoriesRepository } from '@/services/repositories/categories';

describe('Categories repository', () => {
  it('Should return all categories', () => {
    const categories = CategoriesRepository.getCategories();
    expect(categories.length).toBe(2);
  });

  it('Should return category by id', () => {
    const category = CategoriesRepository.getCategoryById(1);
    expect(category).not.toBeNull();
  });

  it('Should return category by name', () => {
    const category = CategoriesRepository.getCategoryByName('Startup');
    expect(category).not.toBeNull();
  });
});
