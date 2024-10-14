import { PostsRepository } from '@/services/repositories/posts';

describe('Posts repository', () => {
  it('Should return all posts', () => {
    const { totalCount } = PostsRepository.getPosts();
    expect(totalCount).toBe(2);
  });

  it('Should return paginated posts', () => {
    const { perPage, pageCount, data } = PostsRepository.getPosts({ limit: 1 });
    expect(perPage).toBe(1);
    expect(data.length).toBe(1);
    expect(pageCount).toBe(2);
  });

  it('Should return paginated posts by author id', () => {
    const { totalCount } = PostsRepository.getPostsByAuthorId(
      '98f452c4-5a8e-11ec-bf63-0242ac130002'
    );
    expect(totalCount).toBe(1);
  });

  it('Should return post by id', () => {
    const post = PostsRepository.getPostById('98ad4c7b-fd9b-4139-91ed-9a0df6995d1f');
    expect(post).not.toBeNull();
  });

  it('Should return featured post', () => {
    const post = PostsRepository.getFeaturedPost('home');
    expect(post).not.toBeNull();
  });

  it('Should return post by category id', () => {
    const post = PostsRepository.getPostsByCategoryId('', 1);
    expect(post).not.toBeNull();
  });

  it('Should get posts by tag search param', () => {
    const post = PostsRepository.getPostsWithSearchParams({}, { tagsNames: 'Experience' });
    expect(post).not.toBeNull();
  });

  it('Should get posts by category search param', () => {
    const post = PostsRepository.getPostsWithSearchParams({}, { category: 'Startup' });
    expect(post).not.toBeNull();
  });

  it('Should get posts by keyword search param', () => {
    const post = PostsRepository.getPostsWithSearchParams({}, { keyword: 'Exploring' });
    expect(post).not.toBeNull();
  });
});
