import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export function AboutUsHeader() {
  const t = useTranslations('AboutUs.Header');

  return (
    <section className={styles.aboutUsHeaderContainer}>
      <div className={styles.aboutsUsCardWrapper}>
        <div className={styles.aboutUsCardContainer}>
          <p className={styles.aboutUsCardLabel}>{t('label')}</p>
          <h1>{t('title')}</h1>
        </div>
      </div>
      <p className={styles.aboutUsHeaderText}>{t('content')}</p>
    </section>
  );
}
