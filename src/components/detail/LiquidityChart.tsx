import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Zap } from "lucide-react";

const data = [
  { month: "Jul", inflow: 48000, outflow: 42000 },
  { month: "Aug", inflow: 45000, outflow: 43000 },
  { month: "Sep", inflow: 42000, outflow: 44000 },
  { month: "Oct", inflow: 35000, outflow: 44500 },
];

export function LiquidityChart() {
  return (
    <div className="metric-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
          Liquidity Intelligence
        </h3>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">Inflow</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-destructive" />
            <span className="text-muted-foreground">Outflow</span>
          </div>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(260, 15%, 90%)" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(260, 10%, 45%)', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(260, 10%, 45%)', fontSize: 12 }}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(260, 15%, 90%)',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
              formatter={(value: number) => [`$${(value / 1000).toFixed(0)}K`, '']}
            />
            <Line 
              type="monotone" 
              dataKey="inflow" 
              stroke="hsl(262, 83%, 58%)" 
              strokeWidth={2}
              dot={{ fill: 'hsl(262, 83%, 58%)', strokeWidth: 0, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="outflow" 
              stroke="hsl(0, 84%, 60%)" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: 'hsl(0, 84%, 60%)', strokeWidth: 0, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stress Signal */}
      <div className="mt-4 flex items-start gap-3 p-4 bg-accent/10 rounded-xl border border-accent/20">
        <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5 text-accent-foreground" />
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">Early Stress Signal</p>
          <p className="text-sm text-destructive">"Inflows have dropped 14% below monthly average. Outflows remain rigid."</p>
        </div>
      </div>
    </div>
  );
}
