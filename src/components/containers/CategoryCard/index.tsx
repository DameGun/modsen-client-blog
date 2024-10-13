'use client';

import { useCallback } from 'react';

import cn from 'classnames';
import Image from 'next/image';

import { CategoryVariant } from '@/constants/category';
import { Routes } from '@/constants/routes';
import { SearchParamsEnum } from '@/constants/search';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';
import { useRouter } from '@/i18n/routing';
import extendsVariables from '@/styles/abstracts/extends.module.scss';
import variables from '@/styles/abstracts/variables.module.scss';
import type { Category } from '@/types/identifiers';
import { parseStylesVariableAsNumber } from '@/utils/styles';

import styles from './styles.module.scss';

type CategoryCardProps = {
  category: Category;
  variant?: CategoryVariant;
  preventScrollOnClick?: boolean;
  isSelected?: boolean;
};

export function CategoryCard({
  category: { name, description, image },
  variant = CategoryVariant.Minified,
  preventScrollOnClick = false,
  isSelected = false,
}: CategoryCardProps) {
  const router = useRouter();
  const [updateParams] = useUpdateSearchParams();

  const createQueryString = useCallback(() => {
    return isSelected
      ? updateParams({ deleteParams: [SearchParamsEnum.category] }).queryString
      : updateParams({ updateParams: { category: name } }).queryString;
  }, [updateParams, isSelected, name]);

  const handleClick = () => {
    router.push(Routes.Search + '?' + createQueryString(), { scroll: !preventScrollOnClick });
  };

  return (
    <div
      className={cn(styles.categoryCardContainer, styles[variant], {
        [styles.isSelected]: isSelected,
      })}
      onClick={handleClick}
    >
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
