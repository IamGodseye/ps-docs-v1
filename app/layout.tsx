import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { source } from '@/lib/source'
import { Providers } from '@/lib/providers'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import 'fumadocs-ui/style.css'
import './global.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'PlaySuper Documentation',
    template: '%s | PlaySuper',
  },
  description: 'Complete integration guide and API documentation for PlaySuper rewards platform',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function markHydrated() {
                  document.documentElement.classList.add('hydrated');
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', markHydrated);
                } else {
                  markHydrated();
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          <DocsLayout tree={source.pageTree}>
            {children}
          </DocsLayout>
        </Providers>
      </body>
    </html>
  )
}