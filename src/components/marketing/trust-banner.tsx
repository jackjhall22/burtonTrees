import { Shield, Award, TreePine, Clock } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: TreePine,
    value: 5000,
    suffix: "+",
    label: "Trees Serviced",
  },
  {
    icon: Shield,
    value: 100,
    suffix: "%",
    label: "Insured & Bonded",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Emergency Response",
  },
];

export function TrustBanner() {
  return (
    <section className="py-[var(--spacing-section)] border-y border-border">
      <div className="max-w-[var(--spacing-container)] mx-auto px-[var(--spacing-margin)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-3">
                  <StatIcon
                    size={24}
                    strokeWidth={1.5}
                    className="text-primary"
                  />
                  <div className="text-3xl md:text-4xl font-display font-light text-text tracking-tight">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-text-faint">
                    {stat.label}
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
