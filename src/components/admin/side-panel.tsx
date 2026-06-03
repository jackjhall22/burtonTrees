import Image from "next/image";
import { RefreshCw, AlertCircle, Clock, Wrench, Maximize } from "lucide-react";

const crews = [
  { name: "Crew 1", status: "On Job", color: "bg-primary", highlight: false },
  { name: "Crew 2", status: "On Job", color: "bg-primary", highlight: false },
  {
    name: "Crew 4",
    status: "In Transit",
    color: "bg-accent",
    highlight: true,
    pulse: true,
  },
  {
    name: "Crew 3",
    status: "Off Duty",
    color: "bg-text-faint",
    highlight: false,
    dim: true,
  },
];

export function SidePanel() {
  return (
    <aside className="w-full lg:w-80 bg-surface-raised border-t lg:border-t-0 lg:border-l border-border flex flex-col shrink-0 lg:h-full overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-sm font-medium text-text mb-4 flex items-center justify-between">
          Crew Status
          <RefreshCw size={14} className="text-text-faint cursor-pointer hover:text-text transition-colors" />
        </h3>
        <div className="flex flex-col gap-2">
          {crews.map((crew) => (
            <div
              key={crew.name}
              className={`flex items-center justify-between p-2.5 rounded-lg border ${
                crew.highlight
                  ? "bg-accent/5 border-accent/20"
                  : "bg-surface-card border-border"
              } ${crew.dim ? "opacity-50" : ""}`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`size-2 rounded-full ${crew.color} ${
                    crew.pulse ? "animate-pulse" : ""
                  }`}
                />
                <span
                  className={`text-xs font-medium ${
                    crew.highlight ? "text-accent" : "text-text"
                  }`}
                >
                  {crew.name}
                </span>
              </div>
              <span
                className={`text-xs font-mono ${
                  crew.highlight ? "text-accent" : "text-text-faint"
                }`}
              >
                {crew.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6 flex flex-col gap-3">
        <div className="flex items-center justify-between sticky top-0 bg-surface-raised pt-1 pb-2 z-10">
          <h3 className="text-sm font-medium text-text">Action Required</h3>
          <span className="bg-accent/15 text-accent text-xs px-2 py-0.5 rounded-full font-mono">
            5
          </span>
        </div>

        <div className="bg-surface-card border border-border rounded-lg p-4 hover:border-border-strong transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-mono text-text-faint bg-white/5 px-2 py-0.5 rounded">
              New Request
            </span>
            <span className="text-[10px] font-mono text-text-faint">
              2h ago
            </span>
          </div>
          <p className="text-sm font-medium text-text mb-1">
            Commercial Property Assessment
          </p>
          <p className="text-xs text-text-muted mb-3">
            Domain Shopping Center
          </p>
          <button className="w-full text-center text-xs font-medium text-accent border border-accent/30 rounded-full py-2 hover:bg-accent/5 transition-colors cursor-pointer">
            Assign Estimator
          </button>
        </div>

        <div className="bg-surface-card border border-border rounded-lg p-4 hover:border-border-strong transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
              Approved Quote
            </span>
            <span className="text-[10px] font-mono text-error flex items-center gap-1">
              <AlertCircle size={10} />
              Urgent
            </span>
          </div>
          <p className="text-sm font-medium text-text mb-1">
            Hazardous Lean - Pecan Tree
          </p>
          <p className="text-xs text-text-muted mb-3">4512 Red River St</p>
          <div className="flex gap-2">
            <span className="text-[10px] font-mono bg-surface-overlay text-text-faint px-2 py-1 rounded border border-border flex items-center gap-1">
              <Clock size={10} />
              4h est
            </span>
            <span className="text-[10px] font-mono bg-surface-overlay text-text-faint px-2 py-1 rounded border border-border flex items-center gap-1">
              <Wrench size={10} />
              Crane Req
            </span>
          </div>
        </div>
      </div>

      <div className="h-48 shrink-0 border-t border-border relative overflow-hidden group">
        <Image
          alt="Route Map"
            src="/images/commercial-trees.jpg"
          width={320}
          height={192}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <div>
            <p className="text-sm font-medium text-text">Active Routes</p>
            <p className="text-xs text-text-faint font-mono">
              Central Sector
            </p>
          </div>
          <button className="bg-surface-card text-text-muted p-2 rounded-full border border-border hover:border-border-strong transition-colors cursor-pointer">
            <Maximize size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}
