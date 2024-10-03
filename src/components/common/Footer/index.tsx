import { FooterEmailForm, Socials } from '@/components/containers';
import { Routes } from '@/constants/routes';

import styles from './styles.module.scss';

import { Nav } from '../Nav';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInnerContainer}>
        <div className={styles.footerNavContainer}>
          <h4>Modsen Client Blog</h4>
          <Nav policyVisible />
        </div>
        <FooterEmailForm />
        <div className={styles.contactsContainer}>
          <div className={styles.address}>
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <Socials
            facebook={Routes.Facebook}
            twitter={Routes.Twitter}
            instagram={Routes.Instagram}
            linkedIn={Routes.LinkedIn}
          />
        </div>
      </div>
    </footer>
  );
}
