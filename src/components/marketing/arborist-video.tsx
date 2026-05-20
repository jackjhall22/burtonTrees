"use client";

import { useRef, useState } from "react";
import { MaterialIcon } from "@/components/layout/material-icon";

export function ArboristVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  async function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
      setPlaying(true);
    } catch {
      // Autoplay may be blocked; user can tap play
    }
  }

  return (
    <section
      id="work"
      className="py-[--spacing-section] px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[1280px] mx-auto w-full"
    >
      <div className="text-center mb-[--spacing-stack-lg] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-on-surface mb-[--spacing-stack-sm] tracking-tight">
          See Our Arborists in Action
        </h2>
        <p className="text-base text-on-surface-variant">
          ISA-certified crews working safely at height — precision care you can
          trust with your property.
        </p>
      </div>

      <div className="relative w-full min-h-[280px] sm:min-h-[360px] md:min-h-[480px] rounded-xl overflow-hidden shadow-[--shadow-card] bg-surface-container-high">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => {
            void handlePlay();
          }}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/arborist-work.mp4" type="video/mp4" />
          <source src="/videos/arborist-work.mov" type="video/quicktime" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-on-surface/20 to-transparent pointer-events-none" />

        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-on-surface/30 hover:bg-on-surface/40 transition-colors"
            aria-label="Play arborist work video"
          >
            <span className="size-16 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg">
              <MaterialIcon name="play_arrow" filled className="text-4xl" />
            </span>
            <span className="text-sm font-semibold text-white tracking-wide">
              Play video
            </span>
          </button>
        )}

        <div className="absolute inset-x-0 bottom-0 z-[1] flex flex-wrap items-center gap-4 p-6 md:p-8 pointer-events-none">
          <div className="flex items-center gap-1.5 text-xs font-bold text-white/90 tracking-wide">
            <MaterialIcon name="verified" className="text-primary-fixed text-base" />
            ISA Certified
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-white/90 tracking-wide">
            <MaterialIcon name="shield" className="text-primary-fixed text-base" />
            Fully Insured
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-white/90 tracking-wide">
            <MaterialIcon name="eco" className="text-primary-fixed text-base" />
            Sustainable Practices
          </div>
        </div>
      </div>
    </section>
  );
}
