import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { AllowedLocales } from '@/constants/i18n';

import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as AllowedLocales)) notFound();

  return {
    messages: (await import(`@/i18n/localizations/${locale}.json`)).default,
  };
});
