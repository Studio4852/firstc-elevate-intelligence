import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CureRateChart } from "@/components/dashboard/CureRateChart";
import { ExposureChart } from "@/components/dashboard/ExposureChart";
import { DollarSign, CheckCircle, AlertTriangle, Clock } from "lucide-react";

export default function Dashboard() {
  return (
    <MainLayout>
      <Header 
        title="Portfolio Overview" 
        subtitle="Monitoring $42.8M total portfolio exposure across 12,400 SME entities."
      />

      <div className="flex items-center justify-end mb-6">
        <div className="text-right">
          <p className="text-xs text-primary font-semibold uppercase tracking-wide">Last Sync</p>
          <p className="text-sm text-muted-foreground">2 mins ago</p>
        </div>
      </div>

      {/* Executive Dashboard Label */}
      <div className="mb-6">
        <h2 className="font-display text-xl font-semibold text-foreground">Executive Dashboard</h2>
        <p className="text-muted-foreground text-sm">Monitoring $42.8M total portfolio exposure across 12,400 SME entities.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <MetricCard
          icon={<DollarSign className="w-6 h-6" />}
          label="Total Exposure"
          value="$42.8M"
          subtext="vs last month"
          change={{ value: "+2.4%", positive: true }}
        />
        <MetricCard
          icon={<CheckCircle className="w-6 h-6" />}
          label="Avg Cure Rate"
          value="71.2%"
          subtext="Target: 75%"
          change={{ value: "+5.1%", positive: true }}
        />
        <MetricCard
          icon={<AlertTriangle className="w-6 h-6" />}
          label="High Risk SMEs"
          value="142"
          subtext="In past 30 days"
          change={{ value: "-12", positive: false }}
        />
        <MetricCard
          icon={<Clock className="w-6 h-6" />}
          label="Pending Decisions"
          value="28"
          subtext="Awaiting Review"
          change={{ value: "+4", positive: true }}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6">
        <CureRateChart />
        <ExposureChart />
      </div>
    </MainLayout>
  );
}
