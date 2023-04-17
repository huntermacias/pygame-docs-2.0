import React from "react";
import { ModuleProps } from "../types";

const ModuleInfo = ({ additionalInfo }: ModuleProps) => {
  return (
    <div className="mt-10 text-gray-400">
      <h3 className="text-2xl font-extrabold mb-4">Additional Information</h3>
      <p className="mb-4">{additionalInfo.info}</p>
      <ul className="list-disc ml-6">
        {additionalInfo.features.map((feature, index) => (
          <li className="mb-2" key={index}>
            {feature}
          </li>
        ))}
        <li className="mb-2"></li>
      </ul>
    </div>
  );
};

export default ModuleInfo;
