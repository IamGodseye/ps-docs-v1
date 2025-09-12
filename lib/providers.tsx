'use client'

import { RootProvider } from 'fumadocs-ui/provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return <RootProvider>{children}</RootProvider>
}