import type { PropsWithChildren } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { Footer, Header } from '@/components/common';
import { senFont } from '@/styles/fonts';
import type { LocaleLayoutParams } from '@/types/i18n';

import '@/styles/globals.scss';

type LocaleLayoutProps = PropsWithChildren & {
  params: LocaleLayoutParams;
};

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={senFont.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
