import { getTranslations } from 'next-intl/server';

import { Carousel } from '@/components/containers/Carousel';
import { ReviewsRepository } from '@/services/repositories/reviews';
import extendsVariables from '@/styles/abstracts/extends.module.scss';

import styles from './styles.module.scss';

export default async function Testimonials() {
  const reviews = ReviewsRepository.getReviews();
  const t = await getTranslations('Home.Testimonials');

  return (
    <section className={extendsVariables.sectionContainer}>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsInfoContainer}>
          <p className={extendsVariables.body2Uppercase}>{t('label')}</p>
          <h2>{t('title')}</h2>
          <p className={extendsVariables.body1Gray}>{t('content')}</p>
        </div>
        <Carousel data={reviews} />
      </div>
    </section>
  );
}
