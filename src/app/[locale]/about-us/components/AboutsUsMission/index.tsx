import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export function AboutUsMission() {
  const t = useTranslations('AboutUs.Mission');

  return (
    <section className={styles.aboutsUsMissionContainer}>
      <div className={styles.aboutsUsArticle}>
        <p className={styles.aboutsUsArticleLabel}>{t('OurMission.label')}</p>
        <h3>{t('OurMission.title')}</h3>
        <p className={styles.aboutsUsArticleContent}>{t('OurMission.content')}</p>
      </div>
      <div className={styles.aboutsUsArticle}>
        <p className={styles.aboutsUsArticleLabel}>{t('OurVision.label')}</p>
        <h3>{t('OurVision.title')}</h3>
        <p className={styles.aboutsUsArticleContent}>{t('OurVision.content')}</p>
      </div>
    </section>
  );
}
