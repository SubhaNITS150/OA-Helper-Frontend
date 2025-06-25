'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const mathData = [
  { name: "Algebra", value: 35, color: "#4CAF50" },
  { name: "Geometry", value: 25, color: "#81C784" },
  { name: "Calculus", value: 20, color: "#A5D6A7" },
  { name: "Statistics", value: 20, color: "#C8E6C9" },
];

const scienceData = [
  { name: "Physics", value: 40, color: "#4CAF50" },
  { name: "Chemistry", value: 30, color: "#81C784" },
  { name: "Biology", value: 30, color: "#A5D6A7" },
];

const englishData = [
  { name: "Grammar", value: 30, color: "#4CAF50" },
  { name: "Literature", value: 35, color: "#81C784" },
  { name: "Writing", value: 25, color: "#A5D6A7" },
  { name: "Vocabulary", value: 10, color: "#C8E6C9" },
];

const historyData = [
  { name: "Ancient History", value: 25, color: "#4CAF50" },
  { name: "Modern History", value: 35, color: "#81C784" },
  { name: "World Wars", value: 25, color: "#A5D6A7" },
  { name: "Local History", value: 15, color: "#C8E6C9" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-gray-800">{payload[0].name}</p>
        <p className="text-sm text-gray-600">{payload[0].value}% of total marks</p>
      </div>
    );
  }
  return null;
};

export function SubjectBreakdown() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Mathematics Breakdown</CardTitle>
          <CardDescription className="text-gray-600">Score distribution by topic</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mathData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {mathData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Science Breakdown</CardTitle>
          <CardDescription className="text-gray-600">Score distribution by subject</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={scienceData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {scienceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">English Breakdown</CardTitle>
          <CardDescription className="text-gray-600">Score distribution by component</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={englishData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {englishData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">History Breakdown</CardTitle>
          <CardDescription className="text-gray-600">Score distribution by period</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={historyData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {historyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}