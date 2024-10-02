import { ImageLink } from '@/components/ui';

import styles from './styles.module.scss';

type SocialsProps = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedIn?: string;
};

export function Socials({ facebook, twitter, instagram, linkedIn }: SocialsProps) {
  return (
    <div className={styles.socialsContainer}>
      <ImageLink href={facebook} src='/icons/facebook-icon.svg' alt='Facebook Logo' />
      <ImageLink href={twitter} src='/icons/twitter-icon.svg' alt='Twitter Logo' />
      <ImageLink href={instagram} src='/icons/instagram-icon.svg' alt='Instagran Logo' />
      <ImageLink href={linkedIn} src='/icons/linkedIn-icon.svg' alt='LinkedIn Logo' />
    </div>
  );
}
