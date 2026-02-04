import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Wallet, Users, TrendingUp, AlertCircle, Building, Clock } from "lucide-react";

const microAccounts = [
  {
    id: "micro-001",
    name: "Quick Bites Catering",
    loanAmount: 4000000,
    outstanding: 2960000,
    monthlyPayment: 136000,
    status: "current",
    daysOverdue: 0,
    sector: "Food & Beverage",
    healthScore: 88,
  },
  {
    id: "micro-002",
    name: "Urban Print Shop",
    loanAmount: 2400000,
    outstanding: 1952000,
    monthlyPayment: 83200,
    status: "attention",
    daysOverdue: 15,
    sector: "Retail",
    healthScore: 62,
  },
  {
    id: "micro-003",
    name: "Green Thumb Gardens",
    loanAmount: 4800000,
    outstanding: 3840000,
    monthlyPayment: 156800,
    status: "current",
    daysOverdue: 0,
    sector: "Agriculture",
    healthScore: 75,
  },
  {
    id: "micro-004",
    name: "Mobile Repairs Hub",
    loanAmount: 1920000,
    outstanding: 1360000,
    monthlyPayment: 67200,
    status: "delinquent",
    daysOverdue: 45,
    sector: "Technology",
    healthScore: 38,
  },
  {
    id: "micro-005",
    name: "Style Studio Salon",
    loanAmount: 3200000,
    outstanding: 2688000,
    monthlyPayment: 108800,
    status: "current",
    daysOverdue: 0,
    sector: "Services",
    healthScore: 82,
  },
  {
    id: "micro-006",
    name: "Corner Grocery Plus",
    loanAmount: 2880000,
    outstanding: 2272000,
    monthlyPayment: 99200,
    status: "attention",
    daysOverdue: 8,
    sector: "Retail",
    healthScore: 58,
  },
];

const statusColors: Record<string, string> = {
  current: "bg-success/10 text-success border-success/20",
  attention: "bg-warning/10 text-warning border-warning/20",
  delinquent: "bg-destructive/10 text-destructive border-destructive/20",
};

const statusLabels: Record<string, string> = {
  current: "Current",
  attention: "Needs Attention",
  delinquent: "Delinquent",
};

export default function MicroLoans() {
  const totalPortfolio = microAccounts.reduce((sum, acc) => sum + acc.outstanding, 0);
  const atRiskAmount = microAccounts
    .filter((acc) => acc.status !== "current")
    .reduce((sum, acc) => sum + acc.outstanding, 0);
  const avgHealthScore = Math.round(
    microAccounts.reduce((sum, acc) => sum + acc.healthScore, 0) / microAccounts.length
  );

  return (
    <MainLayout>
      <Header
        title="Micro Business Loans"
        subtitle="Monitor and manage micro-enterprise loan portfolios under ₦80M."
      />

      {/* Portfolio Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="metric-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">₦{(totalPortfolio / 1000000).toFixed(1)}M</p>
          <p className="text-sm text-muted-foreground">Total Portfolio</p>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">{microAccounts.length}</p>
          <p className="text-sm text-muted-foreground">Active Accounts</p>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-destructive" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">₦{(atRiskAmount / 1000000).toFixed(1)}M</p>
          <p className="text-sm text-muted-foreground">At Risk Amount</p>
        </div>
        <div className="metric-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">{avgHealthScore}</p>
          <p className="text-sm text-muted-foreground">Avg Health Score</p>
        </div>
      </div>

      {/* Account List */}
      <div className="metric-card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Micro Loan Accounts
          </h2>
          <Badge variant="outline" className="text-muted-foreground">
            {microAccounts.length} accounts
          </Badge>
        </div>

        <div className="space-y-4">
          {microAccounts.map((account) => (
            <div
              key={account.id}
              className="p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{account.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {account.id.toUpperCase()} • {account.sector}
                    </p>
                  </div>
                </div>
                <Badge className={statusColors[account.status]}>
                  {statusLabels[account.status]}
                </Badge>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Loan Amount</p>
                  <p className="font-semibold text-foreground">
                    ₦{(account.loanAmount / 1000000).toFixed(1)}M
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Outstanding</p>
                  <p className="font-semibold text-foreground">
                    ₦{(account.outstanding / 1000000).toFixed(2)}M
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Monthly Payment</p>
                  <p className="font-semibold text-foreground">
                    ₦{account.monthlyPayment.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Days Overdue</p>
                  <p
                    className={`font-semibold ${
                      account.daysOverdue > 0 ? "text-destructive" : "text-success"
                    }`}
                  >
                    {account.daysOverdue > 0 ? (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {account.daysOverdue} days
                      </span>
                    ) : (
                      "On Time"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">Health Score</span>
                    <span className="text-xs font-semibold text-foreground">
                      {account.healthScore}/100
                    </span>
                  </div>
                  <Progress
                    value={account.healthScore}
                    className="h-2"
                  />
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Repaid</p>
                  <p className="text-sm font-semibold text-primary">
                    {Math.round(
                      ((account.loanAmount - account.outstanding) / account.loanAmount) * 100
                    )}
                    %
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
