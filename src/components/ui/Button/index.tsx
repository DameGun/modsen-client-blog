import type { ButtonHTMLAttributes } from 'react';

import cn from 'classnames';

import type { ButtonVariants } from '@/types/styles';

import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export function Button({ variant = 'primary', isDisabled, isLoading, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(styles[variant], {
        [styles.isDisabled]: isDisabled,
        [styles.isLoading]: isLoading,
      })}
    />
  );
}
