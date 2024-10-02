'use client';

import cn from 'classnames';
import { useTranslations } from 'next-intl';

import { Routes } from '@/constants/routes';
import { Link, usePathname } from '@/i18n/routing';

import styles from './styles.module.scss';

export function Nav() {
  const t = useTranslations('Nav');
  const pathname = usePathname();

  return (
    <div className={styles.navOuterContainer}>
      <h4>Modsen Client Blog</h4>
      <div className={styles.navInnerContainer}>
        <nav className={styles.nav}>
          <Link
            href={Routes.Home}
            className={cn(styles.link, { [styles.active]: pathname === Routes.Home })}
          >
            {t('home')}
          </Link>
          <Link
            href={Routes.Blog}
            className={cn(styles.link, { [styles.active]: pathname === Routes.Blog })}
          >
            {t('blog')}
          </Link>
          <Link
            href={Routes.AboutUs}
            className={cn(styles.link, { [styles.active]: pathname === Routes.AboutUs })}
          >
            {t('aboutUs')}
          </Link>
          <Link
            href={Routes.ContactUs}
            className={cn(styles.link, { [styles.active]: pathname === Routes.ContactUs })}
          >
            {t('contactUs')}
          </Link>
        </nav>
      </div>
    </div>
  );
}
