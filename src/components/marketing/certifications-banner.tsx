import { BadgeCheck, Crown, ShieldCheck, Anchor } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const certifications = [
  {
    icon: BadgeCheck,
    acronym: "ISA",
    title: "Certified Arborist",
    description: "3+ years experience, general tree care expertise",
  },
  {
    icon: Crown,
    acronym: "BCMA",
    title: "Board Certified Master Arborist",
    description: "Highest ISA credential, extensive education",
  },
  {
    icon: ShieldCheck,
    acronym: "TRAQ",
    title: "Tree Risk Assessment Qualified",
    description: "Advanced hazard evaluation & mitigation",
  },
  {
    icon: Anchor,
    acronym: "CTWS",
    title: "Climber Specialist",
    description: "Certified in aerial tree work & rigging",
  },
];

export function CertificationsBanner() {
  return (
    <section className="py-16 bg-surface-card/50 border-y border-border">
      <div className="max-w-[var(--spacing-container)] mx-auto px-[var(--spacing-margin)]">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-12 bg-border-strong" />
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-text-faint">
              ISA Accredited Professional
            </p>
            <div className="h-px flex-1 max-w-12 bg-border-strong" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => {
            const CertIcon = cert.icon;
            return (
              <Reveal key={cert.acronym} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center gap-2.5 px-4 py-5 rounded-xl border border-border/50 bg-surface/60 backdrop-blur-sm hover:border-primary/30 transition-colors">
                  <CertIcon
                    size={20}
                    strokeWidth={1.5}
                    className="text-primary"
                  />
                  <span className="font-mono text-lg font-semibold text-text tracking-tight">
                    {cert.acronym}
                  </span>
                  <span className="text-xs font-medium text-text-muted leading-snug">
                    {cert.title}
                  </span>
                  <span className="text-[11px] text-text-faint leading-relaxed">
                    {cert.description}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
