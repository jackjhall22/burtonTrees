"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#estimate" },
];

export function TopNav({ topOffset }: { topOffset?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed left-0 w-full z-50 flex justify-center px-4 pt-4 pointer-events-none", topOffset || "top-0")}>
      <nav
        className={cn(
          "pointer-events-auto w-full max-w-5xl flex items-center justify-between px-5 py-3 rounded-full border transition-all duration-500",
          scrolled
            ? "bg-white/92 backdrop-blur-xl border-black/8 shadow-subtle"
            : "bg-white/80 backdrop-blur-md border-black/5"
        )}
      >
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Burton Industry"
            width={458}
            height={374}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-950 transition-colors px-4 py-2 rounded-full hover:bg-black/5"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/emergency"
            className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors px-4 py-2 rounded-full hover:bg-red-50"
          >
            <AlertTriangle size={15} strokeWidth={2} />
            <span>Emergency</span>
          </Link>
          <Link
            href="/#estimate"
            className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Get Estimate
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-0 top-0 z-40 bg-surface/98 backdrop-blur-xl flex flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <Image
              src="/images/logo.png"
              alt="Burton Industry"
              width={458}
              height={374}
              className="h-8 w-auto"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-text"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-8 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-3xl font-display font-light text-text py-3 border-b border-border hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="px-8 pb-10 flex flex-col gap-3">
            <Link
              href="/emergency"
              className="flex items-center justify-center gap-2 bg-accent text-on-accent px-6 py-4 rounded-full font-semibold text-sm"
              onClick={() => setMobileOpen(false)}
            >
              <AlertTriangle size={16} />
              Emergency Service
            </Link>
            <Link
              href="/#estimate"
              className="bg-text text-surface px-6 py-4 rounded-full font-semibold text-sm text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
