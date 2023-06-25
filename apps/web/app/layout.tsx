import React from 'react';

import { Navbar } from '@showcase/ui';
import '@showcase/ui/styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
