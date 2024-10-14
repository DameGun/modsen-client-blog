import type { ChangeEvent } from 'react';
import { useTransition } from 'react';

import { useLocale, useTranslations } from 'next-intl';

import type { Locales } from '@/constants/i18n';
import { routing, usePathname, useRouter } from '@/i18n/routing';

import styles from './styles.module.scss';

export function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const defaultLocale = useLocale();
  const t = useTranslations('LocaleSwitcher');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as Locales;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <select
      className={styles.localeSwitcher}
      defaultValue={defaultLocale}
      disabled={isPending}
      onChange={handleSelectChange}
      data-testid='localeSwitcher'
    >
      {routing.locales.map((current) => (
        <option key={current} value={current}>
          {t(current)}
        </option>
      ))}
    </select>
  );
}
