import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ImageWithTextSection } from '@/components/containers/ImageWithTextSection';
import groupHandsImage from '@/public/images/group-hands-image.png';

import styles from './styles.module.scss';

export function OurTeam() {
  const t = useTranslations('AboutUs.OurTeam');

  return (
    <ImageWithTextSection reverse>
      <div>
        <span className={styles.designSquare} />
        <Image src={groupHandsImage} fill alt='Group Hands Image' />
      </div>
      <div>
        <h2>{t('label')}</h2>
        <h4>{t('title')}</h4>
        <p>{t('content')}</p>
      </div>
    </ImageWithTextSection>
  );
}
