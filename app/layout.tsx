import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { source } from '@/lib/source'
import { Providers } from '@/lib/providers'
import 'fumadocs-ui/style.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <DocsLayout tree={source.pageTree}>
            {children}
          </DocsLayout>
        </Providers>
      </body>
    </html>
  )
}