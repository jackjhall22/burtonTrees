"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReduced = useReducedMotion();
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isInView || hasRun.current || !ref.current) return;
    hasRun.current = true;

    const el = ref.current;

    if (prefersReduced) {
      el.textContent = `${prefix}${end}${suffix}`;
      return;
    }

    const startTime = performance.now();
    const durationMs = duration * 1000;

    function step(now: number) {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${prefix}${Math.round(eased * end)}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [isInView, end, duration, prefersReduced, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
