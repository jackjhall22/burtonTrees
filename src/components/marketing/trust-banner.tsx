import { MaterialIcon } from "@/components/layout/material-icon";

const badges = [
  { icon: "verified", label: "ISA Certified Arborists" },
  { icon: "shield", label: "Fully Insured & Bonded" },
  { icon: "rule", label: "ANSI-A300 Compliant" },
  { icon: "workspace_premium", label: "15+ Years Experience" },
];

export function TrustBanner() {
  return (
    <section className="bg-surface-container-highest py-[--spacing-stack-lg] border-b border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-80 grayscale contrast-200">
        {badges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-3">
            <MaterialIcon
              name={badge.icon}
              className="text-4xl text-primary"
            />
            <span className="text-sm font-semibold tracking-wide text-on-surface">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
