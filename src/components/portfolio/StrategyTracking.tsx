import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

const strategies = [
  { name: "Payment Plan", rate: 82, change: 4, positive: true },
  { name: "Restructuring", rate: 65, change: 2, positive: false },
  { name: "Legal Action", rate: 24, change: 1, positive: true },
];

export function StrategyTracking() {
  return (
    <div className="metric-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-semibold text-lg">Strategy Success Tracking</h3>
        <span className="text-sm text-primary font-medium">Live Data</span>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {strategies.map((strategy, idx) => (
          <div key={idx} className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
              {strategy.name}
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-display text-3xl font-bold text-foreground">
                {strategy.rate}%
              </span>
              <span className={cn(
                "text-sm font-semibold flex items-center gap-0.5",
                strategy.positive ? "text-success" : "text-destructive"
              )}>
                {strategy.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {strategy.positive ? "+" : "-"}{strategy.change}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
