import './global.scss';

import { Metadata } from 'next';
import { ReactElement } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import settings from '@/settings';

export const metadata: Metadata = {
  title: {
    default: settings.title.default,
    template: settings.title.template,
  },
  metadataBase: new URL(settings.metadataBase),
  robots: settings.robots,
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactElement;
}) {
  return (
    <html lang={settings.lang}>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
