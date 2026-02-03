import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { CheckCircle, AlertTriangle, Clock, FileText } from "lucide-react";

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

export default function Governance() {
  return (
    <MainLayout>
      <Header 
        title="Governance & Compliance" 
        subtitle="Monitor regulatory compliance and audit trails across SME collections."
      />

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
    </MainLayout>
  );
}
