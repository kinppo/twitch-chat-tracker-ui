import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import SessionProvider from './contexts/SessionProvider';
import ThemeContextProvider from './contexts/ThemeContext';
import ToastContextProvider from './contexts/ToastContext';
import './styles/globals.scss';

const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vercel.com'),
  title: 'Twilog - Track Your Friends in Twitch',
  description: 'Twilog official website',
  openGraph: {
    title: 'Twilog',
    description: 'Twilog official website',
    url: 'https://vercel.app',
    siteName: 'Next',
    images: [
      {
        url: 'https://vercel.app/og.jpg',
        width: 1200,
        height: 700,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`flex min-h-[100svh] flex-col bg-background  ${montserrat.className}`}
      >
        <SessionProvider>
          <ThemeContextProvider>
            <ToastContextProvider>{children}</ToastContextProvider>
          </ThemeContextProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
