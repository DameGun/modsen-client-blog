import { AuthorsRepository } from '@/services/repositories/authors';

describe('Authors repository', () => {
  it('Should return all authors', () => {
    const authors = AuthorsRepository.getAuthors();
    expect(authors.length).toBe(2);
  });

  it('Should return author by id', () => {
    const post = AuthorsRepository.getAuthorById('98f452c4-5a8e-11ec-bf63-0242ac130002');
    expect(post).not.toBeNull();
  });
});
