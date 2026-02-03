import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  subtext: string;
  change?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

export function MetricCard({ icon, label, value, subtext, change, className }: MetricCardProps) {
  return (
    <div className={cn("metric-card group", className)}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        {change && (
          <div className={cn(
            "flex items-center gap-1 text-sm font-semibold",
            change.positive ? "text-success" : "text-destructive"
          )}>
            {change.positive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            {change.value}
          </div>
        )}
      </div>
      <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">{label}</p>
      <p className="font-display text-3xl font-bold text-foreground mt-1">{value}</p>
      <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wide">{subtext}</p>
    </div>
  );
}
