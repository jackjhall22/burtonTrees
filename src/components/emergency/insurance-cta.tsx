import { ClipboardCheck, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function InsuranceCta() {
  return (
    <section className="px-[var(--spacing-margin)] pb-[var(--spacing-section)]">
      <Reveal>
        <div className="bg-surface-card border border-border rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="md:w-1/3 flex justify-center">
            <div className="size-28 bg-primary/20 rounded-full flex items-center justify-center relative">
              <ClipboardCheck size={48} strokeWidth={1} className="text-primary" />
              <div className="absolute bottom-0 right-0 bg-accent size-8 rounded-full flex items-center justify-center border-4 border-surface-card">
                <CheckCircle size={14} className="text-on-accent" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left flex flex-col gap-5">
            <h2 className="font-display text-3xl font-light text-text tracking-tight">
              Seamless Insurance Coordination
            </h2>
            <p className="text-base text-text-muted leading-relaxed">
              We understand the stress of storm damage. Our administrative team
              works directly with major home insurance carriers to provide the
              exact photographic evidence, structural risk assessments, and
              line-item invoices required to expedite your claim.
            </p>
            <ul className="flex flex-col sm:flex-row gap-x-8 gap-y-4 justify-center md:justify-start text-sm text-text-muted pt-2">
              {[
                "Detailed Invoicing",
                "Photo Documentation",
                "Direct Adjuster Comms",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
