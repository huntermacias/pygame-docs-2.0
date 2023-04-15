'use client'

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { DONATION_OPTIONS } from "./options"


const GOAL_AMOUNT = 500;

const Donation = () => {
  const [selectedOption, setSelectedOption] = useState(DONATION_OPTIONS[0]);


  const [totalDonated, setTotalDonated] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleDonateClick = (price_id) => {
    setTotalDonated(totalDonated + selectedOption.price);
    window.open(price_id);
  };

  const progress = totalDonated / GOAL_AMOUNT;

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-6 md:max-w-3xl mx-auto mt-14 font-mono">
      <div className="text-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
          Support the Project
        </h3>
        <p className="mt-2 text-gray-600">
          Choose an amount to donate and become a part of the project!
        </p>
      </div>
      <div className="mt-6 space-y-4">
        {DONATION_OPTIONS.map((option) => (
          <div
            key={option.id}
            onClick={() => handleOptionClick(option)}
            className={`border-2 rounded-lg cursor-pointer p-4 ${
              selectedOption && option.id === option.id
                ? "border-indigo-600"
                : "border-gray-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium text-gray-900">{option.name}</h4>
              <p className="text-lg font-medium text-gray-900">${option.price}</p>
            </div>
            <p className="mt-1 text-gray-600">{option.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-medium text-gray-900">Goal Amount</h4>
          <p className="text-lg font-medium text-gray-900">${GOAL_AMOUNT}</p>
        </div>
        <div className="w-full bg-gray-300 h-2 rounded-lg overflow-hidden">
          <div className="bg-indigo-600 h-2 rounded-lg" style={{width: `${progress*100}%`}}></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600">{`$${totalDonated} raised`}</p>
          <p className="text-gray-600">{`${Math.round(progress*100)}%`}</p>
        </div>
      </div>
  
      {selectedOption && (
        <div className="mt-6 border-t border-gray-500 rounded-lg p-4 bg-gray-300 pt-4 font-mono">
          <h4 className="text-lg font-medium text-gray-900">Selected Option</h4>
          <div className="mt-4 flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2570/2570575.png"
                alt="pygame-icon"
                width={50}
                height={50}
              />
            </div>
            <div className="ml-4">
              <h4 className="text-md font-medium text-gray-900">{selectedOption.name}</h4>
              <p className="text-md font-medium text-gray-900">${selectedOption.price}</p>
            </div>
            <div className="ml-auto flex items-center">
              <CheckIcon className="h-6 w-6 text-green-500" />
            </div>
          </div>
          <div className="mt-4">
            <button 
              onClick={() => handleDonateClick(selectedOption.price_id)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default Donation;
