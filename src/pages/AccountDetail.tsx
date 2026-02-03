import { useParams, useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FinancialExposure } from "@/components/detail/FinancialExposure";
import { LiquidityChart } from "@/components/detail/LiquidityChart";
import { AIRecommendation } from "@/components/detail/AIRecommendation";
import { CommunicationToolkit } from "@/components/detail/CommunicationToolkit";
import { ArrowLeft, Phone, Play } from "lucide-react";

// Mock data - in real app would come from API
const accountData = {
  "sme-1024": {
    name: "TechFlow Solutions Ltd",
    id: "SME-1024",
    sector: "Technology",
    assignee: "Sarah Jenkins",
    risk: "medium" as const,
    healthScore: 68,
    totalArrears: 12500,
    totalExposure: 450000,
    facilities: [
      { name: "Term Loan", dpd: 35, amount: 280000, arrears: -5000 },
      { name: "Overdraft", dpd: 15, amount: 145000, arrears: -7500 },
    ],
    aiRecommendation: {
      title: "Short-term Temporary Forbearance / Partial Payment Plan",
      description: "TechFlow Solutions shows a deteriorating cash flow trend with negative net positions for three consecutive months (Aug-Oct), with inflows dropping from 45,000 to 35,000. While the Health Score of 68 is moderate, the 35-day delinquency on the Term Loan and 15-day delinquency on the Overdraft (which is near its limit) indicate liquidity constraints. A short-term payment plan is recommended to prevent the account from slipping into a higher risk category while the business manages its current cash flow dip.",
      complianceAlert: "Ensure the client is informed that any agreed forbearance may be reflected on their credit file. Adhere to 'Treating Customers Fairly' (TCF) guidelines by conducting a brief affordability assessment before finalizing the plan. Under SME lending standards, the customer must be given a reasonable period to consider options. Ensure all disclosures regarding the impact of missed payments and the right to seek independent financial advice are provided if the situation persists.",
    },
    script: "Good morning, may I speak with the Director of TechFlow Solutions Ltd? This is [Agent Name] from the Business Support Team at [Bank Name]. I am calling regarding your Term Loan and Overdraft facilities, which currently show total arrears of 12,500. We have noticed a shift in your recent cash flow trends and want to proactively discuss support options. Our goal is to find a manageable solution, such as a temporary partial payment plan or a brief interest-only period, to help you stabilize your position without further impacting your credit rating. Can we review your current projections to see what arrangement would best fit your business needs right now?",
  },
};

export default function AccountDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const account = accountData[id as keyof typeof accountData] || accountData["sme-1024"];

  const riskColors = {
    high: "badge-risk-high",
    medium: "badge-risk-medium",
    low: "badge-risk-low",
  };

  return (
    <MainLayout>
      <Header title="SME Deep Dive" />

      {/* Back button */}
      <button 
        onClick={() => navigate("/accounts")}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Accounts
      </button>

      {/* Company Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-display text-2xl font-bold text-foreground">{account.name}</h2>
            <Badge className={riskColors[account.risk]}>
              {account.risk.toUpperCase()} RISK
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              Health Score: {account.healthScore}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            {account.id} • {account.sector.toUpperCase()} SECTOR • ASSIGNED TO {account.assignee.toUpperCase()}
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline">
            <Phone className="w-4 h-4 mr-2" />
            Contact RM
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Play className="w-4 h-4 mr-2" />
            Execute Strategy
          </Button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <FinancialExposure 
          totalArrears={account.totalArrears}
          totalExposure={account.totalExposure}
          facilities={account.facilities}
        />
        <LiquidityChart />
      </div>

      {/* AI and Communication */}
      <div className="grid grid-cols-2 gap-6">
        <AIRecommendation {...account.aiRecommendation} />
        <CommunicationToolkit script={account.script} />
      </div>
    </MainLayout>
  );
}
