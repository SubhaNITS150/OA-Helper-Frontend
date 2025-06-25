'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText } from "lucide-react";

const recentTests = [
  { subject: "Mathematics", score: 95, date: "2024-06-20", type: "Quiz" },
  { subject: "Science", score: 88, date: "2024-06-18", type: "Test" },
  { subject: "English", score: 92, date: "2024-06-15", type: "Essay" },
  { subject: "History", score: 85, date: "2024-06-12", type: "Test" },
];

export function RecentTests() {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-white" as const;
    if (score >= 80) return "bg-green-100 text-green-800" as const;
    if (score >= 70) return "bg-yellow-100 text-yellow-800" as const;
    return "bg-red-100 text-red-800" as const;
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return "#4CAF50";
    return "";
  };

  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-800">
          <FileText className="h-5 w-5" style={{ color: '#4CAF50' }} />
          Recent Tests
        </CardTitle>
        <CardDescription className="text-gray-600">Your latest test results</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentTests.map((test, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100">
            <div className="space-y-1">
              <div className="font-medium text-gray-800">{test.subject}</div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-3 w-3" />
                {test.date}
                <Badge variant="outline" className="text-xs border-gray-300">
                  {test.type}
                </Badge>
              </div>
            </div>
            <Badge 
              className={getScoreColor(test.score)}
              style={test.score >= 90 ? { backgroundColor: getScoreBg(test.score) } : {}}
            >
              {test.score}%
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
