import { databaseInstance } from '../database';

export class TagsRepository {
  static getTags() {
    return databaseInstance.tags;
  }

  static getTagsByIds(ids: number[]) {
    return databaseInstance.tags.filter(({ id }) => ids.includes(id));
  }
}
