import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { SMECard } from "@/components/accounts/SMECard";
import { useRole } from "@/context/RoleContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const accounts = [
  {
    id: "sme-1024",
    name: "TechFlow Solutions Ltd",
    sector: "Technology",
    exposure: 72000000,
    arrears: 2000000,
    healthScore: 68,
    risk: "medium" as const,
    lastContact: "2023-10-25",
  },
  {
    id: "sme-1025",
    name: "GreenLeaf Logistics",
    sector: "Transport",
    exposure: 192000000,
    arrears: 13600000,
    healthScore: 42,
    risk: "high" as const,
    lastContact: "2023-10-20",
  },
  {
    id: "sme-1026",
    name: "Sunrise Gourmet Markets",
    sector: "Retail",
    exposure: 24000000,
    arrears: 320000,
    healthScore: 85,
    risk: "low" as const,
    lastContact: "2023-11-01",
  },
  {
    id: "sme-1027",
    name: "CloudScale Analytics",
    sector: "Technology",
    exposure: 51200000,
    arrears: 2960000,
    healthScore: 55,
    risk: "medium" as const,
    lastContact: "2023-10-28",
  },
  {
    id: "sme-1028",
    name: "Harbor Shipping Co",
    sector: "Logistics",
    exposure: 142400000,
    arrears: 19200000,
    healthScore: 38,
    risk: "high" as const,
    lastContact: "2023-10-15",
  },
  {
    id: "sme-1029",
    name: "Fresh Farms Produce",
    sector: "Agriculture",
    exposure: 28800000,
    arrears: 560000,
    healthScore: 78,
    risk: "low" as const,
    lastContact: "2023-11-02",
  },
];

// Agent assigned accounts
const agentAccounts = [
  {
    id: "sme-1024",
    name: "TechFlow Solutions Ltd",
    arrears: 2000000,
    dpd: 45,
    status: "pending",
    lastCall: "2 hours ago",
    nextAction: "Follow-up call",
  },
  {
    id: "sme-1025",
    name: "GreenLeaf Logistics",
    arrears: 13600000,
    dpd: 67,
    status: "escalated",
    lastCall: "Yesterday",
    nextAction: "Manager review",
  },
  {
    id: "sme-1027",
    name: "CloudScale Analytics",
    arrears: 2960000,
    dpd: 32,
    status: "in-progress",
    lastCall: "3 hours ago",
    nextAction: "Payment plan confirmation",
  },
  {
    id: "sme-1028",
    name: "Harbor Shipping Co",
    arrears: 19200000,
    dpd: 89,
    status: "escalated",
    lastCall: "2 days ago",
    nextAction: "Legal review",
  },
];

function ManagerView() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {accounts.map((account) => (
        <SMECard key={account.id} {...account} />
      ))}
    </div>
  );
}

function AgentView() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="metric-card p-4">
          <p className="text-xs text-muted-foreground uppercase">Assigned Accounts</p>
          <p className="text-2xl font-display font-bold text-foreground">{agentAccounts.length}</p>
        </div>
        <div className="metric-card p-4">
          <p className="text-xs text-muted-foreground uppercase">Total Arrears</p>
          <p className="text-2xl font-display font-bold text-destructive">₦37.8M</p>
        </div>
        <div className="metric-card p-4">
          <p className="text-xs text-muted-foreground uppercase">Pending Actions</p>
          <p className="text-2xl font-display font-bold text-warning">3</p>
        </div>
        <div className="metric-card p-4">
          <p className="text-xs text-muted-foreground uppercase">Escalated</p>
          <p className="text-2xl font-display font-bold text-foreground">2</p>
        </div>
      </div>

      <div className="metric-card">
        <h2 className="font-display text-xl font-semibold mb-4">My Assigned Accounts</h2>
        <div className="space-y-3">
          {agentAccounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  account.status === "escalated" ? "bg-destructive/10" : 
                  account.status === "pending" ? "bg-warning/10" : "bg-primary/10"
                }`}>
                  {account.status === "escalated" ? (
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  ) : account.status === "pending" ? (
                    <Clock className="w-5 h-5 text-warning" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{account.name}</h4>
                  <p className="text-sm text-muted-foreground">{account.dpd} DPD • Last call: {account.lastCall}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-bold text-destructive">₦{(account.arrears / 1000000).toFixed(1)}M</p>
                  <p className="text-xs text-muted-foreground">{account.nextAction}</p>
                </div>
                <Badge className={
                  account.status === "escalated" ? "bg-destructive/10 text-destructive" :
                  account.status === "pending" ? "bg-warning/10 text-warning" :
                  "bg-primary/10 text-primary"
                }>
                  {account.status}
                </Badge>
                <Button size="sm" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Call
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Accounts() {
  const { role } = useRole();

  return (
    <MainLayout>
      <Header 
        title={role === "AGENT" ? "My Accounts" : "SME Accounts"} 
        subtitle={role === "AGENT" 
          ? "Manage your assigned accounts and collection activities."
          : "Overview of all SME accounts in the portfolio."
        }
      />

      {role === "AGENT" ? <AgentView /> : <ManagerView />}
    </MainLayout>
  );
}
