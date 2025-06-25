'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const performanceData = [
  { month: "Jan", math: 78, science: 82, english: 85, history: 72 },
  { month: "Feb", math: 82, science: 85, english: 87, history: 75 },
  { month: "Mar", math: 85, science: 88, english: 89, history: 78 },
  { month: "Apr", math: 88, science: 90, english: 91, history: 80 },
  { month: "May", math: 92, science: 93, english: 88, history: 82 },
  { month: "Jun", math: 95, science: 91, english: 90, history: 85 },
];

export function PerformanceChart() {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-800">
          Performance Trends
          <span className="text-sm font-normal text-gray-600">Last 6 months</span>
        </CardTitle>
        <CardDescription className="text-gray-600">
          Track your progress across different subjects over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={performanceData}>
            <defs>
              <linearGradient id="mathGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#4CAF50" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="scienceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#81C784" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#81C784" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="englishGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A5D6A7" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#A5D6A7" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="historyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C8E6C9" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#C8E6C9" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area type="monotone" dataKey="math" stroke="#4CAF50" fill="url(#mathGradient)" strokeWidth={2} />
            <Area type="monotone" dataKey="science" stroke="#81C784" fill="url(#scienceGradient)" strokeWidth={2} />
            <Area type="monotone" dataKey="english" stroke="#A5D6A7" fill="url(#englishGradient)" strokeWidth={2} />
            <Area type="monotone" dataKey="history" stroke="#C8E6C9" fill="url(#historyGradient)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}