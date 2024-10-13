'use client';

import type { PropsWithChildren } from 'react';

import cn from 'classnames';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import styles from './styles.module.scss';

export function RevealComponent({ children }: PropsWithChildren) {
  const { isVisible, elementRef } = useIntersectionObserver();

  return (
    <div className={cn(styles.reveal, { [styles.revealAnimation]: isVisible })} ref={elementRef}>
      {isVisible && children}
    </div>
  );
}
