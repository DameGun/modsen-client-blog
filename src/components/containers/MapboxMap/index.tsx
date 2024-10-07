'use client';

import { useEffect, useRef, useState } from 'react';

import { Map } from 'mapbox-gl';
import { useLocale, useTranslations } from 'next-intl';

import { MAPBOX_PUBLIC_KEY } from '@/constants/environment';
import { DEFAULT_MAP_STYLE_URL, DefaultMapCenter, MAP_DEFAULT_ZOOM } from '@/constants/map';
import { prepareMapInstance } from '@/utils/map';

import styles from './styles.module.scss';

import 'mapbox-gl/dist/mapbox-gl.css';

export function MapboxMap() {
  const locale = useLocale() as keyof typeof DefaultMapCenter;
  const t = useTranslations();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;
    if (!mapContainerRef.current) return;

    const map = new Map({
      accessToken: MAPBOX_PUBLIC_KEY,
      container: mapContainerRef.current,
      style: DEFAULT_MAP_STYLE_URL,
      center: DefaultMapCenter[locale],
      zoom: MAP_DEFAULT_ZOOM,
    });

    map.on('load', ({ target }) => prepareMapInstance(target, t));

    map.once('load', () => setIsLoading(false));

    return () => map.remove();
  }, [locale, t, isLoading]);

  return (
    <div ref={mapContainerRef} className={styles.mapContainer}>
      {isLoading && (
        <span className={styles.mapLoading}>
          <h5>{t('Departments.loadingHolder')}</h5>
        </span>
      )}
    </div>
  );
}
