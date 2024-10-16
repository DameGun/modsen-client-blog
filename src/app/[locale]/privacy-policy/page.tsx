import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Article, List, SectionHeader } from '@/components/ui';
import extendsStyles from '@/styles/abstracts/extends.module.scss';
import type { MetadataWithLocaleProps } from '@/types/i18n';

export async function generateMetadata({ params: { locale } }: MetadataWithLocaleProps) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('privacyPolicy'),
  };
}

export default function PrivacyPolicyPage() {
  const t = useTranslations('PrivacyPolicy');

  return (
    <>
      <SectionHeader>
        <h1>{t('title')}</h1>
        <p className={extendsStyles.body1}>{t('lastUpdatedAt')}</p>
      </SectionHeader>
      <section className={extendsStyles.containerSm}>
        <Article>
          <h1>{t('Introduction.title')}</h1>
          <p>{t('Introduction.content')}</p>
        </Article>
        <Article>
          <h2>{t('InfoWeCollect.title')}</h2>
          <p>{t('InfoWeCollect.content')}</p>
          <List list={t.raw('InfoWeCollect.list')} />
        </Article>
        <Article>
          <h2>{t('DataUsage.title')}</h2>
          <p>{t('DataUsage.content')}</p>
          <List list={t.raw('DataUsage.list')} />
        </Article>
        <Article>
          <h2>{t('DataRetention.title')}</h2>
          <p>{t('DataRetention.content')}</p>
        </Article>
        <Article>
          <h2>{t('SharingYourData.title')}</h2>
          <p>{t('SharingYourData.content')}</p>
          <List list={t.raw('SharingYourData.list')} />
        </Article>
      </section>
    </>
  );
}
