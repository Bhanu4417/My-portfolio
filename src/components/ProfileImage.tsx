"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Global cache to remember if the image was already loaded during this session
const imageCache = new Set<string>();

export default function ProfileImage({ src, alt, className, sizes, priority = false }: any) {
  const [isLoaded, setIsLoaded] = useState(() => imageCache.has(src));

  return (
    <>
      {!isLoaded && <div className="absolute inset-0 bg-zinc-200/80 dark:bg-zinc-800/80 animate-pulse rounded-full sm:rounded-3xl"></div>}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        priority={priority}
        onLoad={() => {
          setIsLoaded(true);
          imageCache.add(src);
        }}
      />
    </>
  );
}
