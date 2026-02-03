import { cn } from "@/lib/utils";

interface Facility {
  name: string;
  dpd: number;
  amount: number;
  arrears: number;
}

interface FinancialExposureProps {
  totalArrears: number;
  totalExposure: number;
  facilities: Facility[];
}

export function FinancialExposure({ totalArrears, totalExposure, facilities }: FinancialExposureProps) {
  const usedPercentage = (totalArrears / totalExposure) * 100;

  return (
    <div className="metric-card">
      <h3 className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-4">
        Financial Exposure
      </h3>

      <div className="mb-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">Total Arrears</p>
        <div className="flex items-baseline gap-3">
          <span className="font-display text-4xl font-bold text-destructive">
            ${(totalArrears / 1000).toFixed(1)}K
          </span>
          <span className="text-muted-foreground">/ ${(totalExposure / 1000).toFixed(0)}K</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-muted rounded-full overflow-hidden mb-6">
        <div 
          className="h-full bg-destructive rounded-full transition-all duration-500"
          style={{ width: `${Math.min(usedPercentage, 100)}%` }}
        />
      </div>

      {/* Facilities */}
      <div className="space-y-3">
        {facilities.map((facility, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div>
              <p className="font-medium text-foreground">{facility.name}</p>
              <p className="text-xs text-muted-foreground">{facility.dpd} DPD</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-foreground">${(facility.amount / 1000).toFixed(0)}K</p>
              <p className="text-sm font-medium text-destructive">-${(Math.abs(facility.arrears) / 1000).toFixed(1)}K</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
