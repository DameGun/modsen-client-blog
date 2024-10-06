import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export function SectionHeader({ children }: PropsWithChildren) {
  return (
    <div className={styles.sectionHeaderOuterContainer}>
      <div className={styles.sectionHeaderInnerContainer}>{children}</div>
    </div>
  );
}
