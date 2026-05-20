const steps = [
  {
    number: "01",
    title: "Assess & Secure",
    description:
      "Our first priority is site safety. We evaluate structural risks, identify tension points in the timber, and establish a safe perimeter for operations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWYlatVaQs5Ybs9kucXNKPfszy3h3fPJ2RP0pyCE3Dv-AALW4fo-Qd6jQVqJ0je6aECXsi-gi5TVOAKYGyflOjVZ2_mf9zeGe_R5YMJgHgbmOLYbBNHbplZfGn3FrrB-UhfVzHlIcvbFaa8NM1dkJD7csswG3Wq-zthuz5WkwBuH9Gsqdz8PBCaSUFtiVJDpk9EbCwAtJnWQMGTuKvQ8zqN5fJYXzNfcBMTZGAxLouQZwlhgzMI9zm05xP-vI5BKnS0YGHB3w1NYCZ",
  },
  {
    number: "02",
    title: "Technical Rigging",
    description:
      "Using advanced cranes and rigging techniques, we carefully lift and remove timber off structures, preventing further secondary damage to your property.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXBUbs_nut9EwWct3Pqh1WCM0avtT55r0SRYwBk0xnzxZb1Yabj_-A-CQ5bYjjOhH2ZvLGn0X3YuIQ6wJLe7W5V6LWc1DhsAufcJxzXXwuc62IB0z8rORfIE-24OJWqO4cS-eLhWhIATq9DFErpEBxjPR2epZ8DVRBcyoAX587B5kq7QANecJgJcmC4krXpyvnJ33VP9PixXq_1phD5CQjCp3FqPGeXqCm9zH5iGhSpAjYquYuHtfEXitLjl4yzHHHNL0EUzVSIqkp",
  },
  {
    number: "03",
    title: "Debris Clearance",
    description:
      "All hazardous debris is chipped, loaded, and hauled away. We leave the site clean, secure, and ready for your contractors to begin structural repairs.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoM61QWiJSvsWiXLEMnjB4FtBqldvZcGeu1L3k0YF8i68rgQlkDrl_ViH9AEXb6iaSsFBFD-5RQSEqHXiq451Zo-o-KyTUEMjekiWJ2dxe5by9I80RtjueN0xY2APYpErPEZb4Z_j0M7NEVPeLKs_0vFemUTvRiGf6Hj66Zs0W8-I7ok5PXHYWR-_MqbS4n2bk-E74eO90zG3ApkVO_6eb3q8Lur6AmJJrDJsLcJISfn5Hyx9FAqGFYcxpFz-Jm9x0ETq9lNlwb7et",
  },
];

export function ProcessSteps() {
  return (
    <section
      id="cleanup-process"
      className="px-[--spacing-margin-mobile] md:px-[--spacing-margin-desktop] py-[--spacing-section]"
    >
      <h2 className="text-3xl font-bold text-on-surface mb-[--spacing-stack-lg] border-l-4 border-primary pl-4 tracking-tight">
        Emergency Execution Protocol
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col gap-4">
            <div className="w-full h-48 bg-surface-container rounded-xl overflow-hidden relative shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={step.title}
                className="w-full h-full object-cover"
                src={step.image}
              />
              <div className="absolute top-4 left-4 bg-surface text-primary size-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                {step.number}
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-on-surface mt-1">
              {step.title}
            </h3>
            <p className="text-base text-on-surface-variant leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
