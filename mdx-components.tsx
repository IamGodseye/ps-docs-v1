import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Video } from '@/lib/video';
import { Embed } from '@/lib/embed';
import { OptimizedImage } from '@/lib/optimized-image';
import { HeroSection, FeatureCard, PathCard, GradientText } from '@/lib/hero-components';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    // Custom components for your docs
    Video,
    Embed,
    OptimizedImage,
    HeroSection,
    FeatureCard,
    PathCard,
    GradientText,
    ...components,
  } as MDXComponents;
}
