'use client';

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { useTranslations } from 'next-intl';

import { FormField } from '@/components/containers/FormField';
import { Button, RelativeAlert } from '@/components/ui';
import { AlertMessages } from '@/constants/alert';
import { MESSAGE_LENGTH_CONSTRAINT } from '@/constants/validation';
import { useEmail } from '@/hooks';
import type { ContactFormType } from '@/types/contact';

import styles from './styles.module.scss';
import { contactValidationSchema } from './validation';

export function ContactForm() {
  const t = useTranslations('Contact.Form');
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<ContactFormType>({
    mode: 'onChange',
    resolver: yupResolver(contactValidationSchema),
  });
  const { isLoading, isError, isSuccess, handleEmail } = useEmail({ resetForm: reset });

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    await handleEmail({ data, emailType: 'contact' });
  };

  return (
    <form
      className={cn(styles.contactForm, { [styles.isLoading]: isLoading })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField errorText={errors.fullName?.message}>
        <input placeholder={t('fullName')} {...register('fullName')} data-testid='fullNameInput' />
      </FormField>
      <FormField errorText={errors.email?.message}>
        <input placeholder={t('email')} {...register('email')} data-testid='emailInput' />
      </FormField>
      <FormField errorText={errors.reason?.message}>
        <select {...register('reason')} data-testid='reasonSelect'>
          {t.raw('reasons').map((val: string, index: number) => (
            <option key={index} value={val}>
              {val}
            </option>
          ))}
        </select>
      </FormField>
      <FormField errorText={errors.message?.message}>
        <textarea
          placeholder={t('message')}
          {...register('message')}
          maxLength={MESSAGE_LENGTH_CONSTRAINT}
          data-testid='messageTextarea'
        />
      </FormField>
      <Button isDisabled={!isValid} isLoading={isLoading}>
        {t('button')}
      </Button>
      <RelativeAlert
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={AlertMessages.EmailError}
        successMessage={AlertMessages.EmailSuccess}
      />
    </form>
  );
}
