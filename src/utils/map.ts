import type { LngLatLike, Map } from 'mapbox-gl';
import { Marker, Popup } from 'mapbox-gl';
import type { useTranslations } from 'next-intl';

import { GERMANY_DEPARTMENT, POLAND_DEPARTMENT, UNITED_KINGDOM_DEPARTMENT } from '@/constants/map';
import type { MapFeatureProperties } from '@/types/map';

export const getGeoData = (
  intl: ReturnType<typeof useTranslations>
): GeoJSON.FeatureCollection<GeoJSON.Geometry, MapFeatureProperties> => ({
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        title: intl('Departments.Germany.title'),
        description: intl('Departments.Germany.description'),
      },
      geometry: { coordinates: GERMANY_DEPARTMENT as number[], type: 'Point' },
    },
    {
      type: 'Feature',
      properties: {
        title: intl('Departments.Poland.title'),
        description: intl('Departments.Poland.description'),
      },
      geometry: { coordinates: POLAND_DEPARTMENT as number[], type: 'Point' },
    },
    {
      type: 'Feature',
      properties: {
        title: intl('Departments.UnitedKingdom.title'),
        description: intl('Departments.UnitedKingdom.description'),
      },
      geometry: { coordinates: UNITED_KINGDOM_DEPARTMENT as number[], type: 'Point' },
    },
  ],
});

const pointPopupTextTemplate = ({ title, description }: MapFeatureProperties) =>
  `<h6>${title}</h6><p>${description}</p>`;

export function prepareMapInstance(map: Map, intl: ReturnType<typeof useTranslations>) {
  const data = getGeoData(intl);

  for (const feature of data.features) {
    const popup = new Popup().setHTML(pointPopupTextTemplate(feature.properties));

    if (feature.geometry.type === 'Point') {
      new Marker()
        .setLngLat(feature.geometry.coordinates as LngLatLike)
        .setPopup(popup)
        .addTo(map);
    }
  }
}
