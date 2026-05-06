"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialIcon } from "./material-icon";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Home", icon: "home", href: "/" },
  { label: "Tasks", icon: "assignment", href: "/dashboard" },
  { label: "Map", icon: "map", href: "#" },
  { label: "Safety", icon: "security", href: "/emergency" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] bg-surface border-t border-outline-variant/20 shadow-[--shadow-nav] rounded-t-xl">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.label}
            href={tab.href}
            className={cn(
              "flex flex-col items-center justify-center px-3 py-1 rounded-full transition-transform text-xs font-bold tracking-wide",
              isActive
                ? "bg-primary-container text-on-primary-container scale-90"
                : "text-on-surface-variant active:bg-surface-container-high"
            )}
          >
            <MaterialIcon name={tab.icon} filled={isActive} className="text-2xl" />
            <span className="mt-1">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
