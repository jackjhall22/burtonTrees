import Link from "next/link";
import { MaterialIcon } from "@/components/layout/material-icon";

const services = [
  {
    title: "Precision Trimming & Pruning",
    description:
      "Enhance tree health, safety, and aesthetics with structural pruning performed to ISA standards.",
    icon: "content_cut",
    iconBg: "bg-primary-container",
    iconColor: "text-on-primary-container",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrz3G48FMa95NtLJHzevyerr12JWEIWKhwtPSK8cnjgIYIVVYNbY4dUCV8YvNw_4r1DYHwxAMuLruuWIhTiRPXKPmio-GlUSktd_qld-T2LFKEE7irnxXEWsPCqQUxrog3LbXv5z___CgOrKRMTpNpDp1j9FTS72jmxNJBOTV5L-9jXPhNjzWRhy9nnAIaLFWEc1sgL_ig1lp00P5cK3ftJgbRfNcdMj6EWsOJMpRfqHB8iqxaiCcjC1ASbioWlVMtqWIabgZfZsbO",
    large: true,
  },
  {
    title: "Safe Removals",
    description:
      "Technical dismantling of dead, diseased, or hazardous trees in tight urban spaces.",
    icon: "dangerous",
    iconBg: "bg-error-container",
    iconColor: "text-on-error-container",
  },
  {
    title: "Plant Health Care",
    description:
      "Disease diagnosis, deep root fertilization, and pest management programs.",
    icon: "health_and_safety",
    iconBg: "bg-secondary-container",
    iconColor: "text-on-secondary-container",
  },
  {
    title: "Emergency Storm Response",
    description:
      "24/7 rapid response for fallen or hazardous trees threatening structures.",
    icon: "storm",
    iconBg: "bg-safety/20",
    iconColor: "text-safety",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTBVa_hIoJP_psZBqMd2GchWJmLzYNV1by_EgoQcMaUd8bSm7U__t2W8gXV1kNgnlZMdYNevmV37o-5gTdJWeNd4gkNaDo6v65mFSWcSv9BskK7TaIEYeN0eCBzd51KvGiNiXeej6KxZbeoHDkXMgsWR5HIllEFDnl-gPPwxuTelvgRloqf_UCLezLlCbdPCryHPiCMlhmgiWtGzNeWu7QWBKR7Dpc506OkHFVixkW2oRJ1YGJnGoMeIMMYaxq2vlddy_14gvr8Vmh",
    large: true,
    reversed: true,
    href: "/emergency",
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-[--spacing-section] px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] max-w-[1280px] mx-auto"
    >
      <div className="text-center mb-[--spacing-section] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-on-surface mb-[--spacing-stack-sm] tracking-tight">
          Expert Arboriculture Services
        </h2>
        <p className="text-base text-on-surface-variant">
          Precision care for every stage of your tree&apos;s lifecycle, from
          preservation to safe removal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[--spacing-gutter]">
        {services.map((service) =>
          service.large ? (
            <LargeServiceCard key={service.title} {...service} />
          ) : (
            <SmallServiceCard key={service.title} {...service} />
          )
        )}
      </div>
    </section>
  );
}

function LargeServiceCard({
  title,
  description,
  icon,
  iconBg,
  iconColor,
  image,
  reversed,
  href,
}: {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  image?: string;
  reversed?: boolean;
  href?: string;
}) {
  return (
    <div
      className={`col-span-1 md:col-span-2 bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden shadow-[--shadow-card] group hover:-translate-y-1 transition-transform duration-300 flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {image && (
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={title}
            className="w-full h-full object-cover"
            src={image}
          />
        </div>
      )}
      <div className="p-8 w-full md:w-1/2 flex flex-col justify-center">
        <div
          className={`size-12 ${iconBg} ${iconColor} rounded-full flex items-center justify-center mb-[--spacing-stack-md]`}
        >
          <MaterialIcon name={icon} />
        </div>
        <h3 className="text-2xl font-semibold text-on-surface mb-[--spacing-stack-sm]">
          {title}
        </h3>
        <p className="text-base text-on-surface-variant mb-[--spacing-stack-lg]">
          {description}
        </p>
        <Link
          href={href || "#"}
          className="text-primary font-semibold text-sm tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all mt-auto w-fit"
        >
          Learn More{" "}
          <MaterialIcon name="arrow_forward" className="text-sm" />
        </Link>
      </div>
    </div>
  );
}

function SmallServiceCard({
  title,
  description,
  icon,
  iconBg,
  iconColor,
}: {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="col-span-1 bg-surface-container-low rounded-xl border border-outline-variant/30 p-8 shadow-[--shadow-card] hover:-translate-y-1 transition-transform duration-300 flex flex-col">
      <div
        className={`size-12 ${iconBg} ${iconColor} rounded-full flex items-center justify-center mb-[--spacing-stack-md]`}
      >
        <MaterialIcon name={icon} />
      </div>
      <h3 className="text-2xl font-semibold text-on-surface mb-[--spacing-stack-sm]">
        {title}
      </h3>
      <p className="text-base text-on-surface-variant mb-[--spacing-stack-lg] flex-grow">
        {description}
      </p>
      <Link
        href="#"
        className="text-primary font-semibold text-sm tracking-wide flex items-center gap-1 mt-auto w-fit"
      >
        Learn More{" "}
        <MaterialIcon name="arrow_forward" className="text-sm" />
      </Link>
    </div>
  );
}
