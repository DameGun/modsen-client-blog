import { useTranslations } from 'next-intl';

import JoinNow from '@/components/containers/JoinNow';
import { Post } from '@/components/containers/Post';
import { PostsList } from '@/components/containers/PostsList';
import { FeaturedPostsNames, PostVariant } from '@/constants/post';
import { PostsRepository } from '@/services/repositories/posts';
import type { PaginationQueryParams } from '@/types/api';

import { CategoriesList } from './components/CategoriesList';

export default function BlogPage() {
  const featuredPost = PostsRepository.getFeaturedPost(FeaturedPostsNames.Blog);
  const t = useTranslations('Blog.Posts');

  const fetchPosts = async (params?: PaginationQueryParams) => {
    'use server';
    return PostsRepository.getPosts(params);
  };

  return (
    <>
      <Post variant={PostVariant.Featured} post={featuredPost} />
      <PostsList title={t('title')} fetch={fetchPosts} />
      <CategoriesList />
      <JoinNow />
    </>
  );
}
