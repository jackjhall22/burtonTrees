"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Send,
  CheckCircle,
  Award,
  Shield,
  Clock,
  DollarSign,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const serviceOptions = [
  "Precision Trimming & Pruning",
  "Tree Removal",
  "Plant Health Care",
  "Storm / Emergency Response",
  "Stump Grinding",
  "Other",
];

const trustPoints = [
  { icon: Award, text: "ISA-Certified Arborists" },
  { icon: Shield, text: "Fully Insured & Bonded" },
  { icon: Clock, text: "Response Within 24 Hours" },
  { icon: DollarSign, text: "Free, No-Obligation Estimates" },
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
      className="py-[var(--spacing-section)] px-[var(--spacing-margin)] max-w-[var(--spacing-container)] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <Reveal className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Free Estimate
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-text tracking-tight leading-tight">
              Get your free
              <br />
              tree care estimate
            </h2>
            <p className="mt-4 text-base text-text-muted leading-relaxed">
              Tell us about your property and we&apos;ll provide a detailed,
              no-obligation estimate within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trustPoints.map((point) => {
              const PointIcon = point.icon;
              return (
                <div
                  key={point.text}
                  className="flex items-center gap-3 bg-surface-card border border-border rounded-lg px-4 py-3"
                >
                  <PointIcon
                    size={16}
                    strokeWidth={1.5}
                    className="text-primary shrink-0"
                  />
                  <span className="text-sm text-text-muted">{point.text}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="tel:18002878664"
              className="flex items-center gap-3 text-text-muted hover:text-text transition-colors"
            >
              <Phone size={16} className="text-primary" />
              <span className="text-sm font-medium">1-800-BURTON-TREES</span>
            </Link>
            <Link
              href="mailto:info@burtonindustry.com"
              className="flex items-center gap-3 text-text-muted hover:text-text transition-colors"
            >
              <Mail size={16} className="text-primary" />
              <span className="text-sm font-medium">
                info@burtonindustry.com
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
          {submitted ? (
            <div className="bg-surface-card border border-border rounded-xl p-10 md:p-12 text-center flex flex-col items-center gap-4">
              <div className="size-16 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-2xl font-display font-medium text-text">
                Estimate Request Received
              </h3>
              <p className="text-base text-text-muted max-w-md">
                Thank you! One of our certified arborists will review your
                request and reach out within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-accent font-medium text-sm hover:underline cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-surface-card border border-border rounded-xl p-8 md:p-10 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-mono uppercase tracking-widest text-text-faint">
                    Full Name
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="John Burton"
                    className="bg-surface-raised border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-mono uppercase tracking-widest text-text-faint">
                    Phone
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="(512) 555-0199"
                    className="bg-surface-raised border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-mono uppercase tracking-widest text-text-faint">
                  Email
                </span>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="bg-surface-raised border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-mono uppercase tracking-widest text-text-faint">
                  Service Type
                </span>
                <select
                  required
                  defaultValue=""
                  className="bg-surface-raised border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors appearance-none cursor-pointer"
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
                <span className="text-xs font-mono uppercase tracking-widest text-text-faint">
                  Property Address
                </span>
                <input
                  type="text"
                  required
                  placeholder="123 Oak Lane, Austin, TX 78701"
                  className="bg-surface-raised border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-mono uppercase tracking-widest text-text-faint">
                  Describe Your Needs
                </span>
                <textarea
                  rows={4}
                  placeholder="Tell us about the tree(s), any concerns, and your timeline..."
                  className="bg-surface-raised border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-faint focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors resize-none"
                />
              </label>

              <button
                type="submit"
                className="mt-2 bg-text text-surface px-8 py-4 rounded-full font-semibold text-sm hover:bg-text/90 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={16} />
                Request Free Estimate
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
