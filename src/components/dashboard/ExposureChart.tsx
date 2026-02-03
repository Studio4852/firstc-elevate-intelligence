import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { sector: "Tech", exposure: 15200000, color: "hsl(262, 83%, 58%)" },
  { sector: "Retail", exposure: 8500000, color: "hsl(262, 60%, 65%)" },
  { sector: "Logistics", exposure: 12100000, color: "hsl(262, 83%, 58%)" },
  { sector: "Hospitality", exposure: 6800000, color: "hsl(45, 93%, 58%)" },
];

export function ExposureChart() {
  return (
    <div className="metric-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-accent rounded-full" />
        <h3 className="font-display font-semibold text-lg">Exposure Concentration</h3>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(260, 15%, 90%)" vertical={false} />
            <XAxis 
              dataKey="sector" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(260, 10%, 45%)', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(260, 10%, 45%)', fontSize: 12 }}
              tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(260, 15%, 90%)',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
              formatter={(value: number) => [`$${(value / 1000000).toFixed(1)}M`, 'Exposure']}
            />
            <Bar dataKey="exposure" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
