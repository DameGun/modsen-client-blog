'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { Routes } from '@/constants/routes';
import { useRouter } from '@/i18n/routing';

import styles from './styles.module.scss';

export default function NotFoundPage() {
  const router = useRouter();
  const t = useTranslations('NotFound');

  const handleNavigation = () => {
    router.replace(Routes.Home);
  };

  return (
    <section className={styles.errorContainer}>
      <h1>{t('status')}</h1>
      <h2>{t('title')}</h2>
      <h4>{t('description')}</h4>
      <Button onClick={handleNavigation}>{t('button')}</Button>
    </section>
  );
}
