import React from "react";
import ShowCode from "./ShowCode";
import TextBox from "./TextBox";
import { LayoutProps } from "../types";
import { FaCode } from "react-icons/fa";
import ModuleInfo from "./ModuleInfo";

const DocLayout = ({
  title,
  baseDescription,
  data,
  description,
}: LayoutProps) => {

  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="mt-2 text-lg text-gray-400">{baseDescription}</p>
      </div>
      <div className="mt-10">
        <ul className="space-y-4">
          {data.map((method) => (
            <li key={method.key} className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-white">
                  {method.title}
                </h2>
                <button className="text-gray-500 hover:text-gray-400 transition-colors duration-300">
                  <FaCode className="text-lg" />
                  <span className="sr-only">Show code</span>
                </button>
              </div>
              <p className="mt-2 text-gray-400">{method.description}</p>
              <ShowCode code={method.codesample} />
            </li>
          ))}
        </ul>
      </div>
     
    </div>
  );
};

export default DocLayout;
