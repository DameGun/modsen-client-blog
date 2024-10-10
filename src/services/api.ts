import type { Author } from '@/types/author';
import type { Category } from '@/types/identifiers';
import type { PostType } from '@/types/post';
import type { Review } from '@/types/review';
import { fetchEnhanced } from '@/utils/api';

export async function getPosts(limit?: number): Promise<PostType[]> {
  const data = await fetchEnhanced(`/posts?limit=${limit}`);
  return data.json();
}

export async function getFeaturedPost(page: string): Promise<PostType> {
  const data = await fetchEnhanced(`/posts/featured/${page}`);
  return data.json();
}

export async function getCategories(): Promise<Category[]> {
  const data = await fetchEnhanced('/categories');
  return data.json();
}

export async function getAuthors(): Promise<Author[]> {
  const data = await fetchEnhanced(`/authors`);
  return data.json();
}

export async function getReviews(): Promise<Review[]> {
  const data = await fetchEnhanced('/reviews');
  return data.json();
}
