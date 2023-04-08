'use client'

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import Image from "next/image";

const DONATION_OPTIONS = [
  {
    id: 1,
    name: "Basic",
    description: "Support the project with a basic donation.",
    price: 10,
  },
  {
    id: 2,
    name: "Premium",
    description: "Get some extra perks with a premium donation.",
    price: 25,
  },
  {
    id: 3,
    name: "VIP",
    description: "Become a VIP supporter with a VIP donation.",
    price: 50,
  },
];

const Donation = () => {
  const [selectedOption, setSelectedOption] = useState( {
    id: 1,
    name: "Basic",
    description: "Support the project with a basic donation.",
    price: 10,
  });

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-6 max-w-md mx-auto mt-10">
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


      {selectedOption && (
        <div className="mt-6 border-t border-gray-200 pt-4">
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
