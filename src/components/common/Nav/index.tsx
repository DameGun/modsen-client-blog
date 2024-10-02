'use client';

import cn from 'classnames';
import { useTranslations } from 'next-intl';

import { Routes } from '@/constants/routes';
import { Link, usePathname } from '@/i18n/routing';

import styles from './styles.module.scss';

type NavProps = {
  onNavigate?: VoidFunction;
};

export function Nav({ onNavigate }: NavProps) {
  const t = useTranslations('Nav');
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        href={Routes.Home}
        className={cn(styles.link, { [styles.active]: pathname === Routes.Home })}
        onClick={onNavigate}
      >
        {t('home')}
      </Link>
      <Link
        href={Routes.Blog}
        className={cn(styles.link, { [styles.active]: pathname === Routes.Blog })}
        onClick={onNavigate}
      >
        {t('blog')}
      </Link>
      <Link
        href={Routes.AboutUs}
        className={cn(styles.link, { [styles.active]: pathname === Routes.AboutUs })}
        onClick={onNavigate}
      >
        {t('aboutUs')}
      </Link>
      <Link
        href={Routes.ContactUs}
        className={cn(styles.link, { [styles.active]: pathname === Routes.ContactUs })}
        onClick={onNavigate}
      >
        {t('contactUs')}
      </Link>
    </nav>
  );
}
