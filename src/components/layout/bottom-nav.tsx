"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ClipboardList, Map, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Tasks", icon: ClipboardList, href: "/dashboard" },
  { label: "Map", icon: Map, href: "#" },
  { label: "Safety", icon: Shield, href: "/emergency" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] bg-surface/95 backdrop-blur-xl border-t border-border rounded-t-2xl">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        const TabIcon = tab.icon;
        return (
          <Link
            key={tab.label}
            href={tab.href}
            className={cn(
              "flex flex-col items-center justify-center px-3 py-1.5 rounded-full transition-colors text-xs font-medium tracking-wide",
              isActive
                ? "text-accent"
                : "text-text-faint active:text-text-muted"
            )}
          >
            <TabIcon size={20} strokeWidth={isActive ? 2 : 1.5} />
            <span className="mt-1">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
