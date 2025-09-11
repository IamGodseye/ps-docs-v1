import { LayoutProps } from '@/.next/types/app/layout';
import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PlaySuper Docs',
  description: 'Documentation for PlaySuper - Boost retention with real rewards',
  icons: {
    icon: '/ps-logo.png',
    shortcut: '/ps-logo.png',
    apple: '/ps-logo.png',
  },
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/ps-logo.png" />
        <link rel="apple-touch-icon" href="/ps-logo.png" />
      </head>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
