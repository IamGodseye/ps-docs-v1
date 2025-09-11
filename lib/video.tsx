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
        <video
          width={width}
          height={height}
          controls={controls}
          autoPlay={autoplay}
          muted={muted}
          poster={poster}
          className="w-full h-auto"
          preload="metadata"
          playsInline
        >
          <source src={src} type="video/mp4" />
          <p className="text-fd-muted-foreground p-4">
            Your browser does not support the video tag. 
            <a href={src} className="text-fd-primary hover:underline ml-1">
              Download the video instead
            </a>
          </p>
        </video>
        {/* Optional: Add loading overlay */}
        <div className="absolute inset-0 bg-fd-muted/20 flex items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none">
          <div className="w-8 h-8 border-2 border-fd-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}

export default Video;
