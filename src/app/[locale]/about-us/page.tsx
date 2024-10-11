import JoinNow from '@/components/containers/JoinNow';
import ListOfAuthors from '@/components/containers/ListOfAuthors';

import { AboutUsMission } from './components/AboutsUsMission';
import { AboutUsHeader } from './components/AboutUsHeader';
import { AboutUsOverview } from './components/AboutUsOverview';
import { OurTeam } from './components/OurTeam';
import { WhyWeStarted } from './components/WhyWeStarted';

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
