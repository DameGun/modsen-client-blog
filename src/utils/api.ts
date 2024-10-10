import { API_URL } from '@/constants/environment';

export const fetchEnhanced = (path: string, params?: RequestInit) =>
  fetch(`${API_URL}${path}`, params);
