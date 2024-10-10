import dynamic from 'next/dynamic';

export const DynamicComponents = [
  { id: 'HomePosts', Component: dynamic(() => import('@/app/[locale]/components/HomePosts')) },
  { id: 'AboutsUs', Component: dynamic(() => import('@/app/[locale]/components/AboutUs')) },
  {
    id: 'ChooseCategory',
    Component: dynamic(() => import('@/app/[locale]/components/ChooseCategory')),
  },
  {
    id: 'DiscoverOurStory',
    Component: dynamic(() => import('@/app/[locale]/components/DiscoverOurStory')),
  },
  {
    id: 'ListOfAuthors',
    Component: dynamic(() => import('@/app/[locale]/components/ListOfAuthors')),
  },
  {
    id: 'Testimonials',
    Component: dynamic(() => import('@/app/[locale]/components/Testimonials')),
  },
  { id: 'JoinNow', Component: dynamic(() => import('@/components/containers/JoinNow')) },
] as const;
