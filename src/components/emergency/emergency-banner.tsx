import { AlertTriangle } from "lucide-react";

export function EmergencyBanner() {
  return (
    <div className="fixed top-0 left-0 w-full z-[60] bg-error text-on-error py-2 px-[var(--spacing-margin)] flex items-center justify-center gap-2">
      <AlertTriangle size={14} strokeWidth={2} />
      <p className="text-xs font-bold uppercase tracking-wider text-center">
        Critical Alert: If there are downed power lines involving trees, do not
        approach. Call 911 immediately.
      </p>
    </div>
  );
}
