import React from 'react';

import { Navbar } from '@showcase/ui';
import '@showcase/ui/styles.css';

import { LoadScriptComponent } from './script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <Navbar />
        <main>{children}</main>
        <LoadScriptComponent src="/assets/scripts/preline.js" />
      </body>
    </html>
  );
}
