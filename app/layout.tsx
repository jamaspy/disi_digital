import React from 'react';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Poppins } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'disi digital',
  description: 'Northern Beaches Digital Agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
