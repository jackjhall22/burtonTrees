import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/layout/material-icon";

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
    statusColor: "text-[#2d6a46] bg-[#2d6a46]/10",
    borderColor: "bg-[#2d6a46]",
    borderClass: "",
    time: "08:00",
    title: "Oak Canopy Reduction",
    address: "1422 Westover Hills Blvd",
    crew: "Crew 1",
  },
  {
    day: 1,
    top: "30%",
    status: "Scheduled",
    statusColor: "text-outline bg-outline/10",
    borderColor: "bg-outline",
    borderClass: "",
    time: "11:30",
    title: "Stump Grinding",
    address: "8900 Metric Blvd",
    crew: "Crew 2",
  },
  {
    day: 2,
    top: "40%",
    status: "In Transit",
    statusColor: "text-[#f26522] bg-[#f26522]/10",
    borderColor: "bg-[#f26522]",
    borderClass: "border-2 border-[#f26522]/30",
    time: "13:00",
    title: "Emergency Removal",
    address: "Storm Damage - Barton Creek",
    crew: "Crew 4",
    icon: "local_shipping",
  },
];

export function CalendarView() {
  return (
    <div className="flex-1 overflow-auto p-[--spacing-gutter] relative">
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-[0_4px_24px_rgba(31,93,58,0.04)] h-full flex flex-col min-h-[600px]">
        {/* Days Header */}
        <div className="grid grid-cols-5 border-b border-outline-variant/30 bg-surface-container-low/50 shrink-0">
          {days.map((day) => (
            <div
              key={day.label}
              className={cn(
                "p-4 text-center border-r border-outline-variant/30 last:border-0",
                day.isToday && "bg-primary/5"
              )}
            >
              <p
                className={cn(
                  "text-xs font-bold tracking-wide",
                  day.isToday ? "text-primary" : "text-on-surface-variant"
                )}
              >
                {day.label}
              </p>
              <p
                className={cn(
                  "text-2xl font-semibold",
                  day.isToday ? "text-primary font-bold" : "text-on-surface"
                )}
              >
                {day.date}
              </p>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 grid grid-cols-5 relative overflow-y-auto">
          {/* Horizontal grid lines */}
          <div className="absolute inset-0 pointer-events-none flex flex-col">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-1 border-b border-outline-variant/10" />
            ))}
          </div>

          {/* Day columns */}
          {days.map((day, dayIndex) => (
            <div
              key={day.label}
              className={cn(
                "border-r border-outline-variant/30 p-2 relative min-h-[500px]",
                day.isToday && "bg-primary/5"
              )}
            >
              {/* Current time indicator for today */}
              {day.isToday && (
                <div className="absolute top-[45%] left-0 right-0 h-px bg-primary z-20 flex items-center">
                  <div className="size-2 rounded-full bg-primary -ml-1" />
                </div>
              )}

              {/* Job cards */}
              {jobs
                .filter((j) => j.day === dayIndex)
                .map((job) => (
                  <div
                    key={job.title}
                    className={cn(
                      "absolute left-2 right-2 bg-surface border border-outline-variant/50 rounded-lg shadow-sm p-3 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer z-10",
                      job.borderClass
                    )}
                    style={{ top: job.top }}
                  >
                    <div className={`w-1 h-full ${job.borderColor} absolute left-0 top-0 rounded-l-lg`} />
                    <div className="flex justify-between items-start mb-1">
                      <span
                        className={`text-xs font-bold ${job.statusColor} px-2 py-0.5 rounded flex items-center gap-1 tracking-wide`}
                      >
                        {job.icon && (
                          <MaterialIcon
                            name={job.icon}
                            className="text-sm"
                          />
                        )}
                        {job.status}
                      </span>
                      <span className="text-xs font-bold text-on-surface-variant tracking-wide">
                        {job.time}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-on-surface mb-1 line-clamp-1 tracking-wide">
                      {job.title}
                    </p>
                    <p className="text-sm text-on-surface-variant line-clamp-1">
                      {job.address}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-on-surface-variant">
                      <MaterialIcon name="group" className="text-base" />
                      <span className="text-xs font-bold tracking-wide">{job.crew}</span>
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
