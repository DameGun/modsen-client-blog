import type { FormFieldProps } from '@/types/formControl';

import styles from './styles.module.scss';

export function FormField({ children, errorText }: FormFieldProps) {
  return (
    <span className={styles.formField}>
      {children}
      <p className={styles.errorText}>{errorText}</p>
    </span>
  );
}
