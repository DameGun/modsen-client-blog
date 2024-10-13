import { Article } from '@/components/ui/Article';
import type { PostType } from '@/types/post';

import styles from './styles.module.scss';

type BlogPostContentProps = Pick<PostType, 'content'>;

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div className={styles.blogPostContentContainer}>
      {content.map(({ title, paragraph }, index) => (
        <Article key={index}>
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </Article>
      ))}
    </div>
  );
}
