import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#estimate" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Insurance Info", href: "#" },
  { label: "Licensing", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border w-full pb-28 lg:pb-0">
      <div className="max-w-[var(--spacing-container)] mx-auto px-[var(--spacing-margin)] pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 flex flex-col gap-5">
            <h3 className="font-display text-lg font-medium text-text tracking-tight">
              Burton Industry LLC
            </h3>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Professional tree care rooted in integrity and safety.
              ISA-certified arborist services across Central Texas.
            </p>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <MapPin size={14} className="text-primary" />
              Central Texas Region
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-medium uppercase tracking-widest text-text-faint">
              Company
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text transition-colors flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-medium uppercase tracking-widest text-text-faint">
              Legal
            </h4>
            <nav className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-medium uppercase tracking-widest text-text-faint">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="tel:18002878664"
                className="flex items-center gap-3 text-sm text-text-muted hover:text-text transition-colors"
              >
                <Phone size={14} className="text-primary" />
                1-800-BURTON-TREES
              </Link>
              <Link
                href="mailto:info@burtonindustry.com"
                className="flex items-center gap-3 text-sm text-text-muted hover:text-text transition-colors"
              >
                <Mail size={14} className="text-primary" />
                info@burtonindustry.com
              </Link>
            </div>
            <Link
              href="/#estimate"
              className="mt-2 bg-text text-surface px-5 py-3 rounded-full font-semibold text-sm text-center hover:bg-text/90 transition-colors w-fit"
            >
              Request Estimate
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-faint">
          <span>
            &copy; {new Date().getFullYear()} Burton Industry LLC. All rights
            reserved.
          </span>
          <span className="font-mono uppercase tracking-widest">
            ISA Certified Arborists
          </span>
        </div>
      </div>
    </footer>
  );
}
