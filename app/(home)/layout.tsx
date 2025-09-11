import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { LayoutProps } from '@/.next/types/app/(home)/layout';
import Image from 'next/image';

export default function Layout({ children }: LayoutProps) {
  return (
    <HomeLayout 
      {...baseOptions()}
      nav={{
        ...baseOptions().nav,
        title: (
          <div className="flex items-center gap-3">
            <Image
              src="/ps-logo.png"
              alt="PlaySuper Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="font-semibold text-lg">PlaySuper</span>
          </div>
        ),
      }}
    >
      {children}
    </HomeLayout>
  );
}
