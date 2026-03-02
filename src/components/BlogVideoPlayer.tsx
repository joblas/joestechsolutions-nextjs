"use client";

import { useEffect, useRef } from "react";

interface BlogVideoPlayerProps {
  src: string;
  className?: string;
}

export function BlogVideoPlayer({ src, className = "" }: BlogVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay blocked — user will need to tap
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      preload="metadata"
      className={className}
      style={{ width: "100%", borderRadius: "12px", margin: "2rem 0" }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
