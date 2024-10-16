import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export function AboutUsMission() {
  const t = useTranslations('AboutUs.Mission');
  const keys = ['OurMission', 'OurVision'] as const;

  return (
    <section className={styles.aboutsUsMissionContainer}>
      {keys.map((key) => (
        <div key={key} className={styles.aboutsUsArticle}>
          <p className={styles.aboutsUsArticleLabel}>{t(`${key}.label`)}</p>
          <h3>{t(`${key}.title`)}</h3>
          <p className={styles.aboutsUsArticleContent}>{t(`${key}.content`)}</p>
        </div>
      ))}
    </section>
  );
}
