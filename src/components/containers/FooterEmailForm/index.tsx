'use client';

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';

import { Button, RelativeAlert } from '@/components/ui';
import { useEmail } from '@/hooks';
import type { FooterContactFormType } from '@/types/contact';

import styles from './styles.module.scss';
import { footerEmailValidationSchema } from './validation';

import { FormField } from '../FormField';

export function FooterEmailForm() {
  const t = useTranslations('EmailForm');
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<FooterContactFormType>({
    mode: 'onChange',
    resolver: yupResolver(footerEmailValidationSchema),
  });

  const { isLoading, isError, isSuccess, handleEmail } = useEmail({ resetForm: reset });

  const onSubmit: SubmitHandler<FooterContactFormType> = async (data) => {
    await handleEmail({ data, emailType: 'news' });
  };

  return (
    <div className={styles.emailFormFooterContainer}>
      <h2>{t('title')}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField errorText={errors.email?.message}>
          <div className={styles.emailFormFooter}>
            <input placeholder={t('placeholder')} {...register('email')} />
            <Button isDisabled={!isValid} isLoading={isLoading}>
              {t('button')}
            </Button>
            <RelativeAlert minimize isError={isError} isSuccess={isSuccess} />
          </div>
        </FormField>
      </form>
    </div>
  );
}
