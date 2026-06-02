"use client";

import { useEffect, useRef, useState } from "react";

type AvatarProps = {
  src: string;
  alt: string;
  initials: string;
  className?: string;
};

// Shows the photo at `src` if it loads; otherwise a styled initials avatar.
// Drop a square image at public/profile.jpg to enable the photo.
export function Avatar({ src, alt, initials, className = "" }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If the image already failed before hydration, onError won't fire — detect it.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/25 to-accent/5 ${className}`}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-mono text-5xl font-semibold text-accent sm:text-6xl">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
