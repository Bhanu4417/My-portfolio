"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Using a module-level variable for SSR safety, but we'll override it with sessionStorage on the client
let isBrowserLoaded = false;

export default function ProfileImage({ src, alt, className, sizes, priority = false }: any) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(`img-cache-${src}`)) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <>
      {!isLoaded && <div className="absolute inset-0 bg-zinc-200/80 dark:bg-zinc-800/80 animate-pulse rounded-full sm:rounded-3xl z-[5]"></div>}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 relative z-10`}
        priority={priority}
        onLoad={() => {
          setIsLoaded(true);
          if (typeof window !== 'undefined') {
            sessionStorage.setItem(`img-cache-${src}`, 'true');
          }
        }}
      />
    </>
  );
}
