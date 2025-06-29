'use client'

import TestCard from '@/components/TestCard'
import { useQuestions } from '@/context/useQuestions'
import React, { useEffect } from 'react'

export default function TestPage() {

  const {questions, setQuestions} = useQuestions();

    useEffect(() => {
    console.log("Received questions in TestPage:", questions);
  }, [questions]);

  return (
     <div className="p-6">

      <TestCard question={questions[0]} index={1} />
    </div>
  )
}
