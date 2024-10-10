import { databaseInstance } from '../database';

export class AuthorsRepository {
  static getAuthors() {
    const data = databaseInstance.authors;

    return data;
  }

  static getAuthorById(authorId: string) {
    const data = databaseInstance.authors.find(({ id }) => id === authorId);

    return data;
  }
}
