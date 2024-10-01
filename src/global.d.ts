import en from '@/i18n/localizations/en.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
