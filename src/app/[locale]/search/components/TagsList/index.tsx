import { useTranslations } from 'next-intl';

import { TagCard } from '@/components/containers/TagCard';
import { TagsRepository } from '@/services/repositories/tags';
import type { SearchParams } from '@/types/search';

import styles from './styles.module.scss';

type TagsListProps = Pick<SearchParams, 'tagsNames'>;

export function TagsList({ tagsNames }: TagsListProps) {
  const tags = TagsRepository.getTags();
  const t = useTranslations('Search.Tags');

  return (
    <div className={styles.tagsListContainer}>
      <h2>{t('title')}</h2>
      <div className={styles.tagsList}>
        {tags.map(({ id, name }) => (
          <TagCard key={id} tag={{ id, name }} isSelected={tagsNames?.includes(name)} />
        ))}
      </div>
    </div>
  );
}
