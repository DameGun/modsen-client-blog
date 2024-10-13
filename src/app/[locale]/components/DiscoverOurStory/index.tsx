import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { Routes } from '@/constants/routes';
import { Link } from '@/i18n/routing';
import discoverImage from '@/public/images/discover-image.png';
import extendsVariables from '@/styles/abstracts/extends.module.scss';
import variables from '@/styles/abstracts/variables.module.scss';
import { parseStylesVariableAsNumber } from '@/utils/styles';

import styles from './styles.module.scss';

export default function DiscoverOurStory() {
  const t = useTranslations('Home.Discover');

  return (
    <section className={styles.discoverOurStoryContainer}>
      <Image
        src={discoverImage}
        height={parseStylesVariableAsNumber(variables.discoverHeight)}
        width={parseStylesVariableAsNumber(variables.discoverWidth)}
        alt='Discover Image'
      />
      <div className={styles.discoverOurStoryContent}>
        <p className={extendsVariables.body2Uppercase}>{t('label')}</p>
        <h1>{t('title')}</h1>
        <p className={extendsVariables.body1Gray}>{t('content')}</p>
        <Link href={Routes.AboutUs}>
          <Button>{t('button')}</Button>
        </Link>
      </div>
    </section>
  );
}
