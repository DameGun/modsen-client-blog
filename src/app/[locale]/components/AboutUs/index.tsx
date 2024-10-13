import { useTranslations } from 'next-intl';

import { Routes } from '@/constants/routes';
import { Link } from '@/i18n/routing';
import extendsVariables from '@/styles/abstracts/extends.module.scss';

import styles from './styles.module.scss';

export default function AboutUs() {
  const t = useTranslations('Home.AboutUs');

  return (
    <section className={extendsVariables.sectionContainer}>
      <span className={styles.containerShape}>
        <span />
        <span />
      </span>
      <div className={styles.aboutUsContainer}>
        <article className={styles.aboutUsArticle}>
          <p className={extendsVariables.body2Uppercase}>{t('About.label')}</p>
          <h2>{t('About.title')}</h2>
          <p className={extendsVariables.body1Gray}>{t('About.content')} </p>
          <Link href={Routes.AboutUs}>{t('button')}</Link>
        </article>
        <article className={styles.aboutUsArticle}>
          <p className={extendsVariables.body2Uppercase}>{t('Mission.label')}</p>
          <h2>{t('Mission.title')}</h2>
          <p className={extendsVariables.body1Gray}>{t('About.content')}</p>
        </article>
      </div>
    </section>
  );
}
