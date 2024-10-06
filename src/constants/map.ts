import { LngLatLike } from 'mapbox-gl';

import { LocalesEnum } from './i18n';

export const GERMANY_DEPARTMENT: LngLatLike = [13.377892577758574, 52.51878573941662];
export const POLAND_DEPARTMENT: LngLatLike = [21.01520590687802, 52.24981845773757];
export const UNITED_KINGDOM_DEPARTMENT: LngLatLike = [-0.14277600047833214, 51.50240151303731];
export const MAP_DEFAULT_ZOOM = 7;
export const DEFAULT_MAP_STYLE_URL = 'mapbox://styles/mapbox/streets-v12';

export const DefaultMapCenter = {
  [LocalesEnum.EN]: UNITED_KINGDOM_DEPARTMENT,
  [LocalesEnum.DE]: GERMANY_DEPARTMENT,
  [LocalesEnum.PL]: POLAND_DEPARTMENT,
};
