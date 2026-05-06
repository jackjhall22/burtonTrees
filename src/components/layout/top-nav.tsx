"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MaterialIcon } from "./material-icon";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/#services", active: true },
  { label: "Portfolio", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1280px] mx-auto px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/burtonTree.svg"
            alt="Burton Industry"
            width={56}
            height={56}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-[--spacing-gutter]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-semibold tracking-wide transition-colors duration-200",
                link.active
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/emergency"
            className="bg-safety text-on-safety px-6 py-3 rounded-lg font-semibold text-sm shadow-sm hover:opacity-90 transition-opacity border-t border-white/20 flex items-center gap-2"
          >
            <MaterialIcon name="warning" className="text-lg" />
            Emergency Service
          </Link>
          <Link
            href="#estimate"
            className="bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold text-sm shadow-sm hover:opacity-90 transition-opacity border-t border-white/20"
          >
            Request Estimate
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-on-surface"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <MaterialIcon name={mobileOpen ? "close" : "menu"} className="text-2xl" />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/30 px-[--spacing-margin-mobile] py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-on-surface font-semibold text-base py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/emergency"
            className="bg-safety text-on-safety px-6 py-3 rounded-lg font-semibold text-sm text-center flex items-center justify-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <MaterialIcon name="warning" className="text-lg" />
            Emergency Service
          </Link>
          <Link
            href="#estimate"
            className="bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold text-sm text-center"
            onClick={() => setMobileOpen(false)}
          >
            Request Estimate
          </Link>
        </div>
      )}
    </header>
  );
}
