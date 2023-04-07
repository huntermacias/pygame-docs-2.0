"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [dropdownOpenBeg1, setDropdownOpenBeg1] = useState(false);
  const [dropdownOpenInter, setDropdownOpenInter] = useState(false);
  const [dropdownOpenEx, setDropdownOpenEx] = useState(false);

  const BegTopics = [
    "Color",
    "Display",
    "Draw",
    "Events",
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
    "Pygame",
  ];
  const InterTopics = [
    "cursors",
    "joystick",
    "mask",
    "sprite",
    "transform",
    "BufferProxy",
    "freetype",
    "gfxdraw",
    "midi",
    "PixelArray",
    "pixelcopy",
    "sndarray",
    "surfarray",
    "math",
  ];
  const pygameExamples = ["Setup", "Objects", "Collisions"];

  const handleDropdownToggle = () => {
    setDropdownOpenBeg1(!dropdownOpenBeg1);
    setDropdownOpenInter(false);
    setDropdownOpenEx(false);
  };

  const handleDropdownToggleInter = () => {
    setDropdownOpenBeg1(false);
    setDropdownOpenInter(!dropdownOpenInter);
    setDropdownOpenEx(false);
  };

  const handleDropdownToggleEx = () => {
    setDropdownOpenBeg1(false);
    setDropdownOpenInter(false);
    setDropdownOpenEx(!dropdownOpenEx);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-emerald-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <button
                className="text-emerald-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                onClick={handleDropdownToggle}
              >
                Beginner Topics
              </button>
              {dropdownOpenBeg1 && (
                <div className="absolute z-10 mt-2 py-2 w-48 bg-gray-800 rounded-lg shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {BegTopics.map((topic) => (
                      <Link
                        key={topic}
                        href={`/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <span className="block px-4 py-2 text-sm text-emerald-400 hover:bg-gray-700 hover:text-white">
                          {topic}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="text-emerald-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                onClick={handleDropdownToggleInter}
              >
                Intermediate Topics
              </button>
              {dropdownOpenInter && (
                <div className="absolute z-10 mt-2 py-2 w-48 bg-gray-800 rounded-lg shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {InterTopics.map((topic) => (
                      <Link
                        key={topic}
                        href={`/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <span className="block px-4 py-2 text-sm text-emerald-400 hover:bg-gray-700 hover:text-white">
                          {topic}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="text-emerald-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                onClick={handleDropdownToggleEx}
              >
                PyGame Examples
              </button>
              {dropdownOpenEx && (
                <div className="absolute z-10 mt-2 py-2 w-48 bg-gray-800 rounded-lg shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {pygameExamples.map((topic) => (
                      <Link
                        key={topic}
                        href={`/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <span className="block px-4 py-2 text-sm text-emerald-400 hover:bg-gray-700 hover:text-white">
                          {topic}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
