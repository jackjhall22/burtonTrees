import { MaterialIcon } from "@/components/layout/material-icon";

const galleryItems = [
  {
    title: "Canopy Thinning",
    date: "Completed Sep 15, 2024",
    label: "AFTER",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ydwfn1tFoOTPsj180n9aJGravXbcxxUYdbIkOAttg5Fn8fSILWe6AyV30J1k2k-J1hjSO41UiPXOr1s1bUKaFpHdv52JI8bvMeZNJvGKx72e-mtqpksYJRHameAemgDh9oyVyEi6b4sM2o1DTzL9OlgC2hGpD61qUwVC60f9H1KDCn-ndeWxBXsJob9acYcvAzR32cNeB0FALA8fWHFmNdiL5OMtsFa04EjTLANeFY2QluLIeqSet44akyuZzflpR0uEn4sQfrPC",
  },
  {
    title: "Emergency Debris Removal",
    date: "Completed Jul 02, 2024",
    label: "AFTER",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwl10Jfyjwm2UfadDBfEPoBG7KODatC5HeM_VVhXNqxokAoQf8LBWnCg77ctRfOSTD4TMq2T_sRA9QhgqgbfGBIRGzIUN36Zb8F-iMMJciEo0O7RMfnH-izWnpJRUayRUYY3F4k1lOa9Gkb8CV0e__xIVfWE9NA9R9xuVPQvKgOWX6WdgVTDRC3oN3duy_6rgFCKheXwm0Rr-42__JVSJUzjnpt7aGRF_h4Lo67wcc0MUzkba4TsAvKajlTA1iIb9ppvuhwiOwWICk",
  },
];

export function GalleryGrid() {
  return (
    <div className="bg-surface rounded-xl border border-outline-variant/30 shadow-sm shadow-[rgba(31,93,58,0.08)] p-6">
      <div className="flex justify-between items-end mb-6 border-b border-outline-variant/20 pb-4">
        <div>
          <h3 className="text-2xl font-semibold text-on-surface">
            Property Work History
          </h3>
          <p className="text-base text-on-surface-variant">
            Visual records of completed services.
          </p>
        </div>
        <button className="text-primary text-xs font-bold tracking-wide hover:underline hidden md:block">
          View Full Gallery
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.title} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg aspect-video mb-3 border border-outline-variant/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={item.image}
              />
              <div className="absolute top-2 left-2 bg-surface/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-primary border border-outline-variant/50">
                {item.label}
              </div>
            </div>
            <p className="text-sm font-semibold text-on-surface tracking-wide">
              {item.title}
            </p>
            <p className="text-xs font-bold text-outline tracking-wide">
              {item.date}
            </p>
          </div>
        ))}

        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg aspect-video mb-3 border border-outline-variant/30 flex items-center justify-center bg-surface-container-low hover:bg-surface-container-high transition-colors">
            <div className="text-center">
              <MaterialIcon
                name="photo_library"
                className="text-3xl text-outline mb-2"
              />
              <p className="text-xs font-bold text-on-surface tracking-wide">
                View 12 more photos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
