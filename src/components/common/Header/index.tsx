'use client';

import { useCallback, useState } from 'react';

import cn from 'classnames';
import Image from 'next/image';

import { LocaleSwitcher } from '@/components/containers/LocaleSwitcher';
import { VideoButton } from '@/components/containers/VideoButton';
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
          <VideoButton handleNavClose={handleClose} />
          <LocaleSwitcher />
        </div>
        <Image
          className={cn(styles.menuButton, { [styles.isVisible]: isOpen })}
          src={closeIcon}
          width={parseStylesVariableAsNumber(variables.imageSizeMd)}
          height={parseStylesVariableAsNumber(variables.imageSizeMd)}
          alt='Open navigation button'
          onClick={handleClose}
        />
        <Image
          className={cn(styles.menuButton, { [styles.isVisible]: !isOpen })}
          src={menuIcon}
          width={parseStylesVariableAsNumber(variables.imageSizeMd)}
          height={parseStylesVariableAsNumber(variables.imageSizeMd)}
          alt='Close navigation button'
          onClick={handleOpen}
        />
      </div>
    </header>
  );
}
