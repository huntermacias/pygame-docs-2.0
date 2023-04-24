import Image from "next/image";
import React, { useState } from "react";
import { Card } from "../types";

interface Props {
  card: Card;
}

const LearningCard: React.FC<Props> = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const unlockCard = () => {
    setIsLocked(false);
  };

  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-800">
      <div className="relative h-56">
        <Image
          className="object-cover w-full h-full"
          alt={card.title}
          src={card.imageUrl}
          layout="fill"
        />
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-gray-900 rounded-full p-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15v5a2 2 0 002 2h10a2 2 0 002-2v-5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 10V7a5 5 0 00-5-5h-2a5 5 0 00-5 5v3"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-white mb-2">{card.title}</h2>
        <p className="text-gray-400 text-base">{card.description}</p>
        {isLocked ? (
          <button
            onClick={unlockCard}
            className="mt-4 p-4 text-sm font-semibold text-white bg-red-500 rounded-lg focus:outline-none hover:bg-red-600"
          >
            Unlock Now
          </button>
        ) : (
          <button
            onClick={toggleDropdown}
            className="mt-4 p-4 text-sm font-semibold text-gray-300 bg-gray-700 rounded-lg focus:outline-none hover:bg-gray-600"
          >
            Learn More
          </button>
        )}
        {isOpen && (
          <ul className="mt-4 space-y-4 text-sm bg-gray-800 rounded-lg">
            {card.options.map((option, key) => (
              <li
                key={key}
                className="hover:bg-gray-700 hover:rounded-md px-4 py-2"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-gray-300">{key + 1}.</div>
                  <div className="ml-3 text-gray-300 font-medium">
                    <a
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      {option.label}
                    </a>
                  </div>
                </div>
                <p className="pl-8 pr-2 text-gray-400">
                  {option.shortdescription}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LearningCard;
