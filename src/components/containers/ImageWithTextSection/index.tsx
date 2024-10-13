import type { PropsWithChildren } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

type ImageWithTextSectionProps = PropsWithChildren & {
  reverse?: boolean;
};

export function ImageWithTextSection({ reverse = false, children }: ImageWithTextSectionProps) {
  return (
    <section className={cn(styles.imageWithTextContainer, { [styles.reverse]: reverse })}>
      {children}
    </section>
  );
}
