"use client";
import SubjectSelector from "./SubjectSelector";
import { FaCode } from "react-icons/fa6";
import { LiaNewspaper } from "react-icons/lia";
import { TbTie } from "react-icons/tb";
import { MdComputer } from "react-icons/md";
import PhotoSidebarAnimation from "./PhotoSidebarAnimation";
import { useEffect, useState } from "react";
import instance from "@/lib/utils/axios";
import { toast, ToastContainer } from "react-toastify";
import { QuestionsProvider, useQuestions } from "@/context/useQuestions";
import { useRouter } from "next/navigation";

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

export default function Practice() {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const toggleSelect = (subject: string) => {
    setSelectedSubjects((prev) => {
      const newSubjects = prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject];

      return newSubjects;
    });
  };

  const router = useRouter();
  const { setQuestions } = useQuestions();

  const fetchQuestions = async () => {
    const query = `topics=${selectedSubjects
      .map((subject) => encodeURIComponent(subject))
      .join(",")}`;

    try {
      const response = await instance.get(`/mcq/get?${query}`);

      console.log("Fetched Questions:", response.data);
      setQuestions(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching questions:", error);
      return "Not fetch";
    }
  };

  return (
    
    <div className="w-full h-[90vh] flex flex-col px-15 py-4 ">
      <div className="flex flex-row justify-center w-[100%]">
        <div className="flex flex-col gap-4 px-6 py-4 w-[50%] justify-center ">
          <h1 className="text-5xl font-semibold">
            Unlock <span>Perfection</span>
          </h1>
          <p>
            Solve easy to complex problems & get hands-on experience to get
            hired by your dream company!
          </p>

          <button
            className="px-6 py-3 w-[50%] rounded-xl my-6 text-white"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Prepare for Interviews Now
          </button>
        </div>

        <div className="w-[50%] flex justify-center py-6">
          <PhotoSidebarAnimation />
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />

      <div className="flex flex-row gap-4 w-full px-6 py-4 flex-wrap">
        <h1 className="mr-4">
          Trending <br /> Domains
        </h1>
        <SubjectSelector
          iconComponent={<FaCode className="text-[20px]" />}
          description="Computer Networks"
          selected={selectedSubjects.includes("topic_cn")}
          onSelect={() => toggleSelect("topic_cn")}
        />

        <SubjectSelector
          iconComponent={<LiaNewspaper className="text-[20px]" />}
          description="DBMS"
          selected={selectedSubjects.includes("topic_dbms")}
          onSelect={() => toggleSelect("topic_dbms")}
        />

        <SubjectSelector
          iconComponent={<TbTie className="text-[20px]" />}
          description="Data Structures"
          selected={selectedSubjects.includes("topic_ds")}
          onSelect={() => toggleSelect("topic_ds")}
        />

        <SubjectSelector
          iconComponent={<MdComputer className="text-[20px]" />}
          description="Operating System"
          selected={selectedSubjects.includes("topic_os")}
          onSelect={() => toggleSelect("topic_os")}
        />

        <SubjectSelector
          iconComponent={<MdComputer className="text-[20px]" />}
          description="System Design"
          selected={selectedSubjects.includes("System Design")}
          onSelect={() => toggleSelect("System Design")}
        />
      </div>

      <div className="w-[50%]">
        <button
          onClick={() => {
            if (selectedSubjects.length === 0) {
              toast.error("Select at least one subject");
              return;
            }

            console.log("Selected subjects:", selectedSubjects);
            fetchQuestions();
            toast.success("Test Generated Successfully");
            router.push('/practice/test');
            setSelectedSubjects([]);
          }}
          className="mt-4 ml-6 px-6 py-3 bg-blue-600 text-white rounded-xl"
        >
          Generate Test
        </button>
      </div>
    </div>
    
  );
}
