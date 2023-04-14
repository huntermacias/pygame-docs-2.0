import React from "react";
import { LearnBegInfo, Description, LearningLayoutProps } from "../types";
import LearningDocStep from "./LearningDocStep";
import Image from "next/image";

const LearningDocLayout = ({
  title,
  baseDescription,
  data,
  description,
}: LearningLayoutProps) => {
  return (
    <div className="bg-gray-800 py-8 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="sm:w-1/2 px-4">
            <h1 className="text-2xl md:text-5xl font-bold text-white">{title}</h1>
            <p className="text-gray-100 text-xl mt-2">{baseDescription}</p>
            <div className="flex mt-4">
              <div className="bg-gray-200 shadow rounded-md p-4 flex-1">
                <p className="text-sm md:text-lg font-bold">{description.title}</p>
                <p className="text-gray-900 font-light mt-2">{description.description}</p>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 px-4">
            <Image className="h-64 w-full object-cover mt-4 rounded-md" alt="pygame-img" src="https://img.itch.zone/aW1nLzQ0MTE3NDMucG5n/315x250%23c/X9QEHt.png"
              width={300}
              height={200} />
          </div>
        </div>
        <div className="mt-8">
          {data.map(step => (
            <LearningDocStep key={step.key} step={step} code={step.codesample} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningDocLayout;