'use client';
import { StudentDashboard } from "@/components/StudentDashboard";
import { LoginProvider } from "@/context/useLogin";

export default function Dashboard() {
  return (
    <LoginProvider>
      <div className="min-h-screen bg-white w-full">
        <StudentDashboard />
      </div>
    </LoginProvider>
  );
}
