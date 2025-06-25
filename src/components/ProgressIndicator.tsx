'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Target } from "lucide-react";

export function ProgressIndicator() {
  const goals = [
    { subject: "Mathematics", current: 92, target: 95, progress: 97 },
    { subject: "Science", current: 89, target: 90, progress: 99 },
    { subject: "English", current: 87, target: 88, progress: 99 },
    { subject: "History", current: 82, target: 85, progress: 96 },
  ];

  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-800">
          <Target className="h-5 w-5" style={{ color: '#4CAF50' }} />
          Goal Progress
        </CardTitle>
        <CardDescription className="text-gray-600">Track your progress towards semester goals</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800">{goal.subject}</span>
              <span className="text-sm text-gray-600">
                {goal.current}% / {goal.target}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Progress 
                value={goal.progress} 
                className="flex-1" 
                style={{ 
                  backgroundColor: '#f3f4f6',
                }}
              />
              {goal.progress >= 95 && (
                <CheckCircle className="h-4 w-4" style={{ color: '#4CAF50' }} />
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}