import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { SMECard } from "@/components/accounts/SMECard";

const accounts = [
  {
    id: "sme-1024",
    name: "TechFlow Solutions Ltd",
    sector: "Technology",
    exposure: 450000,
    arrears: 12500,
    healthScore: 68,
    risk: "medium" as const,
    lastContact: "2023-10-25",
  },
  {
    id: "sme-1025",
    name: "GreenLeaf Logistics",
    sector: "Transport",
    exposure: 1200000,
    arrears: 85000,
    healthScore: 42,
    risk: "high" as const,
    lastContact: "2023-10-20",
  },
  {
    id: "sme-1026",
    name: "Sunrise Gourmet Markets",
    sector: "Retail",
    exposure: 150000,
    arrears: 2000,
    healthScore: 85,
    risk: "low" as const,
    lastContact: "2023-11-01",
  },
  {
    id: "sme-1027",
    name: "CloudScale Analytics",
    sector: "Technology",
    exposure: 320000,
    arrears: 18500,
    healthScore: 55,
    risk: "medium" as const,
    lastContact: "2023-10-28",
  },
  {
    id: "sme-1028",
    name: "Harbor Shipping Co",
    sector: "Logistics",
    exposure: 890000,
    arrears: 120000,
    healthScore: 38,
    risk: "high" as const,
    lastContact: "2023-10-15",
  },
  {
    id: "sme-1029",
    name: "Fresh Farms Produce",
    sector: "Agriculture",
    exposure: 180000,
    arrears: 3500,
    healthScore: 78,
    risk: "low" as const,
    lastContact: "2023-11-02",
  },
];

export default function Accounts() {
  return (
    <MainLayout>
      <Header title="SME Accounts" />

      <div className="grid grid-cols-3 gap-6">
        {accounts.map((account) => (
          <SMECard key={account.id} {...account} />
        ))}
      </div>
    </MainLayout>
  );
}
