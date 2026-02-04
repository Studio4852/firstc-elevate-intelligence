import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { useRole } from "@/context/RoleContext";
import { CheckCircle, AlertTriangle, Clock, FileText, Phone, MessageSquare, Target, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Manager view compliance items
const complianceItems = [
  {
    title: "TCF Guidelines Compliance",
    status: "compliant",
    lastReview: "2023-11-01",
    nextReview: "2024-02-01",
    description: "Treating Customers Fairly guidelines are being followed across all collections activities.",
  },
  {
    title: "Affordability Assessments",
    status: "attention",
    lastReview: "2023-10-28",
    nextReview: "2023-11-15",
    description: "3 accounts require updated affordability assessments before payment plan finalization.",
  },
  {
    title: "Credit File Disclosures",
    status: "compliant",
    lastReview: "2023-10-30",
    nextReview: "2024-01-30",
    description: "All forbearance agreements include proper credit file impact disclosures.",
  },
  {
    title: "SME Lending Standards",
    status: "compliant",
    lastReview: "2023-10-25",
    nextReview: "2024-01-25",
    description: "Reasonable consideration periods and independent advice rights are properly communicated.",
  },
];

// Agent view data
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

const agentCompliance = [
  { rule: "Call recording active", status: true },
  { rule: "Script adherence", status: true },
  { rule: "Disclosure statements", status: true },
  { rule: "Vulnerable customer check", status: true },
  { rule: "Break time compliance", status: false },
];

function ManagerView() {
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="metric-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">94%</p>
          <p className="text-sm text-muted-foreground">Compliance Rate</p>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">12</p>
          <p className="text-sm text-muted-foreground">Items Need Attention</p>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">7</p>
          <p className="text-sm text-muted-foreground">Pending Reviews</p>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">156</p>
          <p className="text-sm text-muted-foreground">Audit Records</p>
        </div>
      </div>

      <h2 className="font-display text-xl font-semibold mb-4">Compliance Checklist</h2>

      <div className="space-y-4">
        {complianceItems.map((item, idx) => (
          <div key={idx} className="metric-card flex items-start gap-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
              item.status === "compliant" ? "bg-success/10" : "bg-warning/10"
            }`}>
              {item.status === "compliant" ? (
                <CheckCircle className="w-5 h-5 text-success" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-warning" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <span className={`text-xs font-semibold uppercase ${
                  item.status === "compliant" ? "text-success" : "text-warning"
                }`}>
                  {item.status === "compliant" ? "Compliant" : "Needs Attention"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>Last Review: {item.lastReview}</span>
                <span>Next Review: {item.nextReview}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AgentView() {
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
          <p className="text-2xl font-display font-bold text-foreground">{agentMetrics.promisesToPay}</p>
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
          <h2 className="font-display text-xl font-semibold mb-4">Today's Tasks</h2>
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

        {/* Compliance Checklist */}
        <div className="metric-card">
          <h2 className="font-display text-xl font-semibold mb-4">My Compliance Status</h2>
          <div className="space-y-3">
            {agentCompliance.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card/50">
                <span className="text-sm text-foreground">{item.rule}</span>
                {item.status ? (
                  <CheckCircle className="w-5 h-5 text-success" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-warning" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm text-foreground font-medium">💡 Reminder</p>
            <p className="text-xs text-muted-foreground mt-1">
              Your next scheduled break is in 45 minutes. Stay compliant with work-time regulations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Governance() {
  const { role } = useRole();

  return (
    <MainLayout>
      <Header 
        title={role === "AGENT" ? "My Dashboard" : "Governance & Compliance"}
        subtitle={role === "AGENT" 
          ? "Track your daily performance and compliance status."
          : "Monitor regulatory compliance and audit trails across SME collections."
        }
      />

      {role === "AGENT" ? <AgentView /> : <ManagerView />}
    </MainLayout>
  );
}