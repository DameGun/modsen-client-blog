import type { MessagesType } from '@/types/i18n';

declare global {
  interface IntlMessages extends MessagesType {}
}
