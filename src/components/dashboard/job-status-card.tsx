import Image from "next/image";
import { CalendarCheck, CheckCircle, MapPin } from "lucide-react";

export function JobStatusCard() {
  return (
    <div className="bg-surface-card rounded-xl border border-border overflow-hidden flex flex-col">
      <div className="p-6 border-b border-border flex justify-between items-center">
        <h3 className="text-xl font-display font-medium text-text flex items-center gap-2">
          <CalendarCheck size={20} className="text-primary" />
          Upcoming Service
        </h3>
        <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">
          Confirmed
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-text-faint mb-1">
              Scheduled Date
            </p>
            <p className="text-2xl font-display font-light text-accent">
              Oct 12, 2024
            </p>
            <p className="text-sm text-text-muted">
              Arrival window: 8:00 AM - 10:00 AM
            </p>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-xs font-mono uppercase tracking-widest text-text-faint mb-2">
              Services to Be Performed
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-text">
                <CheckCircle size={16} className="text-primary" />
                Crown Reduction (Oak Tree)
              </li>
              <li className="flex items-center gap-2 text-sm text-text">
                <CheckCircle size={16} className="text-primary" />
                Deadwood Removal
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <p className="text-xs font-mono uppercase tracking-widest text-text-faint mb-2">
              Assigned Crew
            </p>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-sm">
                MT
              </div>
              <div>
                <p className="text-sm font-medium text-text">
                  Crew #4 - Lead: Mike T.
                </p>
                <p className="text-xs text-text-faint">
                  ISA Certified Arborist
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-surface-raised rounded-lg p-4 border border-border relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent z-10 rounded-lg" />
          <Image
            alt="Property map"
            src="/images/oak-canopy.jpg"
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <p className="text-text text-xs font-medium flex items-center gap-1">
              <MapPin size={12} />
              Front Yard Oak
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
