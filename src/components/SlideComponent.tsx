'use client';

import useIsMobileView from "@/context/useIsMobileView";

interface SlideInfoProps {
  heading: string;
  highlight: string;
  text: string;
  imageUrl: string;
}

export default function SlideComponent({
  heading,
  highlight,
  text,
  imageUrl,
}: SlideInfoProps) {
  const isMobileView = useIsMobileView();

  return (
    <div
      className="w-full h-[90%] px-6 md:px-8 flex items-center justify-around gap-2"
      style={{ backgroundColor: "var(--color-bg2)" }}
    >
      <div className="flex flex-col px-2 md:px-10">
        <h1 className="text-4xl md:text-6xl font-semibold py-6 text-[#4d4d4d]">
          {heading} <br />{" "}
          <span style={{ color: "var(--color-primary)" }}>{highlight}</span>
        </h1>

        <p className="text-[#717171]">{text}</p>

        <button
          className="py-3 my-6 w-[50%] rounded-md text-white font-semibold"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Register Now
        </button>
      </div>
      {!isMobileView ? 
        (<div className="flex items-center justify-center pr-8 h-[60vh]">
          <img
            src={imageUrl}
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>) :(null)
      }
    </div>
  );
}
