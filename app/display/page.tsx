import React from "react";
import { data, description } from "./docs";
import GettingStarted from "../../components/GettingStarted";
import TextBox from "../../components/TextBox";

const Display = () => {
  return (
      <div className="mx-auto max-w-2xl p-6 mb-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-amber-300">
            pygame.display Methods
          </h2>
          <p className="mt-4 text-lg text-white">
            A list of methods available for use with the pygame.display class.
          </p>
        </div>

        <div className="mt-10">
          <ul className="divide-y divide-gray-200">
            {data.map((method) => (
              <div key={method.key}>
                <li className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-medium text-amber-300 truncate">
                        {method.title}
                      </p>
                      <p className="mt-1 text-lg text-gray-300 font-mono">
                        <span className="text-bold text-lg text-amber-400">
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
        <div className="mt-10 p-4 pb-40 text-white font-mono">
          <TextBox
            title="PyGame Display Description"
            description={description[0]}
          />
        </div>
      </div>
  );
};

export default Display;
