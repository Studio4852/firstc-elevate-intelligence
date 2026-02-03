import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { RecoveryChart } from "@/components/portfolio/RecoveryChart";
import { RiskDistribution } from "@/components/portfolio/RiskDistribution";
import { StrategyTracking } from "@/components/portfolio/StrategyTracking";
import { Download, Play } from "lucide-react";

export default function Portfolio() {
  return (
    <MainLayout>
      <Header title="Global Intelligence" />

      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">Portfolio Intelligence</h2>
          <p className="text-muted-foreground text-sm">Segmented risk analysis and recovery performance across the SME portfolio.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Play className="w-4 h-4 mr-2" />
            Run Scenario Analysis
          </Button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <RecoveryChart />
        <RiskDistribution />
      </div>

      {/* Strategy Tracking */}
      <StrategyTracking />
    </MainLayout>
  );
}
