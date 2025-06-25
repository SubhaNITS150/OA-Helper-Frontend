'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PerformanceChart } from "./PerformanceChart";
import { SubjectBreakdown } from "./SubjectBreakdown";
import { RecentTests } from "./RecentTests";
import { InsightsPanel } from "./InsightsPanel";
import { ProgressIndicator } from "./ProgressIndicator";
import { TestWiseChart } from "./TestWiseChart";
import { User, Calendar, FileText, BarChart, PieChart, TrendingUp } from "lucide-react";
import { useLogin } from "@/context/useLogin";

export function StudentDashboard() {

  const { user, setUser } = useLogin();

  return (
    <div className="container mx-auto p-6 space-y-8 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-800">
            Student Analytics Dashboard
          </h1>
          <p className="text-gray-600">Track your academic progress and insights</p>
        </div>
        <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
          <User className="h-5 w-5" style={{ color: '#4CAF50' }} />
          <span className="font-medium text-gray-800">{user ? `${user.name}` : "Sign In"}</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border border-gray-200 shadow-sm" style={{ backgroundColor: '#4CAF50' }}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white opacity-90">Overall Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">85.7%</div>
            <p className="text-xs text-white opacity-90">+2.3% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="border border-gray-200 shadow-sm bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Tests Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: '#4CAF50' }}>24</div>
            <p className="text-xs text-gray-600">This semester</p>
          </CardContent>
        </Card>
        
        <Card className="border border-gray-200 shadow-sm bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Best Subject</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" style={{ color: '#4CAF50' }}>Math</div>
            <p className="text-xs text-gray-600">92% average</p>
          </CardContent>
        </Card>
        
        <Card className="border border-gray-200 shadow-sm bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Improvement Area</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">History</div>
            <p className="text-xs text-gray-600">76% average</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-gray-100">
          <TabsTrigger value="overview" className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-gray-900">
            <BarChart className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-gray-900">
            <Calendar className="h-4 w-4" />
            Performance
          </TabsTrigger>
          <TabsTrigger value="subjects" className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-gray-900">
            <PieChart className="h-4 w-4" />
            Subjects
          </TabsTrigger>
          <TabsTrigger value="tests" className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-gray-900">
            <TrendingUp className="h-4 w-4" />
            Test Analysis
          </TabsTrigger>
          <TabsTrigger value="insights" className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-gray-900">
            <User className="h-4 w-4" />
            Insights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <PerformanceChart />
            </div>
            <div className="space-y-6">
              <ProgressIndicator />
              <RecentTests />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <PerformanceChart />
        </TabsContent>

        <TabsContent value="subjects" className="space-y-6">
          <SubjectBreakdown />
        </TabsContent>

        <TabsContent value="tests" className="space-y-6">
          <TestWiseChart />
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <InsightsPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}