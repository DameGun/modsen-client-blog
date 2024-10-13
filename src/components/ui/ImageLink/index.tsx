'use client';

import type { MouseEvent } from 'react';

import Image from 'next/image';

import { Link } from '@/i18n/routing';
import variables from '@/styles/abstracts/variables.module.scss';
import { parseStylesVariableAsNumber } from '@/utils/styles';

import styles from './styles.module.scss';

type ImageLinkProps = {
  src: string;
  href?: string;
  alt: string;
};

export function ImageLink({ src, href, alt }: ImageLinkProps) {
  const handleStopPropagation = (e: MouseEvent) => e.stopPropagation();

  if (href) {
    return (
      <Link href={href} className={styles.imageLink}>
        <Image
          src={src}
          width={parseStylesVariableAsNumber(variables.imageSizeMd)}
          height={parseStylesVariableAsNumber(variables.imageSizeMd)}
          alt={alt}
          onClick={handleStopPropagation}
        />
      </Link>
    );
  }

  return null;
}
