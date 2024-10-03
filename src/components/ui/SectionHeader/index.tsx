import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export function SectionHeader({ children }: PropsWithChildren) {
  return <div className={styles.sectionHeader}>{children}</div>;
}
