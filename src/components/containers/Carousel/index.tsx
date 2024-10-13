'use client';

import { useState } from 'react';

import Image from 'next/image';

import arrowIcon from '@/public/icons/arrow-icon.svg';
import extendsVariables from '@/styles/abstracts/extends.module.scss';
import variables from '@/styles/abstracts/variables.module.scss';
import type { Review } from '@/types/review';
import { parseStylesVariableAsNumber } from '@/utils/styles';

import styles from './styles.module.scss';

type CarouselProps = {
  data: Review[];
};

export function Carousel({ data }: CarouselProps) {
  const [visibleItemIndex, setVisibleItemIndex] = useState(0);

  const handleNextItem = () => {
    setVisibleItemIndex((prev) => {
      if (prev === data.length - 1) return 0;
      return prev + 1;
    });
  };

  const handlePreviousItem = () => {
    setVisibleItemIndex((prev) => {
      if (prev === 0) return data.length - 1;
      return prev - 1;
    });
  };

  return (
    <div className={styles.carouselContainer}>
      <h4>{data[visibleItemIndex].content}</h4>
      <div className={styles.carouselInfoContainer}>
        <div className={styles.personDataContainer}>
          <Image
            className={styles.personImage}
            src={data[visibleItemIndex].image}
            height={parseStylesVariableAsNumber(variables.imageSizeLg)}
            width={parseStylesVariableAsNumber(variables.imageSizeLg)}
            alt='Review Person Image'
          />
          <span>
            <h4>{data[visibleItemIndex].name}</h4>
            <p className={extendsVariables.body1Gray}>{data[visibleItemIndex].address}</p>
          </span>
        </div>
        <div className={styles.carouselButtonsContainer}>
          <button className={styles.carouselControlLeft} onClick={handlePreviousItem}>
            <Image
              src={arrowIcon}
              height={parseStylesVariableAsNumber(variables.imageSizeSm)}
              width={parseStylesVariableAsNumber(variables.imageSizeSm)}
              alt='Previous Icon'
            />
          </button>
          <button className={styles.carouselControlRight} onClick={handleNextItem}>
            <Image
              src={arrowIcon}
              height={parseStylesVariableAsNumber(variables.imageSizeSm)}
              width={parseStylesVariableAsNumber(variables.imageSizeSm)}
              alt='Next Icon'
            />
          </button>
        </div>
      </div>
    </div>
  );
}
