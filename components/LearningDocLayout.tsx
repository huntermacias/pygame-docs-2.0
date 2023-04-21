import React from "react";
import { LearningLayoutProps } from "../types";
import LearningDocStep from "./LearningDocStep";

const LearningDocLayout = ({
  title,
  baseDescription,
  shortDesc,
  data,
}: LearningLayoutProps) => {
  return (
    <div className="bg-gray-900 py-12 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="sm:w-1/2 px-4 outline outline-emerald-600/30 rounded-md p-2">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-100">{title}</h1>
            <p className="text-gray-400 text-x mt-2">{baseDescription}</p>
            {/* <div className="flex mt-6">
              <div className="bg-white shadow-md rounded-md p-6  font-light flex-1">
                <p className="text-lg md:text-xl font-bold text-gray-800">About this section</p>
                <p className="text-gray-700 font-light mt-2">{shortDesc}</p>
              </div>
            </div> */}
          </div>
          <div className="w-full md:w-1/2 px-4">
            <img className="h-64 w-full object-cover mt-4 rounded-md" src="https://img.itch.zone/aW1nLzQ0MTE3NDMucG5n/315x250%23c/X9QEHt.png" alt="Game screenshot" />
          </div>
        </div>
        <div className="mt-12">
          {data.map(step => (
            <LearningDocStep key={step.key} step={step} code={step.codesample} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningDocLayout;
