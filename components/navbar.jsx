"use client";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className="bg-gray-800 shadow-lg text-white font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <Image
                className="block h-10 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/2570/2570575.png"
                alt="pygame-icon"
                width={50}
                height={50}
              />
            </a>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1 font-mono">
            <a
              href="/"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-white"
            >
              Home
            </a>
            <div className="relative ml-8">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-white focus:outline-none"
              >
                Features
              </button>
              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } absolute right-0 mt-2 w-48 rounded-md bg-white ring-1 ring-black ring-opacity-5`}
              >
                <div className="py-1" role="menu">
                {BegTopics.map((topic) => (
                      <Link
                        key={topic}
                        href={`/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <span className="block px-4 py-2 text-sm text-white bg-gray-900 hover:bg-gray-800">
                          {topic}
                        </span>
                      </Link>
                ))}
               
                </div>
              </div>
            </div>
           

            <a
              href="/donate"
              className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-white"
            >
              Donate
            </a>
            <a
              href="/"
              className="ml-8 whitespace-nowrap text-base font-medium text-emerald-600 hover:text-white"
            >
              Log in
            </a>
            <a
              href="/"
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <div className={isOpen ? "block lg:hidden" : "hidden"} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            Home
          </a>
          <a
            href="/"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            Features
          </a>

          <Link
            href="/donate"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            Donate
          </Link>

          <a
            href="/"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            Log in
          </a>
        </div>
        <a
          href="/"
          className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
        >
          Sign up
        </a>
      </div>
    </nav>
  );
};
export default Navbar;

