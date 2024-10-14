import type { ReactNode } from 'react';

import { render } from '@testing-library/react';
import type { AbstractIntlMessages } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';

import { LocalesEnum } from '@/constants/i18n';

import enMessages from '../../public/localizations/en.json';

jest.mock('next-intl/navigation', () => ({
  ...jest.requireActual('next-intl/navigation'),
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  }),
  usePathname: () => '/mocked-path',
}));

export async function renderWithIntl(children: ReactNode) {
  const locale = LocalesEnum.EN;

  return render(
    <NextIntlClientProvider
      messages={enMessages as unknown as AbstractIntlMessages}
      locale={locale}
    >
      {children}
    </NextIntlClientProvider>
  );
}
