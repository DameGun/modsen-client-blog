import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { Locales } from '@/constants/i18n';

import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as Locales)) notFound();

  return {
    messages: (await import(`/public/localizations/${locale}.json`)).default,
  };
});
