import styles from './styles.module.scss';

import { Nav } from '../Nav';

export function Header() {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  );
}
