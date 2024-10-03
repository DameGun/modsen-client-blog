import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export function Article({ children }: PropsWithChildren) {
  return <article className={styles.article}>{children}</article>;
}
