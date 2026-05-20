import { MaterialIcon } from "@/components/layout/material-icon";

export function SafetyGrid() {
  return (
    <section className="px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] py-[--spacing-section] bg-surface-container-low rounded-3xl mx-[--spacing-margin-mobile] md:mx-[--spacing-margin-desktop] my-[--spacing-stack-lg]">
      <div className="text-center mb-[--spacing-stack-lg]">
        <h2 className="text-3xl font-bold text-on-surface tracking-tight">
          Critical Safety Guidelines
        </h2>
        <p className="text-lg text-on-surface-variant mt-2 max-w-2xl mx-auto leading-relaxed">
          Protect yourself and your family before our crews arrive. Follow these
          safety protocols during severe post-storm conditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Lethal Hazard - Large Card */}
        <div className="md:col-span-2 bg-surface rounded-xl p-8 md:p-10 border border-error/30 shadow-sm relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <MaterialIcon name="bolt" className="text-[120px] text-error" />
          </div>
          <div className="inline-flex items-center gap-2 bg-error/10 text-error px-3 py-1 rounded-full w-fit mb-5">
            <MaterialIcon name="warning" className="text-base" />
            <span className="text-xs font-bold uppercase tracking-wide">
              Lethal Hazard
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-on-surface mb-3 z-10">
            Assume All Lines Are Live
          </h3>
          <p className="text-base text-on-surface-variant z-10 max-w-lg leading-relaxed">
            Never approach downed power lines or trees touching them. Electricity
            can travel through the ground and moisture. Keep a minimum distance
            of 35 feet and call your utility provider immediately.
          </p>
        </div>

        {/* Widowmakers */}
        <div className="bg-surface rounded-xl p-8 border border-outline-variant/50 shadow-sm flex flex-col items-start">
          <div className="bg-primary-container text-on-primary-container size-12 rounded-full flex items-center justify-center mb-4">
            <MaterialIcon name="nature" />
          </div>
          <h3 className="text-sm font-semibold text-on-surface mb-3 tracking-wide">
            Beware of &ldquo;Widowmakers&rdquo;
          </h3>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Look up. Broken branches suspended in the canopy can fall at any
            moment with the slightest gust of wind.
          </p>
        </div>

        {/* No DIY */}
        <div className="bg-surface rounded-xl p-8 border border-outline-variant/50 shadow-sm flex flex-col items-start">
          <div className="bg-primary-container text-on-primary-container size-12 rounded-full flex items-center justify-center mb-4">
            <MaterialIcon name="home_repair_service" />
          </div>
          <h3 className="text-sm font-semibold text-on-surface mb-3 tracking-wide">
            Avoid DIY Chainsaw Work
          </h3>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Storm-damaged trees carry immense unpredictable tension and
            compression forces. Cutting them without training is highly
            dangerous.
          </p>
        </div>

        {/* Insurance Documentation */}
        <div className="md:col-span-2 bg-surface rounded-xl p-8 md:p-10 border border-outline-variant/50 shadow-sm flex items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-on-surface mb-3">
              Document for Insurance
            </h3>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Before any cleanup begins (if safe to do so), take wide-angle
              photos of the damage to your property and structures for your
              claims adjuster.
            </p>
          </div>
          <div className="hidden sm:flex bg-secondary-container text-on-secondary-container size-16 rounded-full items-center justify-center shrink-0">
            <MaterialIcon name="photo_camera" className="text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
