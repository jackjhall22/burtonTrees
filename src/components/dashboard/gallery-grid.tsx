import Image from "next/image";
import { ImageIcon } from "lucide-react";

const galleryItems = [
  {
    title: "Canopy Thinning",
    date: "Completed Sep 15, 2024",
    label: "AFTER",
    image: "/images/tree-trimming.jpg",
  },
  {
    title: "Emergency Debris Removal",
    date: "Completed Jul 02, 2024",
    label: "AFTER",
    image: "/images/debris-cleanup.jpg",
  },
];

export function GalleryGrid() {
  return (
    <div className="bg-surface-card rounded-xl border border-border p-6">
      <div className="flex justify-between items-end mb-6 border-b border-border pb-4">
        <div>
          <h3 className="text-xl font-display font-medium text-text">
            Property Work History
          </h3>
          <p className="text-sm text-text-muted">
            Visual records of completed services.
          </p>
        </div>
        <button className="text-accent text-xs font-medium hover:underline hidden md:block cursor-pointer">
          View Full Gallery
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.title} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg aspect-video mb-3 border border-border">
              <Image
                alt={item.title}
                src={item.image}
                width={600}
                height={338}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded font-mono text-[10px] text-accent border border-border">
                {item.label}
              </div>
            </div>
            <p className="text-sm font-medium text-text">{item.title}</p>
            <p className="text-xs text-text-faint">{item.date}</p>
          </div>
        ))}

        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg aspect-video mb-3 border border-border flex items-center justify-center bg-surface-raised hover:bg-surface-overlay transition-colors">
            <div className="text-center">
              <ImageIcon size={24} className="text-text-faint mb-2 mx-auto" />
              <p className="text-xs font-medium text-text-muted">
                View 12 more photos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
