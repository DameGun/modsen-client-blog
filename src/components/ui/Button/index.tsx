import { ButtonHTMLAttributes } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return <button {...props} className={cn(styles[variant])} />;
}
