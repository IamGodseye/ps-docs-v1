import type { ReactNode } from 'react';

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
  withBackground?: boolean;
}

export function HeroSection({ 
  children, 
  className = "", 
  withBackground = true 
}: HeroSectionProps) {
  return (
    <section className={`
      ${withBackground ? 'playsuper-hero-bg' : ''}
      relative py-20 px-6 text-center
      ${className}
    `}>
      <div className="container mx-auto max-w-4xl">
        {children}
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function FeatureCard({ 
  title, 
  description, 
  icon, 
  className = "" 
}: FeatureCardProps) {
  return (
    <div className={`playsuper-feature-card ${className}`}>
      {icon && (
        <div className="mb-4 text-2xl">
          {icon}
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

interface PathCardProps {
  title: string;
  description: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function PathCard({ 
  title, 
  description, 
  href, 
  className = "",
  onClick 
}: PathCardProps) {
  const CardComponent = href ? 'a' : 'div';
  
  return (
    <CardComponent 
      href={href}
      onClick={onClick}
      className={`playsuper-path-card ${className}`}
    >
      <h4>{title}</h4>
      <p>{description}</p>
    </CardComponent>
  );
}

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`gradient-text ${className}`}>
      {children}
    </span>
  );
}

export { HeroSection as default };
