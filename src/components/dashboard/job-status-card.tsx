import { MaterialIcon } from "@/components/layout/material-icon";

export function JobStatusCard() {
  return (
    <div className="bg-surface rounded-xl border border-outline-variant/30 shadow-sm shadow-[rgba(31,93,58,0.08)] overflow-hidden flex flex-col">
      <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low/50">
        <h3 className="text-2xl font-semibold text-on-surface flex items-center gap-2">
          <MaterialIcon name="event_available" className="text-primary" />
          Upcoming Service
        </h3>
        <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-wide border border-secondary/20">
          Confirmed
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <p className="text-xs font-bold text-outline mb-1 tracking-widest">
              SCHEDULED DATE
            </p>
            <p className="text-2xl font-bold text-primary">Oct 12, 2024</p>
            <p className="text-base text-on-surface-variant">
              Arrival window: 8:00 AM - 10:00 AM
            </p>
          </div>

          <div className="pt-4 border-t border-outline-variant/20">
            <p className="text-xs font-bold text-outline mb-2 tracking-widest">
              SERVICES TO BE PERFORMED
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-base text-on-surface">
                <MaterialIcon
                  name="check_circle"
                  className="text-primary text-lg"
                />
                Crown Reduction (Oak Tree)
              </li>
              <li className="flex items-center gap-2 text-base text-on-surface">
                <MaterialIcon
                  name="check_circle"
                  className="text-primary text-lg"
                />
                Deadwood Removal
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <p className="text-xs font-bold text-outline mb-2 tracking-widest">
              ASSIGNED CREW
            </p>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Crew Leader"
                className="size-10 rounded-full border border-outline-variant object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6BYRscRZ8BRl95pbzzjZ6wTxLp89CE7Fj9ONqHLz0Q7fue-09QaBlC9nLeIxVYDRFAmPHq5pd8L1aHDXVWcV_R6bp5NgZ_F-LYwl6rR3REMoNd7-9I-cnBYimkcPSGmfacDN6jQ5y3lFXrRVfhkHzwnNEM7QsTMs4YHbI5rljJgwOYd-jc71S1XLM7Cq22S98lBTACsiqsHAUrhIlHUFeqHtXulO0atN6j_HqKjI0CiaM9-hm8OjatjjIvjsqBgVs-20QjnlIfaK7"
              />
              <div>
                <p className="text-base font-semibold text-on-surface">
                  Crew #4 - Lead: Mike T.
                </p>
                <p className="text-xs font-bold text-on-surface-variant tracking-wide">
                  ISA Certified Arborist
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-surface-container-low rounded-lg p-4 border border-outline-variant/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 rounded-lg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Property map"
            className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrBx4bwUVEaUP2Zs1InMPvrPW11hIPmQLYn63ra8It6sGhsrYv3TyHHjlP3sFY8Gf-PM-gsdK2DhVdz5PcUWGzjjcWxa0RWRAqyYAAy4Ty7SCpARCJrZKJynBes5IM4kZ8NgNFJooBOnejlg75NPSI-HnMUP3NuImoPRPGDZulfig2s4jK2Q54QanYJXMEh-0s1gyoj9UyN5WqU9ySUk9Imo15yDD8nIxQ_E0KCEF5Ol1wBwGg1n7_9SBdX_RwNK1tW-gusYXagMFn"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <p className="text-on-primary text-xs font-bold tracking-wide flex items-center gap-1">
              <MaterialIcon name="location_on" className="text-base" />
              Front Yard Oak
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
