'use client';

import Practice from "@/components/PracticeComponent";
import { QuestionsProvider } from "@/context/useQuestions";
import {LoginProvider} from "@/context/useLogin";

export default function PracticePage() {
  return (
   <LoginProvider>
      <Practice />
   </LoginProvider>
  );
}
