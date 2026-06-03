"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  TreePine,
  FileText,
  FolderOpen,
  Settings,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SideNavProps {
  variant: "customer" | "admin";
}

const customerLinks = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Schedule", icon: CalendarDays, href: "#" },
  { label: "Tree Inventory", icon: TreePine, href: "#" },
  { label: "Quotes", icon: FileText, href: "#" },
  { label: "Documents", icon: FolderOpen, href: "#" },
];

const adminLinks = [
  { label: "Dashboard", icon: LayoutDashboard, href: "#" },
  { label: "Schedule", icon: CalendarDays, href: "/admin/schedule" },
  { label: "Tree Inventory", icon: TreePine, href: "#" },
  { label: "Quotes", icon: FileText, href: "#" },
  { label: "Documents", icon: FolderOpen, href: "#" },
];

export function SideNav({ variant }: SideNavProps) {
  const pathname = usePathname();
  const links = variant === "customer" ? customerLinks : adminLinks;
  const portalLabel =
    variant === "customer" ? "Customer Portal" : "Field Operations";
  const crewLabel = variant === "admin" ? "Burton Crew #4" : undefined;

  return (
    <nav className="hidden lg:flex flex-col h-screen fixed left-0 top-0 py-4 bg-surface-raised w-64 z-50 border-r border-border">
      <div className="px-6 mb-8">
        <Image
          src="/images/logo.png"
          alt="Burton Industry"
          width={458}
          height={374}
          className="h-9 w-auto"
        />
        <p className="text-xs font-mono uppercase tracking-widest text-text-faint mt-2">
          {portalLabel}
        </p>
        {crewLabel && (
          <p className="text-xs font-mono uppercase tracking-widest text-text-faint">
            {crewLabel}
          </p>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-2">
        <ul className="flex flex-col gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const LinkIcon = link.icon;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg mx-2 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "text-text-muted hover:bg-white/5 hover:text-text"
                  )}
                >
                  <LinkIcon size={18} strokeWidth={isActive ? 2 : 1.5} />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="px-6 mt-auto pt-4 border-t border-border">
        <button className="w-full flex items-center justify-center gap-2 bg-error-soft text-error hover:bg-error hover:text-on-error py-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer">
          <AlertTriangle size={14} />
          Report Safety Issue
        </button>
        <ul className="flex flex-col gap-1 mt-3">
          <li>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-text-faint hover:text-text text-sm transition-colors"
            >
              <Settings size={16} />
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-text-faint hover:text-text text-sm transition-colors"
            >
              <HelpCircle size={16} />
              Support
            </Link>
          </li>
        </ul>

        {variant === "customer" && (
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
            <div className="size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-sm">
              JD
            </div>
            <div>
              <p className="text-sm font-medium text-text">John Doe</p>
              <p className="text-xs text-text-faint">Client ID: #8492</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
