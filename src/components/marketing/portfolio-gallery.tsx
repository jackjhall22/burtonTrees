"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

const categories = [
  "All",
  "Trimming",
  "Removal",
  "Storm Response",
  "Plant Health",
] as const;

const projects = [
  {
    title: "Heritage Oak Canopy Restoration",
    category: "Trimming",
    description:
      "Structural pruning of a 120-year-old live oak to restore canopy balance.",
    image: "/images/oak-canopy.jpg",
  },
  {
    title: "Emergency Pecan Removal",
    category: "Removal",
    description:
      "Safe extraction of a storm-split pecan threatening a residential roofline.",
    image: "/images/pecan-removal.jpg",
  },
  {
    title: "Post-Storm Debris Clearance",
    category: "Storm Response",
    description:
      "Rapid response clearing downed limbs from a neighborhood cul-de-sac.",
    image: "/images/storm-damage.jpg",
  },
  {
    title: "Deep Root Fertilization Program",
    category: "Plant Health",
    description:
      "Targeted nutrient injection for declining red oaks on a commercial property.",
    image: "/images/root-care.jpg",
  },
  {
    title: "Commercial Lot Crown Reduction",
    category: "Trimming",
    description:
      "Clearance pruning for a new retail development, preserving specimen trees.",
    image: "/images/commercial-trees.jpg",
  },
  {
    title: "Multi-Trunk Elm Hazard Removal",
    category: "Removal",
    description:
      "Technical rigging to dismantle a structurally compromised elm near power lines.",
    image: "/images/elm-tree.jpg",
  },
];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-[var(--spacing-section)] px-[var(--spacing-margin)] max-w-[var(--spacing-container)] mx-auto"
    >
      <Reveal>
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-text tracking-tight leading-tight">
            Our recent work
          </h2>
          <p className="mt-4 text-base text-text-muted leading-relaxed">
            Browse completed projects across Central Texas — from delicate
            canopy restoration to emergency storm recovery.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer",
                activeCategory === cat
                  ? "bg-text text-surface"
                  : "bg-surface-card text-text-muted border border-border hover:border-border-strong hover:text-text"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06}>
            <div className="group relative bg-surface-card rounded-xl overflow-hidden border border-border hover:border-border-strong transition-all cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-display font-medium text-text">
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted mt-1">
                  {project.description}
                </p>
              </div>

              <div className="p-5 group-hover:opacity-0 transition-opacity duration-500">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {project.category}
                </span>
                <h3 className="text-base font-display font-medium text-text mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
