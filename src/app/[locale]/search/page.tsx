import { useTranslations } from 'next-intl';

import { SectionHeader } from '@/components/ui';
import type { SearchParams } from '@/types/search';

import { SearchBar } from './components/SearchBar';
import { SearchPosts } from './components/SearchPosts';
import styles from './styles.module.scss';

type SearchPageProps = {
  searchParams: SearchParams;
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const t = useTranslations('Search');

  return (
    <>
      <SectionHeader>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </SectionHeader>
      <div className={styles.searchPageContainer}>
        <section>
          <SearchPosts {...searchParams} />
        </section>
        <SearchBar {...searchParams} />
      </div>
    </>
  );
}
