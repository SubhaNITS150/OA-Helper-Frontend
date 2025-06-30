"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Flag, Clock } from "lucide-react";
import { useQuestions } from "@/context/useQuestions";

interface Question {
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
  selectedAnswer?: number;
  status: "not-visited" | "answered" | "not-answered" | "marked-for-review";
}

const TestCard = () => {
  const { questions: contextQuestions } = useQuestions();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [count, setCount] = useState<number>(0);

  // Transform context questions and add local state for answers and status
  useEffect(() => {
    if (contextQuestions && contextQuestions.length > 0) {
      const transformedQuestions: Question[] = contextQuestions.map((question: any, index: number) => ({
        id: question.id || (index + 1).toString(),
        questionText: question.questionText || question.question || question.text,
        optionA: question.optionA || question.options?.[0] || question.option1,
        optionB: question.optionB || question.options?.[1] || question.option2,
        optionC: question.optionC || question.options?.[2] || question.option3,
        optionD: question.optionD || question.options?.[3] || question.option4,
        correct: question.correct || question.correctAnswer,
        topicId: question.topicId || question.topic_id || "default",
        topic: {
          id: question.topic?.id || question.topicId || "1",
          name: question.topic?.name || question.topicName || "General"
        },
        selectedAnswer: undefined,
        status: index === 0 ? "not-answered" : "not-visited"
      }));

      setQuestions(transformedQuestions);
      console.log("Questions loaded from context:", transformedQuestions.length);
    }
  }, [contextQuestions]);

  const handleAnswerSelect = (optionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].selectedAnswer = optionIndex;
    updatedQuestions[currentQuestion].status = "answered";
    setQuestions(updatedQuestions);
    console.log(`Question ${currentQuestion + 1} answered with option ${optionIndex}`);
  };

  const handleQuestionNavigation = (questionIndex: number) => {
    if (
      questions[currentQuestion].status === "not-visited" &&
      questions[currentQuestion].selectedAnswer === undefined
    ) {
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestion].status = "not-answered";
      setQuestions(updatedQuestions);
    }
    setCurrentQuestion(questionIndex);
    console.log(`Navigated to question ${questionIndex + 1}`);
  };

  const handleMarkForReview = () => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].status = "marked-for-review";
    setQuestions(updatedQuestions);
    console.log(`Question ${currentQuestion + 1} marked for review`);
  };

  const handleSaveAndNext = () => {
    if (currentQuestion < questions.length - 1) {
      handleQuestionNavigation(currentQuestion + 1);
    }
  };

  const handleFinish = () => {
    console.log("Test finished!", questions);
    
    const submissionData = questions.map(q => ({
      questionId: q.id,
      selectedAnswer: q.selectedAnswer,
      status: q.status
    }));
    
    console.log("Submission data:", submissionData);
    alert("Test submitted successfully!");
  };

  const getStatusCounts = () => {
    const counts = {
      answered: questions.filter((q) => q.status === "answered").length,
      "not-answered": questions.filter((q) => q.status === "not-answered").length,
      "not-visited": questions.filter((q) => q.status === "not-visited").length,
      "marked-for-review": questions.filter((q) => q.status === "marked-for-review").length,
    };
    return counts;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "answered":
        return "bg-[#4CAF4F] text-white";
      case "not-answered":
        return "bg-red-500 text-white";
      case "marked-for-review":
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-300 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "answered":
        return <CheckCircle className="w-4 h-4" />;
      case "not-answered":
        return <Circle className="w-4 h-4" />;
      case "marked-for-review":
        return <Flag className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  // Loading state
  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4CAF4F] mx-auto mb-4"></div>
  //         <p className="text-lg text-gray-600">Loading questions...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // Error state
  // if (error) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
  //       <div className="text-center bg-white p-8 rounded-lg shadow-lg">
  //         <div className="text-red-500 mb-4">
  //           <Circle className="w-16 h-16 mx-auto" />
  //         </div>
  //         <h2 className="text-xl font-semibold text-gray-800 mb-2">Failed to Load Questions</h2>
  //         <p className="text-gray-600 mb-4">{error}</p>
  //         <Button 
  //           onClick={() => window.location.reload()} 
  //           className="bg-[#4CAF4F] hover:bg-[#16a34a]"
  //         >
  //           Retry
  //         </Button>
  //       </div>
  //     </div>
  //   );
  // }

  // No questions available
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">No Questions Available</h2>
          <p className="text-gray-600">Please check back later.</p>
        </div>
      </div>
    );
  }

  const statusCounts = getStatusCounts();
  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#15803d] mb-2">
            Online Test
          </h1>
          <div className="flex gap-4 text-sm">
            <Badge
              variant="outline"
              className="bg-[#f0fdf4] text-[#15803d] border-[#bbf7d0]"
            >
              {getStatusIcon("answered")} Answered: {statusCounts.answered}
            </Badge>
            <Badge
              variant="outline"
              className="bg-red-50 text-red-700 border-red-200"
            >
              {getStatusIcon("not-answered")} Not Answered:{" "}
              {statusCounts["not-answered"]}
            </Badge>
            <Badge
              variant="outline"
              className="bg-gray-50 text-gray-700 border-gray-200"
            >
              {getStatusIcon("not-visited")} Not Visited:{" "}
              {statusCounts["not-visited"]}
            </Badge>
            <Badge
              variant="outline"
              className="bg-purple-50 text-purple-700 border-purple-200"
            >
              {getStatusIcon("marked-for-review")} Marked for Review:{" "}
              {statusCounts["marked-for-review"]}
            </Badge>
          </div>
        </div>

        {/* Main Question Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="shadow-lg border-[#bbf7d0]">
              <CardHeader className="bg-[#4CAF4F] text-white">
                <CardTitle className="flex justify-between items-center">
                  <span>
                    Question {count + 1} of {questions.length}
                  </span>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleMarkForReview}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    <Flag className="w-4 h-4 mr-2" />
                    Mark for Review
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {currentQ.topic.name}
                    </Badge>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {currentQ.questionText}
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { index: 0, text: currentQ.optionA, label: "A" },
                    { index: 1, text: currentQ.optionB, label: "B" },
                    { index: 2, text: currentQ.optionC, label: "C" },
                    { index: 3, text: currentQ.optionD, label: "D" },
                  ].map((option) => (
                    <div
                      key={option.index}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                        currentQ.selectedAnswer === option.index
                          ? "border-[#4CAF4F] bg-[#f0fdf4]"
                          : "border-gray-200 hover:border-[#86efac]"
                      }`}
                      onClick={() => handleAnswerSelect(option.index)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                            currentQ.selectedAnswer === option.index
                              ? "border-[#4CAF4F] bg-[#4CAF4F]"
                              : "border-gray-300"
                          }`}
                        >
                          {currentQ.selectedAnswer === option.index && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="font-medium text-gray-600 mr-2">{option.label}.</span>
                        <span className="text-gray-700">{option.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    onClick={handleMarkForReview}
                    className="border-[#4CAF4F] text-[#16a34a] hover:bg-[#f0fdf4]"
                  >
                    Save Answer
                  </Button>

                  <div className="flex gap-3">
                    <Button
                      onClick={handleSaveAndNext}
                      disabled={currentQuestion === questions.length - 1}
                      className="bg-[#4CAF4F] hover:bg-[#16a34a] text-white"
                    >
                      Move to Next
                    </Button>
                    <Button
                      onClick={handleFinish}
                      variant="destructive"
                      className="bg-red-500 hover:bg-red-600"
                    >
                      Finish Test
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Question Navigation Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-[#bbf7d0] sticky top-4">
              <CardHeader className="bg-[#4CAF4F] text-white">
                <CardTitle className="text-lg">Question Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {questions.map((question, index) => (
                    <button
                      key={question.id}
                      onClick={() => {
                        handleQuestionNavigation(index)
                        setCount(index)
                      }}
                      className={`w-10 h-10 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105 ${
                        index === currentQuestion
                          ? "ring-2 ring-[#4ade80] ring-offset-2"
                          : ""
                      } ${getStatusColor(question.status)}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                {/* Legend */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#4CAF4F] rounded"></div>
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span>Not Answered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <span>Not Visited</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span>Marked for Review</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
