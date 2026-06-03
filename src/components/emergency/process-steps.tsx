import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    number: "001",
    title: "Assess & Secure",
    description:
      "Our first priority is site safety. We evaluate structural risks, identify tension points in the timber, and establish a safe perimeter for operations.",
    image: "/images/arborist-ladder.jpg",
  },
  {
    number: "002",
    title: "Technical Rigging",
    description:
      "Using advanced cranes and rigging techniques, we carefully lift and remove timber off structures, preventing further secondary damage to your property.",
    image: "/images/crane-rigging.jpg",
  },
  {
    number: "003",
    title: "Debris Clearance",
    description:
      "All hazardous debris is chipped, loaded, and hauled away. We leave the site clean, secure, and ready for your contractors to begin structural repairs.",
    image: "/images/log-hauling.jpg",
  },
];

export function ProcessSteps() {
  return (
    <section
      id="cleanup-process"
      className="px-[var(--spacing-margin)] py-[var(--spacing-section)]"
    >
      <Reveal>
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Our Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-text tracking-tight">
            Emergency Execution Protocol
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.1}>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-[4/3] bg-surface-card rounded-xl overflow-hidden relative">
                <Image
                  alt={step.title}
                  src={step.image}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm text-accent px-3 py-1.5 rounded-full font-mono text-xs font-medium">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-display font-medium text-text mt-1">
                {step.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
