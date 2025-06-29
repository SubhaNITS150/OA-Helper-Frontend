'use client'
import React, { createContext, useContext, useState } from "react";

type Topic = {
  id: string;
  name: string;
};

type Question = {
  id: string;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correct: string;
  topicId: string;
  topic: Topic;
};

type QuestionsContextType = {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
};

const QuestionsContext = createContext<QuestionsContextType | undefined>(
  undefined
);

export const QuestionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestions = () => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error("useQuestions must be used within a QuestionsProvider");
  }
  return context;
};
