import type { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type FormFieldProps = PropsWithChildren & {
  errorText?: string;
};

export function FormField({ children, errorText }: FormFieldProps) {
  return (
    <span className={styles.formField}>
      {children}
      <p className={styles.errorText}>{errorText}</p>
    </span>
  );
}
