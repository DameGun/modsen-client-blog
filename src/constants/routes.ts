export const Routes = {
  Home: '/',
  Blog: '/blog',
  Post: (authorId: string, postId: string) => `/author/${authorId}/posts/${postId}`,
  AboutUs: '/about-us',
  ContactUs: '/contact',
  PrivacyPolicy: '/privacy-policy',
  Author: (id: string) => `/author/${id}`,
  Facebook: 'https://facebook.com',
  Twitter: 'https://x.com',
  Instagram: 'https://instagram.com',
  LinkedIn: 'https://linkedin.com',
} as const;
