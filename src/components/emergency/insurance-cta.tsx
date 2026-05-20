import { MaterialIcon } from "@/components/layout/material-icon";

export function InsuranceCta() {
  return (
    <section className="px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] pb-[--spacing-section]">
      <div className="bg-surface border border-outline-variant/30 rounded-2xl p-8 md:p-16 shadow-[0_4px_24px_rgba(31,93,58,0.05)] flex flex-col md:flex-row items-center gap-10 md:gap-14">
        <div className="md:w-1/3 flex justify-center">
          <div className="size-32 bg-secondary-container rounded-full flex items-center justify-center relative">
            <MaterialIcon
              name="assignment_turned_in"
              className="text-[64px] text-on-secondary-container"
            />
            <div className="absolute bottom-0 right-0 bg-primary size-10 rounded-full flex items-center justify-center border-4 border-surface">
              <MaterialIcon name="check" className="text-on-primary text-xl" />
            </div>
          </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-on-surface tracking-tight">
            Seamless Insurance Coordination
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            We understand the stress of storm damage. Our administrative team
            works directly with major home insurance carriers to provide the
            exact photographic evidence, structural risk assessments, and
            line-item invoices required to expedite your claim.
          </p>
          <ul className="flex flex-col sm:flex-row gap-x-8 gap-y-4 justify-center md:justify-start text-sm font-semibold text-on-surface tracking-wide pt-2">
            <li className="flex items-center gap-2.5">
              <MaterialIcon name="task_alt" className="text-primary text-xl" />
              Detailed Invoicing
            </li>
            <li className="flex items-center gap-2.5">
              <MaterialIcon name="task_alt" className="text-primary text-xl" />
              Photo Documentation
            </li>
            <li className="flex items-center gap-2.5">
              <MaterialIcon name="task_alt" className="text-primary text-xl" />
              Direct Adjuster Comms
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
