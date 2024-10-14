import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { Routes } from '@/constants/routes';
import { Link } from '@/i18n/routing';

import styles from './styles.module.scss';

export default function JoinNow() {
  const t = useTranslations('Home.JoinNow');

  return (
    <section className={styles.joinNowContainer}>
      <h2>{t('title')}</h2>
      <p>{t('content')}</p>
      <Link href={Routes.ContactUs} data-testid='joinNowButton'>
        <Button>{t('button')}</Button>
      </Link>
    </section>
  );
}
