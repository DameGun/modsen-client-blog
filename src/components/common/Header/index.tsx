'use client';

import { useCallback, useState } from 'react';

import cn from 'classnames';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { useDisableTransition } from '@/hooks/useDisableTransition';
import variables from '@/styles/abstracts/variables.module.scss';

import styles from './styles.module.scss';

import { Nav } from '../Nav';

import closeIcon from '/public/icons/close-icon.svg';
import menuIcon from '/public/icons/menu-icon.svg';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuOnResize = useCallback(() => {
    if (window.innerWidth > parseInt(styles.tabletLgWidth)) {
      setIsOpen(false);
    }
  }, []);
  const disableTransition = useDisableTransition(handleMenuOnResize);

  const t = useTranslations('Header');

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      {isOpen && <div className={styles.overlay} />}
      <div className={styles.headerNavContainer}>
        <h4>Modsen Client Blog</h4>
        <div
          className={cn(styles.linksContainer, {
            [styles.isOpen]: isOpen,
            [styles.disableTransition]: disableTransition,
          })}
        >
          <Nav onNavigate={handleOpen} />
          <Button variant='secondary'>{t('videoButton')}</Button>
        </div>
        <Image
          className={cn(styles.menuButton, { [styles.isVisible]: isOpen })}
          src={closeIcon}
          width={+variables.iconSize}
          height={+variables.iconSize}
          alt='Open navigation button'
          onClick={handleOpen}
        />
        <Image
          className={cn(styles.menuButton, { [styles.isVisible]: !isOpen })}
          src={menuIcon}
          width={+variables.iconSize}
          height={+variables.iconSize}
          alt='Close navigation button'
          onClick={handleOpen}
        />
      </div>
    </header>
  );
}
