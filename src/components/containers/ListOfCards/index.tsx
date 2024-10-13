import type { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type ListOfCardsContainer = PropsWithChildren & {
  title: string;
};

export function ListOfCards({ title, children }: ListOfCardsContainer) {
  return (
    <section className={styles.listOfCardsContainer}>
      <h2>{title}</h2>
      <div className={styles.listContainer}>{children}</div>
    </section>
  );
}
