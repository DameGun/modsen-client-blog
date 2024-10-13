import cn from 'classnames';
import Image from 'next/image';

import { CategoryVariant } from '@/constants/category';
import extendsVariables from '@/styles/abstracts/extends.module.scss';
import variables from '@/styles/abstracts/variables.module.scss';
import type { Category } from '@/types/identifiers';
import { parseStylesVariableAsNumber } from '@/utils/styles';

import styles from './styles.module.scss';

type CategoryCardProps = {
  category: Category;
  variant?: CategoryVariant;
};

export function CategoryCard({
  category: { name, description, image },
  variant = CategoryVariant.Minified,
}: CategoryCardProps) {
  return (
    <div className={cn(styles.categoryCardContainer, styles[variant])}>
      <Image
        src={image}
        height={parseStylesVariableAsNumber(variables.imageSizeLg)}
        width={parseStylesVariableAsNumber(variables.imageSizeLg)}
        alt='Category Icon'
      />
      <h4>{name}</h4>
      {variant === CategoryVariant.Extended && (
        <p className={extendsVariables.body1Gray}>{description}</p>
      )}
    </div>
  );
}
