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
          className="overflow-hidden shadow-lg rounded-lg bg-[#121212]"
        >
          <Image
            className="pl-6 pt-3"
            alt={card.title}
            src={card.imageUrl}
            width={200}
            height={200}
          />
          <div className="px-6 py-4 mb-2">
            <h2 className="font-mono font-extralight underline underline-offset-4 text-xl md:text-3xl mb-2 text-white">
              {card.title}
            </h2>
            <p className="text-gray-300 mb-4 space-y-2">
              {card.description}
            </p>
            <div className="relative">
              <button
                onClick={() => handleCardClick(index)}
                className="bottom w-1/2 bg-blue-600 hover:bg-[#2b2b2b] shadow-lg shadow-bg-[#0a0a0a] text-white font-normal py-2 px-4 rounded-lg transition-colors duration-200 hover:font-bold"
              >
                Get Started
              </button>

              <ul className="relative mt-4 text-md md:text-xl bg-[#0a0a0a] rounded-md shadow-lg py-2">
                <div>
                  {card.options.map((option, key) => (
                    <div key={key}>
                      <li>
                        <div key={index}>
                          <div
                            key={key}
                            className="px-4 py-2 rounded-md xl:hover:w-3/4 hover:bg-[#2b2b2b] hover:ml-2 text-white font-extralight"
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
