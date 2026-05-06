"use client";

import Link from "next/link";
import { MaterialIcon } from "@/components/layout/material-icon";

export function EmergencyHero() {
  return (
    <section className="px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] pt-[--spacing-stack-lg] pb-[--spacing-section] grid grid-cols-1 lg:grid-cols-12 gap-[--spacing-gutter] items-center">
      {/* Left: Urgency Copy */}
      <div className="lg:col-span-6 flex flex-col gap-[--spacing-stack-lg] z-10">
        <div className="inline-flex items-center gap-2 bg-error-container text-on-error-container px-4 py-2 rounded-full w-fit">
          <MaterialIcon name="storm" filled className="text-base" />
          <span className="text-xs font-bold uppercase tracking-wide">
            Rapid Response Team Activated
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
          24/7 Emergency Tree Service &amp; Storm Recovery
        </h1>

        <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
          When severe weather strikes, our certified arborists and heavy-duty
          crews are on standby. We safely clear dangerous fallen trees from
          homes, roads, and structures with precision and speed.
        </p>

        <div className="flex flex-col sm:flex-row gap-[--spacing-stack-md] pt-[--spacing-stack-sm]">
          <Link
            href="tel:18002878664"
            className="bg-error text-on-error px-8 py-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(186,26,26,0.2)] hover:-translate-y-0.5 transition-transform border-t border-white/20 min-h-12"
          >
            <MaterialIcon name="call" />
            Call Now: 1-800-BURTON
          </Link>
          <Link
            href="#cleanup-process"
            className="bg-surface text-primary border border-outline-variant px-8 py-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors min-h-12"
          >
            <MaterialIcon name="info" />
            Our Process
          </Link>
        </div>

        <div className="flex items-center gap-4 pt-[--spacing-stack-sm] text-xs font-bold text-on-surface-variant tracking-wide">
          <div className="flex items-center gap-1">
            <MaterialIcon name="verified" className="text-primary text-base" />
            ISA Certified
          </div>
          <div className="flex items-center gap-1">
            <MaterialIcon name="shield" className="text-primary text-base" />
            Fully Insured
          </div>
          <div className="flex items-center gap-1">
            <MaterialIcon name="timer" className="text-primary text-base" />
            Rapid Dispatch
          </div>
        </div>
      </div>

      {/* Right: Dispatch Form */}
      <div
        id="dispatch-form"
        className="lg:col-span-5 lg:col-start-8 bg-surface border border-outline-variant rounded-xl p-[--spacing-gutter] shadow-[0_12px_40px_rgba(31,93,58,0.08)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-error" />
        <h2 className="text-2xl font-semibold text-on-surface mb-[--spacing-stack-sm] mt-2">
          Request Urgent Dispatch
        </h2>
        <p className="text-base text-on-surface-variant mb-[--spacing-stack-lg]">
          Fill out this form for priority routing. We will contact you within 15
          minutes.
        </p>

        <form className="flex flex-col gap-[--spacing-stack-md]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[--spacing-stack-md]">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-on-surface tracking-wide">
                Full Name
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-on-surface tracking-wide">
                Phone Number
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="(555) 000-0000"
                type="tel"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-on-surface tracking-wide">
              Property Address
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder="123 Main St, City, Zip"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-on-surface tracking-wide">
              Situation Description (Brief)
            </label>
            <textarea
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder="E.g., Large oak branch fell on the roof..."
              rows={3}
            />
          </div>

          <div className="flex items-start gap-2 mt-2">
            <input
              className="mt-1 border-outline-variant rounded text-error focus:ring-error"
              id="urgent"
              type="checkbox"
            />
            <label
              className="text-xs font-bold text-on-surface-variant cursor-pointer tracking-wide"
              htmlFor="urgent"
            >
              I confirm this is an emergency requiring immediate attention.
            </label>
          </div>

          <button
            className="w-full bg-primary text-on-primary py-4 rounded-lg font-semibold text-sm mt-[--spacing-stack-sm] hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-md border-t border-white/20"
            type="button"
          >
            Submit Dispatch Request
          </button>
        </form>
      </div>
    </section>
  );
}
