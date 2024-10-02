import { ButtonHTMLAttributes } from 'react';

import cn from 'classnames';

import type { ButtonVariants } from '@/types/styles';

import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
};

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return <button {...props} className={cn(styles[variant])} />;
}
