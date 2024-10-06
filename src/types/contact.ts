type ContactFormType = {
  fullName: string;
  email: string;
  reason: string;
  message: string;
};

type FooterContactFormType = {
  email: string;
};

type SendEmailProps =
  | {
      data: ContactFormType;
      emailType: 'contact';
    }
  | {
      data: FooterContactFormType;
      emailType: 'news';
    };

export type { ContactFormType, FooterContactFormType, SendEmailProps };
