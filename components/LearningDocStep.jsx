import React from 'react';
import ShowCode from './ShowCode';
import { FiCode } from 'react-icons/fi';

const LearningDocStep = ({ step, code }) => {
  return (
    <div className="my-4 font-mono">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center">
            <FiCode className="text-indigo-500 text-2xl" />
          </span>
        </div>
        <div className="ml-4 outline outline-gray-600/30 rounded-md p-4">
          <h2 className="text-lg font-bold text-gray-200">{step.title}</h2>
          <p className="text-gray-400 text-base mt-2">{step.description}</p>
        </div>
      </div>
      <div className="bg-gray-900 shadow rounded-md p-4 mt-4">
        <p className="text-lg font-bold text-white pt-2">{step.title}</p>
        <div className="bg-gray-900 rounded-md p-4 mt-2 md:ml-16 overflow-x-auto text-black">
          <ShowCode code={step.codesample} />
        </div>
      </div>
    </div>
  );
};

export default LearningDocStep;
