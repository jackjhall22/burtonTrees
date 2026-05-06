import Link from "next/link";
import { MaterialIcon } from "@/components/layout/material-icon";

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Professional arborist climbing a tall mature tree"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLYk5ORGVQOspz5rGODm8beETyF8RHOve8sWwlZsXCtBqKzzqPl5HB1ssWghVeX24l2qlXXhNetFwFlQLO-Fku16LCcdVVxMUjX1zd7f7j-z4DxWCJJ83zvSZYf6IJY7RIvuqNW18ZGb-ucC_rpEWFDSuoz5exxtd8Mel89YqIVRtszk4CAkzAP4LRV2PFhIISG4veRGuEwtWcNiX5gmsKgnhFvWHNgMIGvILIW-JB3PTz_YAvaHACRmfazBpsgq53cu0Mk4c1oNd5"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/80 to-transparent" />
      </div>
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] flex flex-col items-start text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-[--spacing-stack-md] leading-tight tracking-tight">
            Professional Tree Care Rooted In Integrity
          </h1>
          <p className="text-lg text-surface-container-low mb-[--spacing-stack-lg] leading-relaxed">
            ISA-certified arborist services, tree preservation, and storm
            response across Central Texas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#estimate"
              className="bg-safety text-white px-8 py-4 rounded-lg font-semibold text-sm shadow-sm hover:opacity-90 transition-opacity border-t border-white/20 text-lg flex items-center justify-center gap-2"
            >
              Request Free Estimate
              <MaterialIcon name="arrow_forward" />
            </Link>
            <Link
              href="/emergency"
              className="bg-surface/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-sm shadow-sm hover:bg-surface/30 transition-colors text-lg flex items-center justify-center gap-2"
            >
              <MaterialIcon name="warning" />
              Emergency Tree Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
