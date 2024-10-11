'use client';

import { useCallback, useState } from 'react';

import cn from 'classnames';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/containers/LocaleSwitcher';
import { Button } from '@/components/ui';
import { useDisableTransition, useMediaQuery } from '@/hooks';
import closeIcon from '@/public/icons/close-icon.svg';
import menuIcon from '@/public/icons/menu-icon.svg';
import variables from '@/styles/abstracts/variables.module.scss';
import { parseStylesVariableAsNumber } from '@/utils/styles';

import styles from './styles.module.scss';

import { Nav } from '../Nav';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onDesktopResize = useCallback(() => setIsOpen(false), []);
  useMediaQuery({ query: styles.mediaDesktopQuery, onMatch: onDesktopResize });
  const disableTransition = useDisableTransition();

  const t = useTranslations('Header');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
          <Nav onNavigate={handleClose} />
          <Button variant='secondary'>{t('videoButton')}</Button>
          <LocaleSwitcher />
        </div>
        <Image
          className={cn(styles.menuButton, { [styles.isVisible]: isOpen })}
          src={closeIcon}
          width={parseStylesVariableAsNumber(variables.iconSize)}
          height={parseStylesVariableAsNumber(variables.iconSize)}
          alt='Open navigation button'
          onClick={handleClose}
        />
        <Image
          className={cn(styles.menuButton, { [styles.isVisible]: !isOpen })}
          src={menuIcon}
          width={parseStylesVariableAsNumber(variables.iconSize)}
          height={parseStylesVariableAsNumber(variables.iconSize)}
          alt='Close navigation button'
          onClick={handleOpen}
        />
      </div>
    </header>
  );
}
