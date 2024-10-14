'use client';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { Routes } from '@/constants/routes';
import { useRouter } from '@/i18n/routing';

import styles from './styles.module.scss';

export default function ErrorBoundary() {
  const router = useRouter();
  const t = useTranslations('Error');

  const handleNavigate = () => {
    router.replace(Routes.Home);
  };

  return (
    <section className={styles.errorContainer}>
      <h1>{t('title')}</h1>
      <h4>{t('description')}</h4>
      <Button onClick={handleNavigate}>{t('button')}</Button>
    </section>
  );
}
