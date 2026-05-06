import { MaterialIcon } from "@/components/layout/material-icon";

export function ScheduleHeader() {
  return (
    <header className="h-20 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 flex items-center justify-between px-[--spacing-margin-mobile] lg:px-[--spacing-margin-desktop] shrink-0 z-30 relative shadow-sm">
      <div>
        <h1 className="text-2xl font-extrabold text-on-surface">
          Weekly Operations Schedule
        </h1>
        <p className="text-base text-on-surface-variant">
          Oct 23 - Oct 29, 2024
        </p>
      </div>
      <div className="hidden md:flex items-center gap-[--spacing-gutter]">
        <div className="flex items-center gap-[--spacing-unit] bg-error-container text-on-error-container px-4 py-2 rounded-full border border-error/20">
          <MaterialIcon name="storm" filled className="text-xl" />
          <span className="text-xs font-bold tracking-wide">
            High Winds Warning (Central TX) - Wed PM
          </span>
        </div>
        <div className="flex bg-surface-container-high rounded-lg p-1 border border-outline-variant/30">
          <button className="px-4 py-1.5 rounded-md text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
            Day
          </button>
          <button className="px-4 py-1.5 bg-surface text-primary rounded-md text-xs font-bold shadow-sm border border-outline-variant/20">
            Week
          </button>
          <button className="px-4 py-1.5 rounded-md text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
            Month
          </button>
        </div>
      </div>
    </header>
  );
}
