"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialIcon } from "./material-icon";
import { cn } from "@/lib/utils";

interface SideNavProps {
  variant: "customer" | "admin";
}

const customerLinks = [
  { label: "Dashboard", icon: "dashboard", href: "/dashboard" },
  { label: "Schedule", icon: "calendar_month", href: "#" },
  { label: "Tree Inventory", icon: "park", href: "#" },
  { label: "Quotes", icon: "request_quote", href: "#" },
  { label: "Documents", icon: "folder_shared", href: "#" },
];

const adminLinks = [
  { label: "Dashboard", icon: "dashboard", href: "#" },
  { label: "Schedule", icon: "calendar_month", href: "/admin/schedule" },
  { label: "Tree Inventory", icon: "park", href: "#" },
  { label: "Quotes", icon: "request_quote", href: "#" },
  { label: "Documents", icon: "folder_shared", href: "#" },
];

export function SideNav({ variant }: SideNavProps) {
  const pathname = usePathname();
  const links = variant === "customer" ? customerLinks : adminLinks;
  const portalLabel = variant === "customer" ? "Customer Portal" : "Field Operations";
  const crewLabel = variant === "admin" ? "Burton Crew #4" : undefined;

  return (
    <nav className="hidden lg:flex flex-col h-screen fixed left-0 top-0 py-[--spacing-stack-md] bg-surface-container-low w-64 shadow-md shadow-[rgba(31,93,58,0.08)] z-50 border-r border-outline-variant/20">
      <div className="px-[--spacing-gutter] mb-[--spacing-stack-lg]">
        <Image
          src="/burtonTree.svg"
          alt="Burton Industry"
          width={48}
          height={48}
          className="h-12 w-auto"
        />
        <p className="text-xs font-bold tracking-wide text-on-surface-variant mt-1">
          {portalLabel}
        </p>
        {crewLabel && (
          <p className="text-xs font-bold tracking-wide text-on-surface-variant">
            {crewLabel}
          </p>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-[--spacing-unit]">
        <ul className="flex flex-col gap-[--spacing-stack-sm]">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg mx-2 text-xs font-bold tracking-wide transition-all duration-200",
                    isActive
                      ? "bg-primary-container text-on-primary-container scale-95"
                      : "text-on-surface-variant hover:bg-surface-container-high"
                  )}
                >
                  <MaterialIcon name={link.icon} filled={isActive} />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="px-[--spacing-gutter] mt-auto pt-[--spacing-stack-md] border-t border-outline-variant/30">
        <button className="w-full flex items-center justify-center gap-2 bg-error-container text-on-error-container hover:bg-error hover:text-on-error py-3 rounded-lg text-xs font-bold tracking-wide transition-colors shadow-sm">
          <MaterialIcon name="warning" className="text-lg" />
          Report Safety Issue
        </button>
        <ul className="flex flex-col gap-[--spacing-unit] mt-[--spacing-stack-md]">
          <li>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary text-xs font-bold tracking-wide transition-colors"
            >
              <MaterialIcon name="settings" className="text-lg" />
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary text-xs font-bold tracking-wide transition-colors"
            >
              <MaterialIcon name="help" className="text-lg" />
              Support
            </Link>
          </li>
        </ul>

        {variant === "customer" && (
          <div className="flex items-center gap-3 mt-[--spacing-stack-md] pt-[--spacing-stack-md] border-t border-outline-variant/30">
            <div className="size-10 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-sm">
              JD
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface">John Doe</p>
              <p className="text-[10px] text-on-surface-variant">
                Client ID: #8492
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
