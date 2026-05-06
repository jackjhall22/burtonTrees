export function ActionCard() {
  return (
    <div className="bg-surface rounded-xl border border-outline-variant/30 shadow-sm shadow-[rgba(31,93,58,0.08)] p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-on-surface">Action Required</h3>
        <span className="flex size-6 items-center justify-center rounded-full bg-error-container text-on-error-container text-xs font-bold">
          1
        </span>
      </div>

      <div className="p-4 border border-outline-variant rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group">
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs font-bold text-primary group-hover:underline tracking-wide">
            EST-2024-089
          </p>
          <p className="text-base font-bold text-on-surface">$450.00</p>
        </div>
        <p className="text-base text-on-surface-variant mb-4 line-clamp-2">
          Stump grinding for back patio expansion project.
        </p>
        <button className="w-full py-2 bg-primary text-on-primary rounded border-t border-white/20 text-xs font-bold tracking-wide hover:bg-primary/90 transition-colors">
          Review &amp; Approve
        </button>
      </div>
    </div>
  );
}
