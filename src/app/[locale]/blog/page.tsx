import JoinNow from '@/components/containers/JoinNow';
import { Post } from '@/components/containers/Post';
import { FeaturedPostsNames, PostVariant } from '@/constants/post';
import { PostsRepository } from '@/services/repositories/posts';

import { CategoriesList } from './components/CategoriesList';
import { PostsList } from './components/PostsList';

export default function BlogPage() {
  const featuredPost = PostsRepository.getFeaturedPost(FeaturedPostsNames.Blog);

  return (
    <>
      <Post variant={PostVariant.Featured} post={featuredPost} />
      <PostsList />
      <CategoriesList />
      <JoinNow />
    </>
  );
}
