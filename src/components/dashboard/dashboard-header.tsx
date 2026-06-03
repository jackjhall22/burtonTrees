import { MessageSquare, Plus } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h2 className="text-3xl font-display font-light text-text tracking-tight">
          Welcome back, John
        </h2>
        <p className="text-base text-text-muted mt-1">
          Here&apos;s an overview of your property&apos;s care.
        </p>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-5 py-3 bg-surface-card border border-border text-text-muted rounded-full text-sm font-medium hover:border-border-strong hover:text-text transition-colors cursor-pointer">
          <MessageSquare size={16} />
          Message Arborist
        </button>
        <button className="flex items-center gap-2 px-5 py-3 bg-text text-surface rounded-full text-sm font-semibold hover:bg-text/90 transition-colors cursor-pointer">
          <Plus size={16} />
          Request Service
        </button>
      </div>
    </header>
  );
}
