'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const testWiseData = [
  { test: "Test 1", math: 78, science: 82, english: 85, history: 72, date: "Jan 15" },
  { test: "Test 2", math: 82, science: 85, english: 87, history: 75, date: "Feb 10" },
  { test: "Test 3", math: 85, science: 88, english: 89, history: 78, date: "Mar 05" },
  { test: "Test 4", math: 88, science: 90, english: 91, history: 80, date: "Apr 12" },
  { test: "Test 5", math: 92, science: 93, english: 88, history: 82, date: "May 18" },
  { test: "Test 6", math: 95, science: 91, english: 90, history: 85, date: "Jun 20" },
];

const mathTestData = [
  { test: "Quiz 1", score: 78, fullMarks: 100, date: "Jan 15" },
  { test: "Unit Test 1", score: 82, fullMarks: 100, date: "Feb 10" },
  { test: "Mid Term", score: 85, fullMarks: 100, date: "Mar 05" },
  { test: "Quiz 2", score: 88, fullMarks: 100, date: "Apr 12" },
  { test: "Unit Test 2", score: 92, fullMarks: 100, date: "May 18" },
  { test: "Final Test", score: 95, fullMarks: 100, date: "Jun 20" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-gray-800">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function TestWiseChart() {
  return (
    <div className="space-y-6">
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Test-wise Performance Comparison</CardTitle>
          <CardDescription className="text-gray-600">
            Compare your performance across all subjects for each test
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={testWiseData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="test" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="math" 
                stroke="#4CAF50" 
                strokeWidth={3}
                dot={{ fill: '#4CAF50', strokeWidth: 2, r: 4 }}
                name="Mathematics"
              />
              <Line 
                type="monotone" 
                dataKey="science" 
                stroke="#81C784" 
                strokeWidth={3}
                dot={{ fill: '#81C784', strokeWidth: 2, r: 4 }}
                name="Science"
              />
              <Line 
                type="monotone" 
                dataKey="english" 
                stroke="#A5D6A7" 
                strokeWidth={3}
                dot={{ fill: '#A5D6A7', strokeWidth: 2, r: 4 }}
                name="English"
              />
              <Line 
                type="monotone" 
                dataKey="history" 
                stroke="#C8E6C9" 
                strokeWidth={3}
                dot={{ fill: '#C8E6C9', strokeWidth: 2, r: 4 }}
                name="History"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Mathematics Test Progress</CardTitle>
          <CardDescription className="text-gray-600">
            Detailed progress tracking for Mathematics tests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mathTestData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="test" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                        <p className="text-sm font-medium text-gray-800">{label}</p>
                        <p className="text-sm" style={{ color: '#4CAF50' }}>
                          Score: {payload[0].value}%
                        </p>
                        <p className="text-sm text-gray-600">
                          Date: {payload[0].payload.date}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#4CAF50" 
                strokeWidth={3}
                dot={{ fill: '#4CAF50', strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, fill: '#4CAF50' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}