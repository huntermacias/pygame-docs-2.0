import React from "react";
import GettingStarted from "./GettingStarted";
import TextBox from "./TextBox";
import { Info, Description, LayoutProps } from "../types";


const DocLayout = ({
  title,
  baseDescription,
  data,
  description,
}: LayoutProps) => {
  return (
    <div className="mx-auto max-w-2xl p-6 mb-10">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-amber-300">{title}</h2>
        <p className="mt-4 text-lg text-white">{baseDescription}</p>
      </div>
      <div className="mt-10">
        <ul className="divide-y divide-gray-200">
          {data.map((method) => (
            <div key={method.key}>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  
                  <div className="flex-1 min-w-0 py-4">
                    <p className="text-lg font-medium text-amber-300 truncate">
                      {method.title}
                    </p>
                    <p className="mt-1 text-2lg text-gray-400 font-mono">
                      <span className="text-bold text-lg text-gray-200">
                        Description:{" "}
                      </span>
                      {method.description}
                    </p>
                  </div>
                </div>
                <GettingStarted code={method.codesample} />
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="mt-10 p-4 pb-40 text-gray-500 font-mono">
        <TextBox
          title={description.title}
          description={description.description}
        />
      </div>
    </div>
  );
};
export default DocLayout;
