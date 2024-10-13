import { useTranslations } from 'next-intl';

import { SectionHeader } from '@/components/ui';
import extendsStyles from '@/styles/abstracts/extends.module.scss';

import { ContactForm, MapboxMap } from './components';
import styles from './styles.module.scss';

export default function ContactPage() {
  const t = useTranslations('Contact');

  return (
    <>
      <SectionHeader>
        <h1>{t('title')}</h1>
        <p>{t('content')}</p>
      </SectionHeader>
      <section className={extendsStyles.containerSm}>
        <section className={styles.contactInfo}>
          <div className={styles.contactSection}>
            <p className={extendsStyles.body1}>{t('WorkingHours.title')}</p>
            <h5>{t('WorkingHours.days')}</h5>
            <h5>{t('WorkingHours.hours')}</h5>
            <p className={extendsStyles.body2}>{t('WorkingHours.additional')}</p>
          </div>
          <div className={styles.contactSection}>
            <p className={extendsStyles.body1}>{t('contactUs')}</p>
            <h5>020 7993 2905</h5>
            <p className={extendsStyles.body2}>hello@finsweet.com</p>
          </div>
        </section>
        <ContactForm />
      </section>
      <MapboxMap />
    </>
  );
}
