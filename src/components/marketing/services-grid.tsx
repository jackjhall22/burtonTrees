"use client";

import Link from "next/link";
import { Scissors, Skull, HeartPulse, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

const services = [
  {
    num: "001",
    title: "Precision Trimming & Pruning",
    description:
      "Enhance tree health, safety, and aesthetics with structural pruning performed to ISA standards.",
    icon: Scissors,
    href: "#",
  },
  {
    num: "002",
    title: "Safe Removals",
    description:
      "Technical dismantling of dead, diseased, or hazardous trees in tight urban spaces.",
    icon: Skull,
    href: "#",
  },
  {
    num: "003",
    title: "Plant Health Care",
    description:
      "Disease diagnosis, deep root fertilization, and pest management programs.",
    icon: HeartPulse,
    href: "#",
  },
  {
    num: "004",
    title: "Emergency Storm Response",
    description:
      "24/7 rapid response for fallen or hazardous trees threatening structures.",
    icon: Zap,
    href: "/emergency",
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-[var(--spacing-section)] px-[var(--spacing-margin)] max-w-[var(--spacing-container)] mx-auto"
    >
      <Reveal>
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Our Services
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-text tracking-tight leading-tight">
            Expert arboriculture services for every stage of your
            tree&apos;s lifecycle
          </h2>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {services.map((service, i) => {
          const ServiceIcon = service.icon;
          const isLinked = Boolean(service.href && service.href !== "#");

          const content = (
            <>
              <div className="md:col-span-1 flex items-start">
                <span className="font-mono text-xs text-text-faint tracking-wider">
                  {service.num}
                </span>
              </div>

              <div className="md:col-span-3 flex items-start gap-3">
                <ServiceIcon
                  size={20}
                  strokeWidth={1.5}
                  className="text-text-muted mt-0.5 shrink-0"
                />
                <h3
                  className={cn(
                    "text-xl font-display font-medium text-text transition-colors",
                    isLinked && "group-hover:text-accent"
                  )}
                >
                  {service.title}
                </h3>
              </div>

              <div className="md:col-span-6">
                <p className="text-sm text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="md:col-span-2 flex items-center justify-end">
                {isLinked && (
                  <span className="flex items-center gap-2 text-sm font-medium text-text-faint group-hover:text-accent transition-colors">
                    24/7 Response
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                )}
              </div>
            </>
          );

          return (
            <Reveal key={service.num} delay={i * 0.08}>
              {isLinked ? (
                <Link
                  href={service.href}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-t border-border hover:border-border-strong transition-colors cursor-pointer"
                >
                  {content}
                </Link>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-t border-border">
                  {content}
                </div>
              )}
            </Reveal>
          );
        })}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
