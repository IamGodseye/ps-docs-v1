import type { ReactNode } from 'react';
import Image from 'next/image';

interface VideoProps {
  src: string;
  title?: string;
  description?: ReactNode;
  poster?: string;
  width?: string | number;
  height?: string | number;
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

export function Video({
  src,
  title,
  description,
  poster,
  width = "100%",
  height = "auto",
  autoplay = false,
  muted = false,
  controls = true,
  className = "",
}: VideoProps) {
  // Create video props object to ensure consistent serialization
  const videoProps = {
    width,
    height,
    controls,
    muted,
    poster,
    className: "w-full h-auto",
    preload: "metadata" as const,
    playsInline: true,
    ...(autoplay && muted ? { autoPlay: true } : {}), // Only autoplay if muted
  };

  return (
    <div className={`my-6 ${className}`}>
      {title && (
        <h4 className="text-lg font-semibold mb-2 text-fd-foreground">
          {title}
        </h4>
      )}
      {description && (
        <p className="text-sm text-fd-muted-foreground mb-3">
          {description}
        </p>
      )}
      <div className="relative rounded-lg overflow-hidden border border-fd-border bg-fd-card shadow-sm">
        <video {...videoProps}>
          <source src={src} type="video/mp4" />
          <p className="text-fd-muted-foreground p-4">
            Your browser does not support the video tag. 
            <a href={src} className="text-fd-primary hover:underline ml-1">
              Download the video instead
            </a>
          </p>
        </video>
      </div>
    </div>
  );
}

export default Video;
