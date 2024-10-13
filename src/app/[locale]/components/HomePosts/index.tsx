import { getTranslations } from 'next-intl/server';

import { Post } from '@/components/containers/Post';
import { PostVariant } from '@/constants/post';
import { Routes } from '@/constants/routes';
import { Link } from '@/i18n/routing';
import { PostsRepository } from '@/services/repositories/posts';

import styles from './styles.module.scss';

export default async function HomePosts() {
  const featuredPost = PostsRepository.getFeaturedPost('home-list');
  const posts = PostsRepository.getPosts(4);
  const t = await getTranslations('Home.Posts');

  return (
    <section className={styles.homePostsContainer}>
      <div className={styles.featuredPostContainer}>
        <div className={styles.headingContainer}>
          <h2>{t('featuredPost')}</h2>
        </div>
        <div className={styles.sectionInnerContainer}>
          <Post variant={PostVariant.Featured} post={featuredPost} />
        </div>
      </div>
      <div className={styles.postsListContainer}>
        <div className={styles.headingContainer}>
          <h2>{t('allPosts')}</h2>
          <Link href={Routes.Blog}>{t('viewAllButton')}</Link>
        </div>
        <div className={styles.sectionInnerContainer}>
          {posts.map(({ id, ...rest }) => (
            <Post key={id} variant={PostVariant.Minified} post={{ id, ...rest }} />
          ))}
        </div>
      </div>
    </section>
  );
}
