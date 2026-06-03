"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

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
      /* autoplay blocked */
    }
  }

  return (
    <section
      id="work"
      className="py-[var(--spacing-section)] px-[var(--spacing-margin)] max-w-[var(--spacing-container)] mx-auto w-full"
    >
      <Reveal>
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            In Action
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-text tracking-tight leading-tight">
            See our arborists at work
          </h2>
          <p className="mt-4 text-base text-text-muted leading-relaxed">
            ISA-certified crews working safely at height — precision care you can
            trust with your property.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-surface-card">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => void handlePlay()}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/arborist-work.mp4" type="video/mp4" />
            <source src="/videos/arborist-work.mov" type="video/quicktime" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-surface/20 pointer-events-none" />

          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-surface/30 hover:bg-surface/40 transition-colors cursor-pointer"
              aria-label="Play arborist work video"
            >
              <span className="size-16 rounded-full bg-text/90 text-surface flex items-center justify-center backdrop-blur-sm">
                <Play size={24} className="ml-0.5" />
              </span>
            </button>
          )}

          <div className="absolute inset-x-0 bottom-0 z-[1] flex flex-wrap items-center gap-6 p-6 md:p-8 pointer-events-none">
            {["ISA Certified", "Fully Insured", "Sustainable Practices"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono uppercase tracking-widest text-text/80"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
