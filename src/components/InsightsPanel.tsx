'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

export function InsightsPanel() {
  const insights = [
    {
      type: "strength",
      icon: CheckCircle,
      title: "Mathematics Excellence",
      description: "You've consistently scored above 90% in Mathematics for the past 3 months.",
      color: "text-green-600 bg-green-50",
      badge: "Strength"
    },
    {
      type: "improvement",
      icon: TrendingUp,
      title: "History Progress",
      description: "Your History scores have improved by 13% over the last semester.",
      color: "text-blue-600 bg-blue-50",
      badge: "Improving"
    },
    {
      type: "attention",
      icon: AlertTriangle,
      title: "Science Consistency",
      description: "Your Science scores show some variation. Consider regular practice.",
      color: "text-orange-600 bg-orange-50",
      badge: "Focus Area"
    },
    {
      type: "recommendation",
      icon: TrendingUp,
      title: "Study Recommendation",
      description: "Based on your performance, spending 20% more time on History could boost your overall average.",
      color: "text-purple-600 bg-purple-50",
      badge: "Tip"
    }
  ];

  const studyTips = [
    "Review Mathematics concepts regularly to maintain your strong performance",
    "Create timeline charts for History to improve memorization",
    "Use visual diagrams for Science topics to enhance understanding",
    "Practice essay writing for English to improve analytical skills"
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Performance Insights</CardTitle>
          <CardDescription>AI-powered analysis of your academic performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className={`p-4 rounded-lg border ${insight.color}`}>
              <div className="flex items-start gap-3">
                <insight.icon className="h-5 w-5 mt-0.5" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-sm">{insight.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {insight.badge}
                    </Badge>
                  </div>
                  <p className="text-sm opacity-80">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Personalized Study Tips</CardTitle>
          <CardDescription>Recommendations based on your performance patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {studyTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <span className="text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}