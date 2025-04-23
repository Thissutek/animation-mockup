// src/components/ScrollVideoPlayer.js
"use client";

import { useRef, useEffect, useState } from "react";

export default function ScrollVideoPlayer({
  videoSrc = "/blender-animation.mp4",
  scrollHeight = 300, // Height in vh units to control animation (300 = 3x viewport height)
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    const container = containerRef.current;

    if (!videoElement || !container) return;

    // Handle video loaded event
    const handleVideoLoaded = () => {
      setIsLoaded(true);
      videoElement.pause();
    };

    videoElement.addEventListener("loadeddata", handleVideoLoaded);

    // Scroll handler function
    const handleScroll = () => {
      if (!isLoaded) return;

      // Get container position
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress
      let progress = 0;

      if (containerTop <= 0) {
        // Container has started entering viewport
        progress = Math.min(1, Math.abs(containerTop) / (viewportHeight * 2));
      }

      // Set video time based on scroll position
      if (videoElement.duration) {
        videoElement.currentTime = progress * videoElement.duration;
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Initial call
    handleScroll();

    return () => {
      videoElement.removeEventListener("loadeddata", handleVideoLoaded);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${scrollHeight}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <video
          ref={videoRef}
          className="max-w-4xl w-full"
          src={videoSrc}
          muted
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
}
