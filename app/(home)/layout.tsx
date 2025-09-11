import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { LayoutProps } from '@/.next/types/app/(home)/layout';
export default function Layout({ children }: LayoutProps) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
