import type { ReactNode } from 'react';

interface EmbedProps {
  src: string;
  title?: string;
  description?: ReactNode;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function Embed({
  src,
  title,
  description,
  width = "100%",
  height = "500px",
  className = "",
}: EmbedProps) {
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
        <iframe
          src={src}
          width={width}
          height={height}
          className="w-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Embed;
