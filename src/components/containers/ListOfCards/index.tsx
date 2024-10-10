import type { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type ListOfCardsContainer = PropsWithChildren & {
  title: string;
  titlePosition?: 'start' | 'center' | 'end';
};

export function ListOfCards({ title, children, titlePosition = 'center' }: ListOfCardsContainer) {
  return (
    <section className={styles.listOfCardsContainer}>
      <h2 className={styles[titlePosition]}>{title}</h2>
      <div className={styles.listContainer}>{children}</div>
    </section>
  );
}
