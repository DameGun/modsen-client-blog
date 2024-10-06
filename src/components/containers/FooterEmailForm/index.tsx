'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';

import styles from './styles.module.scss';

export function FooterEmailForm() {
  const t = useTranslations('EmailForm');

  return (
    <div className={styles.emailFormFooterContainer}>
      <h2>{t('title')}</h2>
      <div className={styles.emailFormFooter}>
        <input placeholder={t('placeholder')} />
        <Button>{t('button')}</Button>
      </div>
    </div>
  );
}
