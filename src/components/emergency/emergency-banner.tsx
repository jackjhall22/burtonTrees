import { MaterialIcon } from "@/components/layout/material-icon";

export function EmergencyBanner() {
  return (
    <div className="fixed top-0 left-0 w-full z-[60] bg-error text-on-error py-[--spacing-unit] px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] shadow-md flex items-center justify-center gap-2">
      <MaterialIcon name="warning" filled className="text-lg" />
      <p className="text-xs font-bold uppercase tracking-wider text-center">
        Critical Alert: If there are downed power lines involving trees, do not
        approach. Call 911 immediately.
      </p>
    </div>
  );
}
