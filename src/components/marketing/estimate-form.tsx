"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { MaterialIcon } from "@/components/layout/material-icon";

const serviceOptions = [
  "Precision Trimming & Pruning",
  "Tree Removal",
  "Plant Health Care",
  "Storm / Emergency Response",
  "Stump Grinding",
  "Other",
];

const trustPoints = [
  { icon: "verified", text: "ISA-Certified Arborists" },
  { icon: "shield", text: "Fully Insured & Bonded" },
  { icon: "schedule", text: "Response Within 24 Hours" },
  { icon: "attach_money", text: "Free, No-Obligation Estimates" },
];

export function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="estimate"
      className="py-[--spacing-section] px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[1280px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[--spacing-gutter] items-start">
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <span className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-[--spacing-stack-md]">
              <MaterialIcon name="edit_note" className="text-base" />
              Free Estimate
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight mt-4 mb-[--spacing-stack-sm]">
              Get Your Free Tree Care Estimate
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Tell us about your property and we&apos;ll provide a detailed,
              no-obligation estimate within 24 hours. Our ISA-certified arborists
              assess every job on-site.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPoints.map((point) => (
              <div
                key={point.text}
                className="flex items-center gap-3 bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3"
              >
                <MaterialIcon
                  name={point.icon}
                  className="text-primary text-xl"
                />
                <span className="text-sm font-semibold text-on-surface">
                  {point.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="tel:18002878664"
              className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors"
            >
              <MaterialIcon name="call" className="text-primary text-xl" />
              <span className="text-sm font-semibold">1-800-BURTON-TREES</span>
            </Link>
            <Link
              href="mailto:info@burtonindustry.com"
              className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors"
            >
              <MaterialIcon name="mail" className="text-primary text-xl" />
              <span className="text-sm font-semibold">
                info@burtonindustry.com
              </span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {submitted ? (
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-10 md:p-12 shadow-[--shadow-card] text-center flex flex-col items-center gap-4">
              <div className="size-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
                <MaterialIcon name="check_circle" className="text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-on-surface">
                Estimate Request Received!
              </h3>
              <p className="text-base text-on-surface-variant max-w-md">
                Thank you! One of our certified arborists will review your
                request and reach out within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-primary font-semibold text-sm hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 md:p-10 shadow-[--shadow-card] flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface">
                    Full Name
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="John Burton"
                    className="bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface">
                    Phone
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="(512) 555-0199"
                    className="bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface">
                  Email
                </span>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface">
                  Service Type
                </span>
                <select
                  required
                  defaultValue=""
                  className="bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface">
                  Property Address
                </span>
                <input
                  type="text"
                  required
                  placeholder="123 Oak Lane, Austin, TX 78701"
                  className="bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface">
                  Describe Your Needs
                </span>
                <textarea
                  rows={4}
                  placeholder="Tell us about the tree(s), any concerns, and your timeline..."
                  className="bg-surface border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                />
              </label>

              <button
                type="submit"
                className="mt-2 bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold text-sm shadow-sm hover:opacity-90 transition-opacity border-t border-white/20 flex items-center justify-center gap-2"
              >
                <MaterialIcon name="send" className="text-lg" />
                Request Free Estimate
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
