import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ImageWithTextSection } from '@/components/containers/ImageWithTextSection';
import sittingPeopleImage from '@/public/images/sitting-people-image.jpg';

export function WhyWeStarted() {
  const t = useTranslations('AboutUs.WhyWeStarted');

  return (
    <ImageWithTextSection>
      <div>
        <Image src={sittingPeopleImage} fill alt='Sitting People Image' />
      </div>
      <div>
        <h2>{t('label')}</h2>
        <h4>{t('title')}</h4>
        <p>{t('content')}</p>
      </div>
    </ImageWithTextSection>
  );
}
