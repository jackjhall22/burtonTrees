"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative w-full h-dvh min-h-[600px] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/19530.mov" type="video/quicktime" />
        <source src="/videos/arborist-work.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/30 to-surface" />

      <div className="relative z-10 w-full max-w-[var(--spacing-container)] mx-auto px-[var(--spacing-margin)] flex flex-col items-center text-center">
        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6"
        >
          ISA-Certified Arborists &bull; Central Texas
        </motion.p>

        <motion.h1
          initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-text leading-[1.1] tracking-tight max-w-4xl"
        >
          Professional tree care,
          <br />
          <span className="text-text-muted">rooted in integrity</span>
        </motion.h1>

        <motion.p
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-lg text-text-muted max-w-xl leading-relaxed"
        >
          Tree preservation, precision care, and storm response — trusted by
          homeowners and municipalities across Central Texas.
        </motion.p>

        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link
            href="#estimate"
            className="bg-text text-surface px-8 py-4 rounded-full font-semibold text-sm hover:bg-text/90 transition-colors"
          >
            Request Free Estimate
          </Link>
          <Link
            href="/emergency"
            className="border border-border-strong text-text px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/5 transition-colors"
          >
            Emergency Service
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={prefersReduced ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <Link
          href="#services"
          className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-xs font-mono uppercase tracking-widest">
            Explore
          </span>
          <ChevronDown size={18} className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
