import { MapPin } from "lucide-react";

interface ScopeBadgeProps {
  scope: "directorate" | "district" | "block" | "lac";
  scopeLabel: string;
  subLabel: string;
}

export function ScopeBadge({ scope, scopeLabel, subLabel }: ScopeBadgeProps) {
  const colors = {
    directorate: {
      bg: "#3B82F6",
      text: "#FFFFFF",
    },
    district: {
      bg: "#14B8A6",
      text: "#FFFFFF",
    },
    block: {
      bg: "#A855F7",
      text: "#FFFFFF",
    },
    lac: {
      bg: "#10B981",
      text: "#FFFFFF",
    },
  };

  const color = colors[scope];

  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6"
      style={{ backgroundColor: color.bg, color: color.text }}
    >
      <MapPin className="w-4 h-4" />
      <span className="font-medium">
        Scope: {scopeLabel} — {subLabel}
      </span>
    </div>
  );
}
