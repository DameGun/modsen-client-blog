import type { SearchParams } from '@/types/search';

import styles from './styles.module.scss';

import { CategoriesList } from '../CategoriesList';
import { SearchInput } from '../SearchInput';
import { TagsList } from '../TagsList';

export function SearchBar({ category, tagsNames }: SearchParams) {
  return (
    <aside className={styles.searchBarContainer}>
      <SearchInput />
      <CategoriesList category={category} />
      <TagsList tagsNames={tagsNames} />
    </aside>
  );
}
