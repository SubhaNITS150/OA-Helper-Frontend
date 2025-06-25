import { ReactNode } from "react";

type SubjectSelectorProps = {
  iconComponent: ReactNode;
  description: string;
};

export default function SubjectSelector({iconComponent, description} : SubjectSelectorProps) {
  return (
    <button className="px-6 py-3 flex flex-row justify-between items-center rounded-xl border-2 border-gray-200 gap-3 hover:border-[#4CAF4F]">
        {iconComponent}
        {description}
    </button>
  )
}
