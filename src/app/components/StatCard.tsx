import { Card } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  subtitle: string;
  borderColor: string;
}

export function StatCard({ icon: Icon, title, value, subtitle, borderColor }: StatCardProps) {
  return (
    <Card
      className="p-6 relative"
      style={{
        backgroundColor: '#FFFFFF',
        borderLeft: `4px solid ${borderColor}`,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
            {title}
          </p>
          <p className="text-3xl mb-1" style={{ color: '#1A1A1A' }}>
            {value.toLocaleString()}
          </p>
          <p className="text-xs" style={{ color: '#6B7280' }}>
            {subtitle}
          </p>
        </div>
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${borderColor}20` }}
        >
          <Icon className="w-6 h-6" style={{ color: borderColor }} />
        </div>
      </div>
    </Card>
  );
}
