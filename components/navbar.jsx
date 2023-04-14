"use client";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 shadow-lg text-white font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                className="block h-10 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/2570/2570575.png"
                alt="pygame-icon"
                width={50}
                height={50}
              />
            </Link>
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
            <Link
              href="/"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-white"
            >
              Docs
            </Link>

            <Link
              href="/donate"
              className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-white"
            >
              Donate
            </Link>
            <Link
              href="/learn"
              className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-white"
            >
              Learn

            </Link>
          </div>
        </div>
      </div>

      <div className={isOpen ? "block lg:hidden" : "hidden"} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            href="/docs"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            Docs
          </Link>

          <Link
            href="/donate"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            Donate
          </Link>

          <Link
              href="/learn"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Learn

            </Link>
        </div>
       
      </div>
    </div>
  );
};
export default Navbar;
