import dynamic from 'next/dynamic';

export const DynamicComponents = [
  dynamic(() => import('@/app/[locale]/components/HomePosts')),
  dynamic(() => import('@/app/[locale]/components/AboutUs')),
  dynamic(() => import('@/app/[locale]/components/ChooseCategory')),
  dynamic(() => import('@/app/[locale]/components/DiscoverOurStory')),
  dynamic(() => import('@/app/[locale]/components/ListOfAuthors')),
  dynamic(() => import('@/app/[locale]/components/Testimonials')),
  dynamic(() => import('@/app/[locale]/components/JoinNow')),
] as const;
