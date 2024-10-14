import type { PropsWithChildren } from 'react';

export const metadata = {
  title: 'Modsen Client Blog',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return children;
}
