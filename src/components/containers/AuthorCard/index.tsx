'use client';

import Image from 'next/image';

import { Routes } from '@/constants/routes';
import { useRouter } from '@/i18n/routing';
import extendsVariables from '@/styles/abstracts/extends.module.scss';
import variables from '@/styles/abstracts/variables.module.scss';
import type { Author } from '@/types/author';
import { parseStylesVariableAsNumber } from '@/utils/styles';

import styles from './styles.module.scss';

import { Socials } from '../Socials';

type AuthorCardProps = {
  author: Author;
};

export function AuthorCard({ author: { id, name, bio, image, socials } }: AuthorCardProps) {
  const router = useRouter();

  const handleCardClick = () => router.push(Routes.Author(id));

  return (
    <div className={styles.authorCardContainer} onClick={handleCardClick}>
      <Image
        className={styles.authorAvatar}
        src={image}
        height={parseStylesVariableAsNumber(variables.authorAvatarSize)}
        width={parseStylesVariableAsNumber(variables.authorAvatarSize)}
        alt='Author Avatar'
      />
      <h3>{name}</h3>
      <p className={extendsVariables.body1Gray}>{bio}</p>
      <Socials {...socials} />
    </div>
  );
}
