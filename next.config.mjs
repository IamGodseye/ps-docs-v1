import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Remove styled-jsx transpilation - Next.js 15+ handles natively
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1btycpz485vry.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'playsuper.club',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.playsuper.club',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withMDX(config);
