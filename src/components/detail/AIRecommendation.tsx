import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

interface AIRecommendationProps {
  title: string;
  description: string;
  complianceAlert: string;
}

export function AIRecommendation({ title, description, complianceAlert }: AIRecommendationProps) {
  return (
    <div className="ai-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs text-white/70 uppercase tracking-widest font-semibold">
          AI Recovery Recommendation
        </h3>
        <Badge className="bg-white/20 text-white border-0 text-xs">
          Active Advice
        </Badge>
      </div>

      <h2 className="font-display text-2xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>

      <p className="text-white/80 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Compliance Alert */}
      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-accent" />
          <p className="text-xs text-accent uppercase tracking-wide font-semibold">Compliance Alert</p>
        </div>
        <p className="text-white/90 text-sm leading-relaxed">
          {complianceAlert}
        </p>
      </div>
    </div>
  );
}
