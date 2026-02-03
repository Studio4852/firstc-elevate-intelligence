import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { AlertTriangle } from "lucide-react";

const data = [
  { name: "Low", value: 45, color: "hsl(262, 83%, 58%)" },
  { name: "Medium", value: 30, color: "hsl(262, 60%, 70%)" },
  { name: "High", value: 15, color: "hsl(262, 40%, 80%)" },
  { name: "Critical", value: 10, color: "hsl(262, 20%, 88%)" },
];

export function RiskDistribution() {
  return (
    <div className="metric-card">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="w-5 h-5 text-primary" />
        <h3 className="font-display font-semibold text-lg">Risk Distribution</h3>
      </div>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(260, 15%, 90%)',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
              formatter={(value: number) => [`${value}%`, '']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-2 mt-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-muted-foreground">{item.name}</span>
            </div>
            <span className="font-semibold text-foreground">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
