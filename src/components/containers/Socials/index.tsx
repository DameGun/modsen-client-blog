import { ImageLink } from '@/components/ui';

import styles from './styles.module.scss';

import facebookIcon from '/public/icons/facebook-icon.svg';
import instagramIcon from '/public/icons/instagram-icon.svg';
import linkedInIcon from '/public/icons/linkedIn-icon.svg';
import twitterIcon from '/public/icons/twitter-icon.svg';

type SocialsProps = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedIn?: string;
};

export function Socials({ facebook, twitter, instagram, linkedIn }: SocialsProps) {
  return (
    <div className={styles.socialsContainer}>
      <ImageLink href={facebook} src={facebookIcon} alt='Facebook Logo' />
      <ImageLink href={twitter} src={twitterIcon} alt='Twitter Logo' />
      <ImageLink href={instagram} src={instagramIcon} alt='Instagram Logo' />
      <ImageLink href={linkedIn} src={linkedInIcon} alt='LinkedIn Logo' />
    </div>
  );
}
