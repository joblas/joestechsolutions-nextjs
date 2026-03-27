"use client";

import Image from "next/image";

interface BlogImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function BlogImage({ src, alt, width, height, className = "" }: BlogImageProps) {
  return (
    <div className="my-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className || "w-full rounded-xl"}
        style={{ height: "auto" }}
      />
    </div>
  );
}
