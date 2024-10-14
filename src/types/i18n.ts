import type en from '@/public/localizations/en.json';

type LocaleLayoutParams = {
  locale: string;
};

type MessagesType = typeof en;

type MetadataWithLocaleProps = {
  params: {
    locale: string;
  };
};

export type { LocaleLayoutParams, MessagesType, MetadataWithLocaleProps };
