import { MaterialIcon } from "@/components/layout/material-icon";

const crews = [
  { name: "Crew 1", status: "On Job", color: "bg-[#2d6a46]", highlight: false },
  { name: "Crew 2", status: "On Job", color: "bg-[#2d6a46]", highlight: false },
  {
    name: "Crew 4",
    status: "In Transit",
    color: "bg-[#f26522]",
    highlight: true,
    pulse: true,
  },
  {
    name: "Crew 3",
    status: "Off Duty",
    color: "bg-outline",
    highlight: false,
    dim: true,
  },
];

export function SidePanel() {
  return (
    <aside className="w-full lg:w-80 bg-surface-container-low border-t lg:border-t-0 lg:border-l border-outline-variant/30 flex flex-col shrink-0 lg:h-full overflow-hidden">
      {/* Crew Status */}
      <div className="p-[--spacing-gutter] border-b border-outline-variant/30 bg-surface">
        <h3 className="text-sm font-semibold text-on-surface mb-[--spacing-stack-md] flex items-center justify-between tracking-wide">
          Crew Status
          <MaterialIcon
            name="refresh"
            className="text-on-surface-variant text-xl"
          />
        </h3>
        <div className="flex flex-col gap-[--spacing-unit]">
          {crews.map((crew) => (
            <div
              key={crew.name}
              className={`flex items-center justify-between p-2 rounded border ${
                crew.highlight
                  ? "bg-primary/5 border-primary/20"
                  : "bg-surface-container-lowest border-outline-variant/20"
              } ${crew.dim ? "opacity-60" : ""}`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`size-2 rounded-full ${crew.color} ${
                    crew.pulse ? "animate-pulse" : ""
                  }`}
                />
                <span
                  className={`text-xs font-bold tracking-wide ${
                    crew.highlight
                      ? "text-primary font-bold"
                      : "text-on-surface"
                  }`}
                >
                  {crew.name}
                </span>
              </div>
              <span
                className={`text-xs font-bold tracking-wide ${
                  crew.highlight ? "text-[#f26522]" : "text-on-surface-variant"
                }`}
              >
                {crew.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Required Pipeline */}
      <div className="flex-1 overflow-auto p-[--spacing-gutter] flex flex-col gap-[--spacing-stack-md]">
        <div className="flex items-center justify-between sticky top-0 bg-surface-container-low pt-1 pb-2 z-10">
          <h3 className="text-sm font-semibold text-on-surface tracking-wide">
            Action Required
          </h3>
          <span className="bg-primary-container text-on-primary-container text-xs px-2 py-0.5 rounded-full font-bold">
            5
          </span>
        </div>

        {/* Pending Quote Card */}
        <div className="bg-surface border border-outline-variant/30 rounded-lg p-4 shadow-sm hover:border-primary/50 transition-colors cursor-grab">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-outline bg-outline/10 px-2 py-0.5 rounded tracking-wide">
              New Request
            </span>
            <span className="text-xs font-bold text-on-surface-variant tracking-wide">
              2h ago
            </span>
          </div>
          <p className="text-sm font-semibold text-on-surface mb-1 tracking-wide">
            Commercial Property Assessment
          </p>
          <p className="text-sm text-on-surface-variant mb-3">
            Domain Shopping Center
          </p>
          <button className="w-full text-center text-xs font-bold text-primary border border-primary/30 rounded py-1.5 hover:bg-primary/5 transition-colors tracking-wide">
            Assign Estimator
          </button>
        </div>

        {/* Approved Quote Card */}
        <div className="bg-surface border border-outline-variant/30 rounded-lg p-4 shadow-sm hover:border-primary/50 transition-colors cursor-grab">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded tracking-wide">
              Approved Quote
            </span>
            <span className="text-xs font-bold text-error flex items-center tracking-wide">
              <MaterialIcon name="priority_high" className="text-sm" />
              Urgent
            </span>
          </div>
          <p className="text-sm font-semibold text-on-surface mb-1 tracking-wide">
            Hazardous Lean - Pecan Tree
          </p>
          <p className="text-sm text-on-surface-variant mb-3">
            4512 Red River St
          </p>
          <div className="flex gap-2">
            <span className="text-xs bg-surface-container text-on-surface-variant px-2 py-1 rounded border border-outline-variant/20 flex items-center gap-1">
              <MaterialIcon name="timer" className="text-xs" />
              4h est
            </span>
            <span className="text-xs bg-surface-container text-on-surface-variant px-2 py-1 rounded border border-outline-variant/20 flex items-center gap-1">
              <MaterialIcon name="construction" className="text-xs" />
              Crane Req
            </span>
          </div>
        </div>
      </div>

      {/* Route Map */}
      <div className="h-48 shrink-0 bg-surface-container border-t border-outline-variant/30 relative overflow-hidden group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Route Map"
          className="w-full h-full object-cover opacity-80"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKWgdJ-ssQOh1ciLuduyYURPJcZnUP-FLHN3K5phVsbvNsL7NXUOPGc0vhotu9y6WeXpwwB4aVZ6EJvpObPiI74b043XNSm56Dkfvxur0NBcUCCi_PhxAuil0y6aasa-mmFKOUMkyWROyIDiaI8kqlZFjyJHe0OObZnGHoGpCIynwGAHTsAaCq-OMr5KZp5efsHbf-XzoBYDE_eGLhAaVigG7r_iE8vLdMvwqYT_huXQ84kHn8HbkuGYHDLDbuMSNYnoR5lHX3cRBj"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
          <div>
            <p className="text-sm font-semibold text-on-surface tracking-wide">
              Active Routes
            </p>
            <p className="text-xs font-bold text-on-surface-variant tracking-wide">
              Central Sector
            </p>
          </div>
          <button className="bg-surface text-primary p-2 rounded-full shadow-sm border border-outline-variant/20 hover:bg-primary/5 transition-colors">
            <MaterialIcon name="fullscreen" className="text-xl" />
          </button>
        </div>
      </div>
    </aside>
  );
}
