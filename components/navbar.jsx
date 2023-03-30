'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
	const [dropdownOpenBeg1, setDropdownOpenBeg1] = useState(false);
	const [dropdownOpenInter, setDropdownOpenInter] = useState(false);
	const [dropdownOpenAdv, setDropdownOpenAdv] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpenBeg1(!dropdownOpenBeg1);
  };

  const handleDropdownToggleInter = () => {
	setDropdownOpenBeg1(false);
	setDropdownOpenAdv(false);
    setDropdownOpenInter(!dropdownOpenInter);
  };

  const handleDropdownToggleAdv = () => {
	  setDropdownOpenBeg1(false);
	  setDropdownOpenInter(false);
      setDropdownOpenAdv(!dropdownOpenAdv);
  };

  const BegTopics = ["Color",
  "Display",
  "Draw",
  "Event",
  "Font",
  "Image",
  "Key",
  "Locals",
  "Mixer",
  "Mouse",
  "Rect",
  "Surface",
  "Time",
  "Music",
  "Pygame"];

  const InterTopics = ['cursors', 'joystick', 'mask', 'sprite', 'transform', 'BufferProxy', 'freetype', 'gfxdraw', 'midi', 'PixelArray', 'pixelcopy', 'sndarray', 'surfarray', 'math'];

  return (
    <nav className="flex justify-center bg-gray-800">
      <div className="relative">
        <button
          className="text-emerald-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-mono focus:outline-none"
          onClick={handleDropdownToggle}
        >
          Beginner Topics
        </button>
        {dropdownOpenBeg1 && (
          <div
            className="absolute z-10 top-full left-1/2 w-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
			style={{ width: '300px', maxHeight: '200px' }}
          >
            <div className="grid grid-cols-3 gap-4 px-5 py-6 sm:px-8 sm:py-8">
              {BegTopics.map((topic) => (
                <Link key={topic} href={`/${topic.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="block font-medium text-emerald-400 hover:text-emerald-300">{topic}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>


	  <div className="relative">
        <button
          className="text-emerald-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-mono focus:outline-none"
          onClick={handleDropdownToggleInter}
        >
          Intermediate Topics
        </button>
        {dropdownOpenInter && (
          <div
            className="absolute z-10 top-full left-1/2 w-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
			style={{ width: '330px', maxHeight: '200px' }}
          >
            <div className="grid grid-cols-3 gap-4 px-5 py-6 sm:px-8 sm:py-8">
              {InterTopics.map((topic) => (
                <Link key={topic} href={`/${topic.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="block font-medium text-emerald-400 hover:text-emerald-300">{topic}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
