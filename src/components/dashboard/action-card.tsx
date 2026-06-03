export function ActionCard() {
  return (
    <div className="bg-surface-card rounded-xl border border-border p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-display font-medium text-text">
          Action Required
        </h3>
        <span className="flex size-6 items-center justify-center rounded-full bg-error-soft text-error text-xs font-bold">
          1
        </span>
      </div>

      <div className="p-4 border border-border rounded-lg bg-surface-raised hover:border-border-strong transition-colors cursor-pointer group">
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs font-mono text-accent group-hover:underline tracking-wider">
            EST-2024-089
          </p>
          <p className="text-base font-semibold text-text">$450.00</p>
        </div>
        <p className="text-sm text-text-muted mb-4 line-clamp-2">
          Stump grinding for back patio expansion project.
        </p>
        <button className="w-full py-2.5 bg-text text-surface rounded-full text-xs font-semibold hover:bg-text/90 transition-colors cursor-pointer">
          Review &amp; Approve
        </button>
      </div>
    </div>
  );
}
