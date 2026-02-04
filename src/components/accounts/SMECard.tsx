import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface SMECardProps {
  id: string;
  name: string;
  sector: string;
  exposure: number;
  arrears: number;
  healthScore: number;
  risk: "high" | "medium" | "low";
  lastContact: string;
}

export function SMECard({ id, name, sector, exposure, arrears, healthScore, risk, lastContact }: SMECardProps) {
  const navigate = useNavigate();
  const initial = name.charAt(0);

  const riskColors = {
    high: "badge-risk-high",
    medium: "badge-risk-medium",
    low: "badge-risk-low",
  };

  const riskLabels = {
    high: "HIGH RISK",
    medium: "MEDIUM RISK",
    low: "LOW RISK",
  };

  const healthBarColor = healthScore >= 70 ? "bg-success" : healthScore >= 50 ? "bg-warning" : "bg-destructive";

  return (
    <div 
      onClick={() => navigate(`/accounts/${id}`)}
      className="metric-card cursor-pointer hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <Avatar className="w-12 h-12 bg-secondary">
          <AvatarFallback className="bg-secondary text-primary font-semibold text-lg">
            {initial}
          </AvatarFallback>
        </Avatar>
        <Badge className={cn("text-xs uppercase", riskColors[risk])}>
          {riskLabels[risk]}
        </Badge>
      </div>

      <h3 className="font-display font-semibold text-lg text-foreground">{name}</h3>
      <p className="text-sm text-muted-foreground uppercase tracking-wide">{sector}</p>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">Exposure</span>
          <span className="font-semibold text-foreground">₦{(exposure / 1000000).toFixed(1)}M</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">In Arrears</span>
          <span className="font-semibold text-destructive">₦{(arrears / 1000000).toFixed(2)}M</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">Health Score</span>
          <span className="text-xs text-muted-foreground">{healthScore}%</span>
        </div>
        <div className="health-bar">
          <div 
            className={cn("health-bar-fill", healthBarColor)}
            style={{ width: `${healthScore}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">Last Contact</span>
          <span className="text-xs text-muted-foreground">{lastContact}</span>
        </div>
      </div>
    </div>
  );
}
