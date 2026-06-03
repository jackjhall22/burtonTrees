import { Zap, TreePine, Wrench, Camera } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function SafetyGrid() {
  return (
    <section className="px-[var(--spacing-margin)] py-[var(--spacing-section)] bg-surface-raised rounded-2xl mx-[var(--spacing-margin)] my-8">
      <Reveal>
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Safety First
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-text tracking-tight">
            Critical Safety Guidelines
          </h2>
          <p className="text-base text-text-muted mt-3 max-w-2xl mx-auto leading-relaxed">
            Protect yourself and your family before our crews arrive.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Reveal delay={0.05} className="md:col-span-2">
          <div className="bg-surface-card rounded-xl p-8 md:p-10 border border-error/20 relative overflow-hidden flex flex-col justify-center h-full">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Zap size={120} />
            </div>
            <div className="inline-flex items-center gap-2 bg-error-soft text-error px-3 py-1.5 rounded-full w-fit mb-5">
              <Zap size={12} />
              <span className="text-xs font-mono font-bold uppercase tracking-wide">
                Lethal Hazard
              </span>
            </div>
            <h3 className="text-2xl font-display font-medium text-text mb-3 z-10">
              Assume All Lines Are Live
            </h3>
            <p className="text-sm text-text-muted z-10 max-w-lg leading-relaxed">
              Never approach downed power lines or trees touching them.
              Electricity can travel through the ground and moisture. Keep a
              minimum distance of 35 feet and call your utility provider
              immediately.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-surface-card rounded-xl p-8 border border-border flex flex-col items-start h-full">
            <div className="bg-primary/20 text-primary size-12 rounded-full flex items-center justify-center mb-4">
              <TreePine size={20} />
            </div>
            <h3 className="text-sm font-medium text-text mb-3 tracking-wide">
              Beware of &ldquo;Widowmakers&rdquo;
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Look up. Broken branches suspended in the canopy can fall at any
              moment with the slightest gust of wind.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-surface-card rounded-xl p-8 border border-border flex flex-col items-start h-full">
            <div className="bg-primary/20 text-primary size-12 rounded-full flex items-center justify-center mb-4">
              <Wrench size={20} />
            </div>
            <h3 className="text-sm font-medium text-text mb-3 tracking-wide">
              Avoid DIY Chainsaw Work
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Storm-damaged trees carry immense unpredictable tension and
              compression forces. Cutting them without training is highly
              dangerous.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-2">
          <div className="bg-surface-card rounded-xl p-8 md:p-10 border border-border flex items-center justify-between gap-8 h-full">
            <div>
              <h3 className="text-2xl font-display font-medium text-text mb-3">
                Document for Insurance
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Before any cleanup begins (if safe), take wide-angle photos of
                the damage to your property and structures for your claims
                adjuster.
              </p>
            </div>
            <div className="hidden sm:flex bg-primary/20 text-primary size-16 rounded-full items-center justify-center shrink-0">
              <Camera size={24} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
