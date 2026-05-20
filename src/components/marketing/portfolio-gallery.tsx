"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/layout/material-icon";
import { cn } from "@/lib/utils";

const categories = ["All", "Trimming", "Removal", "Storm Response", "Plant Health"] as const;

const projects = [
  {
    title: "Heritage Oak Canopy Restoration",
    category: "Trimming",
    description: "Structural pruning of a 120-year-old live oak to restore canopy balance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrz3G48FMa95NtLJHzevyerr12JWEIWKhwtPSK8cnjgIYIVVYNbY4dUCV8YvNw_4r1DYHwxAMuLruuWIhTiRPXKPmio-GlUSktd_qld-T2LFKEE7irnxXEWsPCqQUxrog3LbXv5z___CgOrKRMTpNpDp1j9FTS72jmxNJBOTV5L-9jXPhNjzWRhy9nnAIaLFWEc1sgL_ig1lp00P5cK3ftJgbRfNcdMj6EWsOJMpRfqHB8iqxaiCcjC1ASbioWlVMtqWIabgZfZsbO",
  },
  {
    title: "Emergency Pecan Removal",
    category: "Removal",
    description: "Safe extraction of a storm-split pecan threatening a residential roofline.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTBVa_hIoJP_psZBqMd2GchWJmLzYNV1by_EgoQcMaUd8bSm7U__t2W8gXV1kNgnlZMdYNevmV37o-5gTdJWeNd4gkNaDo6v65mFSWcSv9BskK7TaIEYeN0eCBzd51KvGiNiXeej6KxZbeoHDkXMgsWR5HIllEFDnl-gPPwxuTelvgRloqf_UCLezLlCbdPCryHPiCMlhmgiWtGzNeWu7QWBKR7Dpc506OkHFVixkW2oRJ1YGJnGoMeIMMYaxq2vlddy_14gvr8Vmh",
  },
  {
    title: "Post-Storm Debris Clearance",
    category: "Storm Response",
    description: "Rapid response clearing downed limbs from a neighborhood cul-de-sac.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLYk5ORGVQOspz5rGODm8beETyF8RHOve8sWwlZsXCtBqKzzqPl5HB1ssWghVeX24l2qlXXhNetFwFlQLO-Fku16LCcdVVxMUjX1zd7f7j-z4DxWCJJ83zvSZYf6IJY7RIvuqNW18ZGb-ucC_rpEWFDSuoz5exxtd8Mel89YqIVRtszk4CAkzAP4LRV2PFhIISG4veRGuEwtWcNiX5gmsKgnhFvWHNgMIGvILIW-JB3PTz_YAvaHACRmfazBpsgq53cu0Mk4c1oNd5",
  },
  {
    title: "Deep Root Fertilization Program",
    category: "Plant Health",
    description: "Targeted nutrient injection for declining red oaks on a commercial property.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrz3G48FMa95NtLJHzevyerr12JWEIWKhwtPSK8cnjgIYIVVYNbY4dUCV8YvNw_4r1DYHwxAMuLruuWIhTiRPXKPmio-GlUSktd_qld-T2LFKEE7irnxXEWsPCqQUxrog3LbXv5z___CgOrKRMTpNpDp1j9FTS72jmxNJBOTV5L-9jXPhNjzWRhy9nnAIaLFWEc1sgL_ig1lp00P5cK3ftJgbRfNcdMj6EWsOJMpRfqHB8iqxaiCcjC1ASbioWlVMtqWIabgZfZsbO",
  },
  {
    title: "Commercial Lot Crown Reduction",
    category: "Trimming",
    description: "Clearance pruning for a new retail development, preserving specimen trees.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTBVa_hIoJP_psZBqMd2GchWJmLzYNV1by_EgoQcMaUd8bSm7U__t2W8gXV1kNgnlZMdYNevmV37o-5gTdJWeNd4gkNaDo6v65mFSWcSv9BskK7TaIEYeN0eCBzd51KvGiNiXeej6KxZbeoHDkXMgsWR5HIllEFDnl-gPPwxuTelvgRloqf_UCLezLlCbdPCryHPiCMlhmgiWtGzNeWu7QWBKR7Dpc506OkHFVixkW2oRJ1YGJnGoMeIMMYaxq2vlddy_14gvr8Vmh",
  },
  {
    title: "Multi-Trunk Elm Hazard Removal",
    category: "Removal",
    description: "Technical rigging to dismantle a structurally compromised elm near power lines.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLYk5ORGVQOspz5rGODm8beETyF8RHOve8sWwlZsXCtBqKzzqPl5HB1ssWghVeX24l2qlXXhNetFwFlQLO-Fku16LCcdVVxMUjX1zd7f7j-z4DxWCJJ83zvSZYf6IJY7RIvuqNW18ZGb-ucC_rpEWFDSuoz5exxtd8Mel89YqIVRtszk4CAkzAP4LRV2PFhIISG4veRGuEwtWcNiX5gmsKgnhFvWHNgMIGvILIW-JB3PTz_YAvaHACRmfazBpsgq53cu0Mk4c1oNd5",
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
      className="py-[--spacing-section] px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[1280px] mx-auto"
    >
      <div className="text-center mb-[--spacing-stack-lg] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-on-surface mb-[--spacing-stack-sm] tracking-tight">
          Our Recent Work
        </h2>
        <p className="text-base text-on-surface-variant">
          Browse completed projects across Central Texas — from delicate canopy
          restoration to emergency storm recovery.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-colors",
              activeCategory === cat
                ? "bg-primary text-on-primary shadow-sm"
                : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[--spacing-gutter]">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="group relative bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden shadow-[--shadow-card] hover:-translate-y-1 hover:shadow-[--shadow-card-hover] transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="inline-flex items-center gap-1.5 bg-primary/90 text-on-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide w-fit mb-2">
                <MaterialIcon name="eco" className="text-xs" />
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-sm text-white/80 mt-1">{project.description}</p>
            </div>

            <div className="p-5 group-hover:opacity-0 transition-opacity duration-300">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {project.category}
              </span>
              <h3 className="text-lg font-semibold text-on-surface mt-1">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
