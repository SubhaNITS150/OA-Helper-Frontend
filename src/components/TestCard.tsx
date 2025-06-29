'use client';

import React from 'react';

type Question = {
  id: string;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correct: string;
  topicId: string;
  topic: {
    id: string;
    name: string;
  };
};

type Props = {
  question: Question;
  index: number;
};

export default function TestCard({ question, index }: Props) {
  return (
    <div className="">
      {/* <h3 className="font-bold mb-2">
        Question {index + 1}
      </h3>
      <p className="mb-4">{question.questionText}</p>
      <ul className="list-disc list-inside space-y-1">
        <li>A. {question.optionA}</li>
        <li>B. {question.optionB}</li>
        <li>C. {question.optionC}</li>
        <li>D. {question.optionD}</li>
      </ul> */}

        
    </div>
  );
}
