import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CureRateChart } from "@/components/dashboard/CureRateChart";
import { ExposureChart } from "@/components/dashboard/ExposureChart";
import { useRole } from "@/context/RoleContext";
import { DollarSign, CheckCircle, AlertTriangle, Clock, Phone, Target, Award, MessageSquare } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

// Agent specific data
const agentMetrics = {
  callsMade: 47,
  callTarget: 60,
  successfulContacts: 32,
  promisesToPay: 12,
  paymentsCollected: 8,
  complianceScore: 96,
};

const agentTasks = [
  { id: 1, account: "TechFlow Solutions", action: "Follow-up call", priority: "high", dueTime: "10:30 AM" },
  { id: 2, account: "GreenLeaf Logistics", action: "Send payment reminder", priority: "medium", dueTime: "11:00 AM" },
  { id: 3, account: "Quick Bites Catering", action: "Confirm payment plan", priority: "low", dueTime: "2:00 PM" },
  { id: 4, account: "Urban Print Shop", action: "Escalation review", priority: "high", dueTime: "3:30 PM" },
];

const recentCollections = [
  { account: "Metro Supplies Ltd", amount: 125000, time: "9:45 AM", status: "success" },
  { account: "Apex Traders", amount: 85000, time: "9:20 AM", status: "success" },
  { account: "Swift Logistics", amount: 0, time: "8:55 AM", status: "pending" },
];

function ManagerDashboard() {
  return (
    <>
      <div className="flex items-center justify-end mb-6">
        <div className="text-right">
          <p className="text-xs text-primary font-semibold uppercase tracking-wide">Last Sync</p>
          <p className="text-sm text-muted-foreground">2 mins ago</p>
        </div>
      </div>

      {/* Executive Dashboard Label */}
      <div className="mb-6">
        <h2 className="font-display text-xl font-semibold text-foreground">Executive Dashboard</h2>
        <p className="text-muted-foreground text-sm">Monitoring ₦68.5B total portfolio exposure across 12,400 SME entities.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <MetricCard
          icon={<DollarSign className="w-6 h-6" />}
          label="Total Exposure"
          value="₦68.5B"
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
    </>
  );
}

function AgentDashboard() {
  const callProgress = (agentMetrics.callsMade / agentMetrics.callTarget) * 100;

  return (
    <>
      {/* Agent Performance Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="metric-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">{agentMetrics.callsMade}/{agentMetrics.callTarget}</p>
          <p className="text-sm text-muted-foreground">Calls Today</p>
          <Progress value={callProgress} className="h-2 mt-2" />
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-success" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">{agentMetrics.successfulContacts}</p>
          <p className="text-sm text-muted-foreground">Successful Contacts</p>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-warning" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">₦{(agentMetrics.promisesToPay * 85000).toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">Promises to Pay</p>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">{agentMetrics.complianceScore}%</p>
          <p className="text-sm text-muted-foreground">Compliance Score</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Today's Tasks */}
        <div className="metric-card">
          <h2 className="font-display text-xl font-semibold mb-4">My Tasks for Today</h2>
          <div className="space-y-3">
            {agentTasks.map((task) => (
              <div key={task.id} className="p-3 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground">{task.account}</h4>
                  <Badge className={
                    task.priority === "high" 
                      ? "bg-destructive/10 text-destructive" 
                      : task.priority === "medium" 
                        ? "bg-warning/10 text-warning" 
                        : "bg-muted text-muted-foreground"
                  }>
                    {task.priority}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{task.action}</p>
                <p className="text-xs text-primary mt-1 font-medium">Due: {task.dueTime}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Collections */}
        <div className="metric-card">
          <h2 className="font-display text-xl font-semibold mb-4">Today's Collections</h2>
          <div className="space-y-3">
            {recentCollections.map((collection, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card/50">
                <div>
                  <h4 className="font-semibold text-foreground">{collection.account}</h4>
                  <p className="text-xs text-muted-foreground">{collection.time}</p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${collection.status === "success" ? "text-success" : "text-warning"}`}>
                    {collection.amount > 0 ? `₦${collection.amount.toLocaleString()}` : "Pending"}
                  </p>
                  <Badge className={collection.status === "success" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}>
                    {collection.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-success/10 border border-success/20">
            <p className="text-sm font-semibold text-success">Total Collected Today</p>
            <p className="text-2xl font-display font-bold text-foreground">₦210,000</p>
          </div>
        </div>
      </div>
    </>
  );
}

function AnalystDashboard() {
  return (
    <>
      <div className="flex items-center justify-end mb-6">
        <div className="text-right">
          <p className="text-xs text-primary font-semibold uppercase tracking-wide">Data Refresh</p>
          <p className="text-sm text-muted-foreground">Real-time</p>
        </div>
      </div>

      {/* Analyst Dashboard Label */}
      <div className="mb-6">
        <h2 className="font-display text-xl font-semibold text-foreground">Analytics Overview</h2>
        <p className="text-muted-foreground text-sm">Portfolio risk analysis and compliance metrics for ₦68.5B exposure.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <MetricCard
          icon={<DollarSign className="w-6 h-6" />}
          label="Total Exposure"
          value="₦68.5B"
          subtext="Across all sectors"
          change={{ value: "+2.4%", positive: true }}
        />
        <MetricCard
          icon={<CheckCircle className="w-6 h-6" />}
          label="Recovery Rate"
          value="68.5%"
          subtext="30-day rolling"
          change={{ value: "+3.2%", positive: true }}
        />
        <MetricCard
          icon={<AlertTriangle className="w-6 h-6" />}
          label="Risk Score"
          value="Medium"
          subtext="Portfolio average"
          change={{ value: "-5pts", positive: true }}
        />
        <MetricCard
          icon={<Clock className="w-6 h-6" />}
          label="Compliance Rate"
          value="94%"
          subtext="Regulatory adherence"
          change={{ value: "+1%", positive: true }}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6">
        <CureRateChart />
        <ExposureChart />
      </div>
    </>
  );
}

export default function Dashboard() {
  const { role } = useRole();

  const getTitle = () => {
    switch (role) {
      case "AGENT": return "My Dashboard";
      case "ANALYST": return "Analytics Dashboard";
      default: return "Portfolio Overview";
    }
  };

  const getSubtitle = () => {
    switch (role) {
      case "AGENT": return "Track your daily performance and collection targets.";
      case "ANALYST": return "Risk analysis and compliance monitoring across the portfolio.";
      default: return "Monitoring ₦68.5B total portfolio exposure across 12,400 SME entities.";
    }
  };

  return (
    <MainLayout>
      <Header 
        title={getTitle()} 
        subtitle={getSubtitle()}
      />

      {role === "AGENT" && <AgentDashboard />}
      {role === "ANALYST" && <AnalystDashboard />}
      {role === "MANAGER" && <ManagerDashboard />}
    </MainLayout>
  );
}
