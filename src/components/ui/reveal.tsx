"use client";

import { type ReactNode, useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 30,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? false : { opacity: 0, y }}
      animate={
        prefersReduced
          ? { opacity: 1, y: 0 }
          : isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y }
      }
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
