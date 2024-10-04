import Image from 'next/image';

import { Link } from '@/i18n/routing';
import variables from '@/styles/abstracts/variables.module.scss';
import { parseStylesVariableAsNumber } from '@/utils/styles';

type ImageLinkProps = {
  src: string;
  href?: string;
  alt: string;
};

export function ImageLink({ src, href, alt }: ImageLinkProps) {
  if (href) {
    return (
      <Link href={href}>
        <Image
          src={src}
          width={parseStylesVariableAsNumber(variables.iconSize)}
          height={parseStylesVariableAsNumber(variables.iconSize)}
          alt={alt}
        />
      </Link>
    );
  }

  return null;
}
