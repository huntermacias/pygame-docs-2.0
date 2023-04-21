import React from "react";
import ShowCode from "./ShowCode";
import { LayoutProps } from "../types";
import { FaCode } from "react-icons/fa";
import NoDataAvailable from "./NoDataAvailable";

const DocLayout = ({
  title,
  baseDescription,
  data = [],
  description,
}: LayoutProps) => {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        {baseDescription && (
          <p className="mt-2 text-lg text-gray-400">{baseDescription}</p>
        )}
      </div>
      <div className="mt-10">
        {data.length > 0 ? (
          <ul className="space-y-4">
            {data.map(({ key, title, description, codesample }) => (
              <li key={key} className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-white">{title}</h2>
                  <button className="text-gray-500 hover:text-gray-400 transition-colors duration-300">
                    <FaCode className="text-lg" />
                    <span className="sr-only">Show code</span>
                  </button>
                </div>
                <p className="mt-2 text-gray-400">{description}</p>
                <ShowCode code={codesample} />
              </li>
            ))}
          </ul>
        ) : (
          <NoDataAvailable />
        )}
      </div>
    </div>
  );
};

export default DocLayout;
