import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Remove styled-jsx transpilation - Next.js 15+ handles natively
};

export default withMDX(config);
