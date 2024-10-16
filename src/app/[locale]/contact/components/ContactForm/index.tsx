'use client';

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { useTranslations } from 'next-intl';

import { Button, RelativeAlert } from '@/components/ui';
import { FormInput } from '@/components/ui/FormInput';
import { FormSelect } from '@/components/ui/FormSelect';
import { FormTextArea } from '@/components/ui/FormTextarea';
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
      <FormInput
        errorText={errors.fullName?.message}
        placeholder={t('fullName')}
        {...register('fullName')}
        data-testid='fullNameInput'
      />
      <FormInput
        errorText={errors.email?.message}
        placeholder={t('email')}
        {...register('email')}
        data-testid='emailInput'
      />
      <FormSelect
        errorText={errors.reason?.message}
        options={t.raw('reasons')}
        {...register('reason')}
        data-testid='reasonSelect'
      />
      <FormTextArea
        errorText={errors.message?.message}
        placeholder={t('message')}
        {...register('message')}
        maxLength={MESSAGE_LENGTH_CONSTRAINT}
        data-testid='messageTextarea'
      />
      <Button isDisabled={!isValid} isLoading={isLoading} type='submit'>
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
