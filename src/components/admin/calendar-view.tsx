import { cn } from "@/lib/utils";
import { Truck, Users } from "lucide-react";

const days = [
  { label: "MON", date: "23", isToday: false },
  { label: "TUE", date: "24", isToday: false },
  { label: "WED", date: "25", isToday: true },
  { label: "THU", date: "26", isToday: false },
  { label: "FRI", date: "27", isToday: false },
];

const jobs = [
  {
    day: 0,
    top: "10%",
    status: "Completed",
    statusColor: "text-primary bg-primary/10",
    borderColor: "bg-primary",
    borderClass: "",
    time: "08:00",
    title: "Oak Canopy Reduction",
    address: "1422 Westover Hills Blvd",
    crew: "Crew 1",
    showTruck: false,
  },
  {
    day: 1,
    top: "30%",
    status: "Scheduled",
    statusColor: "text-text-faint bg-white/5",
    borderColor: "bg-text-faint",
    borderClass: "",
    time: "11:30",
    title: "Stump Grinding",
    address: "8900 Metric Blvd",
    crew: "Crew 2",
    showTruck: false,
  },
  {
    day: 2,
    top: "40%",
    status: "In Transit",
    statusColor: "text-accent bg-accent/10",
    borderColor: "bg-accent",
    borderClass: "border border-accent/30",
    time: "13:00",
    title: "Emergency Removal",
    address: "Storm Damage - Barton Creek",
    crew: "Crew 4",
    showTruck: true,
  },
];

export function CalendarView() {
  return (
    <div className="flex-1 overflow-auto p-[var(--spacing-gutter)] relative">
      <div className="bg-surface-raised border border-border rounded-xl h-full flex flex-col min-h-[600px]">
        <div className="grid grid-cols-5 border-b border-border shrink-0">
          {days.map((day) => (
            <div
              key={day.label}
              className={cn(
                "p-4 text-center border-r border-border last:border-0",
                day.isToday && "bg-primary/5"
              )}
            >
              <p
                className={cn(
                  "text-xs font-mono uppercase tracking-widest",
                  day.isToday ? "text-accent" : "text-text-faint"
                )}
              >
                {day.label}
              </p>
              <p
                className={cn(
                  "text-2xl font-display font-light",
                  day.isToday ? "text-accent" : "text-text"
                )}
              >
                {day.date}
              </p>
            </div>
          ))}
        </div>

        <div className="flex-1 grid grid-cols-5 relative overflow-y-auto">
          <div className="absolute inset-0 pointer-events-none flex flex-col">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-1 border-b border-border/50" />
            ))}
          </div>

          {days.map((day, dayIndex) => (
            <div
              key={day.label}
              className={cn(
                "border-r border-border p-2 relative min-h-[500px]",
                day.isToday && "bg-primary/5"
              )}
            >
              {day.isToday && (
                <div className="absolute top-[45%] left-0 right-0 h-px bg-accent z-20 flex items-center">
                  <div className="size-2 rounded-full bg-accent -ml-1" />
                </div>
              )}

              {jobs
                .filter((j) => j.day === dayIndex)
                .map((job) => (
                  <div
                    key={job.title}
                    className={cn(
                      "absolute left-2 right-2 bg-surface-card border border-border rounded-lg p-3 hover:-translate-y-0.5 hover:border-border-strong transition-all cursor-pointer z-10",
                      job.borderClass
                    )}
                    style={{ top: job.top }}
                  >
                    <div
                      className={`w-1 h-full ${job.borderColor} absolute left-0 top-0 rounded-l-lg`}
                    />
                    <div className="flex justify-between items-start mb-1">
                      <span
                        className={`text-[10px] font-mono font-medium ${job.statusColor} px-2 py-0.5 rounded flex items-center gap-1`}
                      >
                        {job.showTruck && <Truck size={10} />}
                        {job.status}
                      </span>
                      <span className="text-[10px] font-mono text-text-faint">
                        {job.time}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-text mb-1 line-clamp-1">
                      {job.title}
                    </p>
                    <p className="text-xs text-text-muted line-clamp-1">
                      {job.address}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-text-faint">
                      <Users size={12} />
                      <span className="text-[10px] font-mono">{job.crew}</span>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
