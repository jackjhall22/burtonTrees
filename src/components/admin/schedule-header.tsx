import { CloudLightning } from "lucide-react";

export function ScheduleHeader() {
  return (
    <header className="h-20 bg-surface/90 backdrop-blur-xl border-b border-border flex items-center justify-between px-[var(--spacing-margin)] shrink-0 z-30 relative">
      <div>
        <h1 className="text-2xl font-display font-light text-text tracking-tight">
          Weekly Operations Schedule
        </h1>
        <p className="text-sm text-text-muted">Oct 23 - Oct 29, 2024</p>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-2 bg-error-soft text-error px-4 py-2 rounded-full border border-error/20">
          <CloudLightning size={16} />
          <span className="text-xs font-medium">
            High Winds Warning (Central TX) - Wed PM
          </span>
        </div>
        <div className="flex bg-surface-card rounded-full p-1 border border-border">
          <button className="px-4 py-1.5 rounded-full text-xs font-medium text-text-faint hover:text-text transition-colors cursor-pointer">
            Day
          </button>
          <button className="px-4 py-1.5 bg-text text-surface rounded-full text-xs font-semibold">
            Week
          </button>
          <button className="px-4 py-1.5 rounded-full text-xs font-medium text-text-faint hover:text-text transition-colors cursor-pointer">
            Month
          </button>
        </div>
      </div>
    </header>
  );
}
