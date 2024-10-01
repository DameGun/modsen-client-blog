import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { AllowedLocales } from '@/constants/i18n';

export const routing = defineRouting({
  locales: [AllowedLocales.DE, AllowedLocales.EN],
  defaultLocale: AllowedLocales.EN,
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
