import createMiddleware from 'next-intl/middleware';

import { AllowedLocales } from '@/constants/i18n';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', `/(${AllowedLocales.DE}|${AllowedLocales.EN})/:path*`],
};
