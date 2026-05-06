import { MaterialIcon } from "@/components/layout/material-icon";

export function DashboardHeader() {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-[--spacing-stack-md] mb-[--spacing-stack-lg]">
      <div>
        <h2 className="text-3xl font-bold text-on-surface tracking-tight">
          Welcome back, John
        </h2>
        <p className="text-base text-on-surface-variant mt-1">
          Here&apos;s an overview of your property&apos;s care.
        </p>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-6 py-3 bg-surface border border-outline-variant text-primary rounded-lg text-sm font-semibold tracking-wide hover:bg-surface-container-low transition-colors shadow-sm shadow-[rgba(31,93,58,0.08)]">
          <MaterialIcon name="chat" />
          Message Arborist
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors shadow-sm shadow-[rgba(31,93,58,0.08)] border-t border-white/20">
          <MaterialIcon name="add" />
          Request Service
        </button>
      </div>
    </header>
  );
}
