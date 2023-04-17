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
    <div className="max-w-none w-full rounded-md overflow-hidden shadow-lg bg-zinc-950">
      <div className="relative h-40 md:h-56">
        <Image
          className="object-cover object-top w-full h-full"
          alt={card.title}
          src={card.imageUrl}
          layout="fill"
        />
      {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-800 rounded-full p-4">
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
      <div className="px-6 py-4 font-mono">
        <h2 className="text-2xl font-bold text-gray-300 mb-2">{card.title}</h2>
        <p className="text-gray-500 text-base">{card.description}</p>
        {isLocked ? (
          <button
            onClick={unlockCard}
            className="mt-4 mb-2 p-4 ml-4 mr-4 text-sm font-semibold text-white bg-red-500 rounded-lg focus:underline"
          >
            Unlock Now
          </button>
        ) : (
          <button
            onClick={toggleDropdown}
            className="mt-4 mb-2 p-4 ml-4 mr-4 text-sm font-semibold text-gray-300 hover:text-gray-100 bg-gray-800 hover:bg-zinc-800 rounded-lg focus:underline"
          >
            Learn More
          </button>
        )}
        {isOpen && (
          <ul className="mt-2 space-y-2 text-sm">
            {card.options.map((option, key) => (
              <li key={key}>
                <div className="flex items-start font-mono">
                  <div className="flex-shrink-0">
                   {key+1}.
                  </div>
                  <div className="ml-3 text-gray-300 font-medium">
                    <a href={option.link}>{option.label}</a>
                  </div>
                </div>
                <p className="pl-8 pr-2 text-gray-600">{option.shortdescription}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LearningCard;
