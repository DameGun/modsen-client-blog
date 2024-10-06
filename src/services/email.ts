import { send } from '@emailjs/browser';

import {
  EMAIL_CONTACT_TEMPLATE_ID,
  EMAIL_NEWS_TEMPLATE_ID,
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
} from '@/constants/environment';
import type { SendEmailProps } from '@/types/contact';

export async function sendEmail({ data, emailType }: SendEmailProps) {
  const serviceId = EMAIL_SERVICE_ID;
  const templateId = emailType === 'news' ? EMAIL_NEWS_TEMPLATE_ID : EMAIL_CONTACT_TEMPLATE_ID;
  const publicKey = EMAIL_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Some of email credentials are missing');
  }

  return await send(serviceId, templateId, data, { publicKey });
}
