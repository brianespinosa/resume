import './layout.scss';

import { Metadata } from 'next';
import { ReactElement } from 'react';

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
        <header>
          <h1>Resume</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
