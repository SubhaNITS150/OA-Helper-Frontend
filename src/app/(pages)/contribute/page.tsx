"use client";

import React, { useState } from "react";
import instance from "@/lib/utils/axios";

export default function Contribute() {
  const [topic, setTopic] = useState<string>("Computer Networks");
  const [topicId, setTopicId] = useState<string>("topic_cn");
  const [question, setQuestion] = useState<string>("");
  const [optionA, setOptionA] = useState<string>("");
  const [optionB, setOptionB] = useState<string>("");
  const [optionC, setOptionC] = useState<string>("");
  const [optionD, setOptionD] = useState<string>("");
  const [correct, setCorrect] = useState<string>("");

  const topics = [
    { id: "topic_cn", name: "Computer Networks" },
    { id: "topic_dbms", name: "Database Management System" },
    { id: "topic_ds", name: "Data Structures" },
    { id: "topic_os", name: "Operating System" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        
        question,
        optionA,
        optionB,
        optionC,
        optionD,
        correct,
        topicId,
      };

      const res = await instance.post("/mcq/add/single", payload);
      console.log(res.data);

      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setCorrect("");
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  return (
    <div className="w-full px-20 py-15 flex flex-col gap-8">
      <h1 className="text-5xl font-semibold">
        Contribute{" "}
        <span style={{ color: "var(--color-primary)" }}>A Question</span>
      </h1>

      <p className="px-2 text-gray-800">
        Help us grow our question bank by contributing your own questions!
      </p>

      <form action="" className="flex flex-col" onSubmit={handleSubmit} >
        <div className="flex flex-row gap-8 px-2 items-center">
          <label htmlFor="topic">Topic :</label>

          <select
            name="topic"
            id="topic"
            value={topicId}
            onChange={(e) => {
              const selectedId = e.target.value;
              const selectedTopic = topics.find((t) => t.id === selectedId);
              if (selectedTopic) {
                setTopicId(selectedTopic.id);
                setTopic(selectedTopic.name);
              }
            }}
            className="border-2 border-[#4CAF4F] px-4 py-2"
            required
          >
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-row items-center gap-3">
          <label htmlFor="question">Question :</label>
          <textarea
            name="question"
            id="question"
            rows={4}
            cols={40}
            className="w-[50%] border-2 border-[#4CAF4F] my-3 px-4 py-2"
            placeholder="Enter your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="flex flex-row items-center gap-5">
          <label htmlFor="option">Options :</label>
          <div className="w-[50%] flex flex-col gap-2">
            <input
              type="text"
              name="option1"
              id="option1"
              className="border-2 border-[#4CAF4F] py-2 px-4"
              value={optionA}
              onChange={(e) => setOptionA(e.target.value)}
              placeholder="Enter option 1"
              required
            />
            <input
              type="text"
              name="option2"
              id="option2"
              className="border-2 border-[#4CAF4F] py-2 px-4"
              placeholder="Enter option 2"
              value={optionB}
              onChange={(e) => setOptionB(e.target.value)}
              required
            />
            <input
              type="text"
              name="option3"
              id="option3"
              className="border-2 border-[#4CAF4F] py-2 px-4"
              placeholder="Enter option 3"
              value={optionC}
              onChange={(e) => setOptionC(e.target.value)}
              required
            />
            <input
              type="text"
              name="option4"
              id="option4"
              className="border-2 border-[#4CAF4F] py-2 px-4"
              placeholder="Enter option 4"
              value={optionD}
              onChange={(e) => setOptionD(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-6 my-3 ">
          <label htmlFor="correct">Correct : </label>
          <input
            type="text"
            required
            name="correct"
            id="correct"
            className="border-2 border-[#4CAF4F] py-2 px-4"
            placeholder="Enter correct option"
            value={correct}
            onChange={(e) => setCorrect(e.target.value)}
          />
        </div>

        <button
          className="bg-[#4CAF4F] py-2 px-4 text-white w-35 rounded-xl ml-20"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
