import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, ChevronRight, Sparkles, Brain, FileText, TrendingUp, Users, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

type Currency = "USD" | "NGN" | "GBP";

const currencySymbols: Record<Currency, string> = {
  USD: "$",
  NGN: "₦",
  GBP: "£",
};

const playbooks = [
  { name: "Weekly Recovery Review", icon: TrendingUp },
  { name: "Agent Outcome Analysis", icon: Users },
  { name: "Sector Stress Simulation", icon: BarChart3 },
];

const quickMetrics = [
  { label: "Portfolio at Risk", value: { USD: 2450000, NGN: 3920000000, GBP: 1960000 } },
  { label: "Expected Recovery", value: { USD: 1890000, NGN: 3024000000, GBP: 1512000 } },
  { label: "Active Cases", value: { USD: 342, NGN: 342, GBP: 342 }, isCount: true },
];

export default function AICommandCenter() {
  const [query, setQuery] = useState("");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Welcome to the Intelligence Command Center, John. I have compiled the latest portfolio risk explanations. How can I assist with your strategy?",
      confidence: 98,
    },
  ]);

  const formatCurrency = (value: number, isCount?: boolean) => {
    if (isCount) return value.toLocaleString();
    const symbol = currencySymbols[currency];
    if (value >= 1000000000) {
      return `${symbol}${(value / 1000000000).toFixed(1)}B`;
    }
    if (value >= 1000000) {
      return `${symbol}${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `${symbol}${(value / 1000).toFixed(0)}K`;
    }
    return `${symbol}${value.toFixed(0)}`;
  };

  const handleExecute = () => {
    if (!query.trim()) return;
    
    setMessages(prev => [
      ...prev,
      { role: "user", content: query, confidence: 0 },
      { 
        role: "assistant", 
        content: `Analyzing your query: "${query}". Based on current portfolio data, I recommend focusing on high-risk accounts in the retail sector. The model suggests a 73% probability of successful recovery with early intervention strategies.`,
        confidence: 94,
      },
    ]);
    setQuery("");
  };

  return (
    <MainLayout>
      <Header title="Strategic Command" />

      {/* Currency Selector */}
      <div className="flex items-center justify-end mb-6 gap-4">
        <span className="text-sm text-muted-foreground">Currency:</span>
        <Select value={currency} onValueChange={(val) => setCurrency(val as Currency)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USD">USD ($)</SelectItem>
            <SelectItem value="NGN">NGN (₦)</SelectItem>
            <SelectItem value="GBP">GBP (£)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {quickMetrics.map((metric, idx) => (
          <div key={idx} className="metric-card p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{metric.label}</p>
            <p className="font-display text-2xl font-bold text-foreground">
              {formatCurrency(metric.value[currency], metric.isCount)}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Decision Support Panel */}
        <div className="col-span-2 space-y-6">
          <div className="metric-card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Decision Support Link</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-xs text-muted-foreground">
                      MODEL CONFIDENCE: {messages[messages.length - 1]?.confidence || 98}% (HIGH)
                    </span>
                  </div>
                </div>
              </div>
              <Button variant="link" className="text-primary text-sm">
                Why {messages[messages.length - 1]?.confidence || 98}% Confidence?
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4 max-h-80 overflow-y-auto mb-6">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "p-4 rounded-xl",
                    msg.role === "assistant" 
                      ? "bg-muted/50 border-l-4 border-primary" 
                      : "bg-primary/10 ml-8"
                  )}
                >
                  <p className="text-foreground leading-relaxed">{msg.content}</p>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="flex gap-3">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask for strategy explanation, sector deep dives, or agent metrics..."
                className="flex-1"
                onKeyDown={(e) => e.key === "Enter" && handleExecute()}
              />
              <Button onClick={handleExecute} className="bg-foreground text-background hover:bg-foreground/90 px-8">
                Execute
              </Button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Strategic Playbooks */}
          <div className="metric-card">
            <h4 className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-4">
              Strategic Playbooks
            </h4>
            <div className="space-y-2">
              {playbooks.map((playbook, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <playbook.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-medium text-foreground text-sm">{playbook.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Model Logic */}
          <div className="ai-card">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-4 h-4 text-accent" />
              <h4 className="text-xs text-accent uppercase tracking-widest font-semibold">
                Model Logic
              </h4>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Recommendations are weighted 60% on historical cures and 40% on current sentiment analysis from RM interaction notes.
            </p>
            <Button 
              variant="outline" 
              className="w-full border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <FileText className="w-4 h-4 mr-2" />
              Audit Training Data
            </Button>
          </div>

          {/* AI Status */}
          <div className="metric-card p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-success" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">AI Engine Status</p>
                <p className="text-sm font-semibold text-success">Online & Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
