import Image from 'next/image';

import { Link } from '@/i18n/routing';

type ImageLinkProps = {
  src: string;
  href?: string;
  alt: string;
};

export function ImageLink({ src, href, alt }: ImageLinkProps) {
  if (href) {
    return (
      <Link href={href}>
        <Image src={src} width={26} height={26} alt={alt} />
      </Link>
    );
  }

  return null;
}
