import { getTranslations } from 'next-intl/server';

import JoinNow from '@/components/containers/JoinNow';
import ListOfAuthors from '@/components/containers/ListOfAuthors';
import type { MetadataWithLocaleProps } from '@/types/i18n';

import { AboutUsMission } from './components/AboutsUsMission';
import { AboutUsHeader } from './components/AboutUsHeader';
import { AboutUsOverview } from './components/AboutUsOverview';
import { OurTeam } from './components/OurTeam';
import { WhyWeStarted } from './components/WhyWeStarted';

export async function generateMetadata({ params: { locale } }: MetadataWithLocaleProps) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('aboutUs'),
  };
}

export default function AboutUsPage() {
  return (
    <>
      <AboutUsHeader />
      <AboutUsOverview />
      <AboutUsMission />
      <OurTeam />
      <WhyWeStarted />
      <ListOfAuthors />
      <JoinNow />
    </>
  );
}
