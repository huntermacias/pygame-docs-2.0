import Image from "next/image";
import React, { useState } from "react";
import { Card } from "./../types";

interface Props {
  cards: Card[];
}

export default function LearningCard({ cards }: Props) {
  const [activeCard, setActiveCard] = useState(true);

  const handleCardClick = (index) => {
    if (index == 0) {
      setActiveCard(true);
    } else {
      setActiveCard(false);
    }
  };

  return (
    <div>
      {cards.map((card, index) => (
        <div
          key={index}
          className="overflow-hidden shadow-lg rounded-lg bg-gray-800 "
        >
          <Image
            className="pl-6 pt-3"
            alt={card.title}
            src={card.imageUrl}
            width={200}
            height={200}
          />
          <div className="px-6 py-4 mb-2">
            <h2 className="font-mono font-bold text-xl mb-2 text-amber-400">
              {card.title}
            </h2>
            <p className="text-gray-300 text-base mb-4 space-y-2">
              {card.description}
            </p>
            <div className="relative">
              <button
                onClick={() => handleCardClick(index)}
                className="bottom w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Get Started
              </button>

              <ul className="relative mt-4 text-lg bg-gray-900 rounded-md shadow-lg py-2">
                <div>
                  {card.options.map((option, key) => (
                    <div key={key}>
                      <li>
                        <div key={index}>
                          <div
                            key={key}
                            className="px-4 py-2 rounded-md hover:bg-gray-800 hover:w-1/2 hover:ml-2 text-white"
                          >
                            <a href={option.link}>{option.label}</a>
                          </div>
                        </div>
                      </li>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
