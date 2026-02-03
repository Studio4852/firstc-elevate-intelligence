import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { week: "Week 1", rate: 62 },
  { week: "Week 2", rate: 64 },
  { week: "Week 3", rate: 63 },
  { week: "Week 4", rate: 67 },
  { week: "Week 5", rate: 69 },
  { week: "Week 6", rate: 71 },
  { week: "Week 7", rate: 73 },
  { week: "Week 8", rate: 78 },
];

export function CureRateChart() {
  return (
    <div className="metric-card col-span-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-primary rounded-full" />
        <h3 className="font-display font-semibold text-lg">Cure Rate Momentum</h3>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="cureRateGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(260, 15%, 90%)" vertical={false} />
            <XAxis 
              dataKey="week" 
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
              formatter={(value: number) => [`${value}%`, 'Cure Rate']}
            />
            <Area 
              type="monotone" 
              dataKey="rate" 
              stroke="hsl(262, 83%, 58%)" 
              strokeWidth={3}
              fill="url(#cureRateGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
