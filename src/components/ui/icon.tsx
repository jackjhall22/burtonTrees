import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export function Icon({
  icon: LucideIcon,
  className,
  size = 20,
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <LucideIcon
      className={cn("shrink-0", className)}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}
