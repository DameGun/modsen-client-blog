'use client';

import { InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.input} {...props} />;
}
