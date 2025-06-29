import { ReactNode, useState } from "react";

type SubjectSelectorProps = {
  iconComponent: ReactNode;
  description: string;
  selected: boolean;
  onSelect: () => void;
};

export default function SubjectSelector({
  iconComponent,
  description,
  selected,
  onSelect,
}: SubjectSelectorProps) {

  return (
    <button
      className={`px-6 py-3 flex flex-row justify-between items-center rounded-xl border-2  gap-3 hover:border-[#4CAF4F]
          ${selected ? 'border-[#4CAF4F]' : 'border-gray-200'}
        `}
      onClick={() => {
        
        onSelect();
      }}
    >
      {iconComponent}
      {description}
    </button>
  );
}
