import Image from "next/image";
import React, { useState } from "react";
import { Card } from "../types";

interface Props {
  card: Card;
}

const LearningCard: React.FC<Props> = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="overflow-hidden rounded-lg">
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
        <p className="text-gray-300 mb-4 px-2">{card.description}</p>
        <div className="relative z-index">
          <button 
            onClick={toggleDropdown}
            className="bottom w-1/2 bg-blue-800 hover:bg-[#2b2b2b] text-white font-normal py-2 px-4 rounded-lg transition-colors duration-200 hover:font-bold">
            Get Started
          </button>
          {isOpen && (
            <div>
              <ul className="relative mt-4 p-2 text-md md:text-xl bg-[#0a0a0a] rounded-md py-2">
                {card.options.map((option, key) => (
                  <li key={key}>
                    <div className="px-4 py-2 rounded-md xl:hover:w-3/4 hover:bg-[#2b2b2b] text-sm md:text-lg hover:ml-2 text-white font-extralight">
                      <a href={option.link}>{key + 1}. {option.label}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
