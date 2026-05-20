import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "./material-icon";

const footerLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "#" },
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
    <footer className="bg-surface-container-highest w-full border-t border-outline-variant pb-28 lg:pb-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 flex flex-col gap-5">
            <Image
              src="/burtonTree.svg"
              alt="Burton Industry"
              width={56}
              height={56}
              className="h-14 w-auto"
            />
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
              Professional tree care rooted in integrity and safety. ISA-certified
              arborist services across Central Texas.
            </p>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <MaterialIcon name="location_on" className="text-primary text-base" />
              Central Texas Region
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface">
              Company
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface">
              Legal
            </h4>
            <nav className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="tel:18002878664"
                className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <MaterialIcon name="call" className="text-primary text-base" />
                1-800-BURTON-TREES
              </Link>
              <Link
                href="mailto:info@burtonindustry.com"
                className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <MaterialIcon name="mail" className="text-primary text-base" />
                info@burtonindustry.com
              </Link>
            </div>
            <Link
              href="/#estimate"
              className="mt-2 bg-primary text-on-primary px-5 py-3 rounded-lg font-semibold text-sm text-center hover:opacity-90 transition-opacity border-t border-white/20 w-fit"
            >
              Request Estimate
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
          <span>&copy; {new Date().getFullYear()} Burton Industry LLC. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <MaterialIcon name="verified" className="text-primary text-sm" />
            ISA Certified Arborists
          </span>
        </div>
      </div>
    </footer>
  );
}
