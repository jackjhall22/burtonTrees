"use client";

import Link from "next/link";
import {
  Phone,
  Info,
  Award,
  Shield,
  Timer,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function EmergencyHero() {
  return (
    <section className="px-[var(--spacing-margin)] pt-8 pb-[var(--spacing-section)] grid grid-cols-1 lg:grid-cols-12 gap-[var(--spacing-gutter)] items-center">
      <Reveal className="lg:col-span-6 flex flex-col gap-8 z-10">
        <div className="inline-flex items-center gap-2 bg-error-soft text-error px-4 py-2 rounded-full w-fit">
          <Timer size={14} />
          <span className="text-xs font-mono font-bold uppercase tracking-wide">
            Rapid Response Team Activated
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-light text-text tracking-tight leading-tight">
          24/7 Emergency Tree Service &amp; Storm Recovery
        </h1>

        <p className="text-lg text-text-muted max-w-xl leading-relaxed">
          When severe weather strikes, our certified arborists and heavy-duty
          crews are on standby. We safely clear dangerous fallen trees from
          homes, roads, and structures with precision and speed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link
            href="tel:18002878664"
            className="bg-error text-on-error px-8 py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:bg-error/90 transition-colors cursor-pointer"
          >
            <Phone size={16} />
            Call Now: 1-800-BURTON
          </Link>
          <Link
            href="#cleanup-process"
            className="border border-border-strong text-text px-8 py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
          >
            <Info size={16} />
            Our Process
          </Link>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-text-faint">
          <div className="flex items-center gap-1.5">
            <Award size={14} className="text-primary" />
            ISA Certified
          </div>
          <div className="flex items-center gap-1.5">
            <Shield size={14} className="text-primary" />
            Fully Insured
          </div>
          <div className="flex items-center gap-1.5">
            <Timer size={14} className="text-primary" />
            Rapid Dispatch
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
        <div
          id="dispatch-form"
          className="bg-surface-card border border-border rounded-xl p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-error" />
          <h2 className="text-2xl font-display font-medium text-text mb-2 mt-4">
            Request Urgent Dispatch
          </h2>
          <p className="text-base text-text-muted mb-8">
            Fill out this form for priority routing. We will contact you within
            15 minutes.
          </p>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono uppercase tracking-widest text-text-faint">
                  Full Name
                </label>
                <input
                  className="w-full bg-surface-raised border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono uppercase tracking-widest text-text-faint">
                  Phone Number
                </label>
                <input
                  className="w-full bg-surface-raised border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                  placeholder="(555) 000-0000"
                  type="tel"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono uppercase tracking-widest text-text-faint">
                Property Address
              </label>
              <input
                className="w-full bg-surface-raised border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                placeholder="123 Main St, City, Zip"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono uppercase tracking-widest text-text-faint">
                Situation Description
              </label>
              <textarea
                className="w-full bg-surface-raised border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors resize-none"
                placeholder="E.g., Large oak branch fell on the roof..."
                rows={3}
              />
            </div>

            <div className="flex items-start gap-2 mt-2">
              <input
                className="mt-1 rounded border-border bg-surface-raised accent-error cursor-pointer"
                id="urgent"
                type="checkbox"
              />
              <label
                className="text-xs text-text-muted cursor-pointer"
                htmlFor="urgent"
              >
                I confirm this is an emergency requiring immediate attention.
              </label>
            </div>

            <button
              className="w-full bg-text text-surface py-4 rounded-full font-semibold text-sm mt-2 hover:bg-text/90 transition-colors cursor-pointer"
              type="button"
            >
              Submit Dispatch Request
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
