import { TagsRepository } from '@/services/repositories/tags';

describe('Tags repository', () => {
  it('Should return all tags', () => {
    const tags = TagsRepository.getTags();
    expect(tags.length).toBe(2);
  });

  it('Should return tags by ids', () => {
    const tags = TagsRepository.getTagsByIds([1, 2]);
    expect(tags.length).toBe(2);
  });

  it('Should return tags by names', () => {
    const tags = TagsRepository.getTagsByNames(['Business', 'Experience']);
    expect(tags.length).toBe(2);
  });
});
