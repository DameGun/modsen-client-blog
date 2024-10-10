export const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
export const EMAIL_CONTACT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_CONTACT_TEMPLATE_ID;
export const EMAIL_NEWS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_NEWS_TEMPLATE_ID;
export const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
export const MAPBOX_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

export const API_URL =
  process.env.NODE_ENV === 'production'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL ?? process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_API_URL;
