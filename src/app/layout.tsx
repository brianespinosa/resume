import './global.scss';

import { Metadata } from 'next';
import { ReactElement } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: 'Not Found',
    template: '%s | Resume',
  },
  metadataBase: new URL('https://resume.bje.co/'),
  // Tell robots not to index OR follow links to this page
  robots: 'noindex, nofollow',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactElement;
}) {
  return (
    <html lang='en-US'>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
