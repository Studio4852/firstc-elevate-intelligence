import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { segment: "Tech", recovery: 78 },
  { segment: "Retail", recovery: 72 },
  { segment: "Logistics", recovery: 65 },
  { segment: "Hospitality", recovery: 58 },
];

export function RecoveryChart() {
  return (
    <div className="metric-card col-span-2">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="font-display font-semibold text-lg">Recovery Performance by Segment</h3>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(260, 15%, 90%)" vertical={false} />
            <XAxis 
              dataKey="segment" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(260, 10%, 45%)', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(260, 10%, 45%)', fontSize: 12 }}
              domain={[0, 100]}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(260, 15%, 90%)',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
              formatter={(value: number) => [`${value}%`, 'Recovery Rate']}
            />
            <Bar 
              dataKey="recovery" 
              fill="hsl(262, 83%, 58%)" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
