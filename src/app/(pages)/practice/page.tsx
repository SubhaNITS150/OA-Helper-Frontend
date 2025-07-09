'use client';

import Practice from "@/components/PracticeComponent";
import { QuestionsProvider } from "@/context/useQuestions";
import {LoginProvider} from "@/context/useLogin";
import Navbar from "@/components/Navbar";

export default function PracticePage() {
  return (
   <LoginProvider>
      <Navbar />
      <Practice />
   </LoginProvider>
  );
}
