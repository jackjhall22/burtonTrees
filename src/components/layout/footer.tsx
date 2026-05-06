import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full py-[--spacing-section] px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] border-t border-outline-variant pb-28 lg:pb-[--spacing-section]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[--spacing-gutter]">
        <div className="flex flex-col gap-4">
          <Image
            src="/burtonTree.svg"
            alt="Burton Industry"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <p className="text-base text-on-surface-variant mt-2">
            Advanced Stewardship. Professional tree care rooted in integrity and
            safety.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold tracking-wide text-on-surface mb-2">
            Legal
          </h4>
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Insurance Info</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Licensing</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold tracking-wide text-on-surface mb-2">
            Contact
          </h4>
          <p className="text-on-surface-variant">Central Texas Region</p>
          <p className="text-on-surface-variant">1-800-BURTON-TREES</p>
          <p className="text-on-surface-variant">info@burtonindustry.com</p>
        </div>

        <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-outline-variant/30 flex justify-between items-center text-base text-on-surface-variant">
          <span>&copy; 2024 Burton Industry LLC. ISA Certified Arborists.</span>
        </div>
      </div>
    </footer>
  );
}
