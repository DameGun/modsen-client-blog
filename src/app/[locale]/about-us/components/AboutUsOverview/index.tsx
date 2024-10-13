import Image from 'next/image';
import { useTranslations } from 'next-intl';

import discoverImage from '@/public/images/discover-image.png';

import styles from './styles.module.scss';

export function AboutUsOverview() {
  const t = useTranslations('AboutUs.Overview');

  return (
    <section className={styles.aboutUsOverviewContainer}>
      <div className={styles.statiscticsContainer}>
        <span className={styles.statisticsItem}>
          <h1>{t('Published.count')}</h1>
          <p>{t('Published.title')}</p>
        </span>
        <span>
          <h1>{t('Views.count')}</h1>
          <p>{t('Views.title')}</p>
        </span>
        <span>
          <h1>{t('ActiveUsers.count')}</h1>
          <p>{t('ActiveUsers.title')}</p>
        </span>
      </div>

      <Image src={discoverImage} fill alt='About Us Banner' />
    </section>
  );
}
