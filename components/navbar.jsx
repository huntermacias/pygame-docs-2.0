'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {

const BegTopics = [
	"Color",
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
	"Pygame"
];

const InterTopics = ['cursors', 'joystick', 'mask', 'sprite', 'transform', 'BufferProxy', 'freetype', 'gfxdraw', 'midi', 'PixelArray', 'pixelcopy', 'sndarray', 'surfarray', 'math'];



  const [dropdownOpenBeg1, setDropdownOpenBeg1] = useState(false);
  const [dropdownOpenInter, setDropdownOpenInter] = useState(false);
  const [dropdownOpenAdv, setDropdownOpenAdv] = useState(false);

  const handleDropdownToggle = () => {
	setDropdownOpenInter(false);
      setDropdownOpenAdv(false);
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

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
				<Link href="/">
              		<img className="h-8 w-32" src="https://www.pygame.org/docs/_images/pygame_lofi.png" alt="pygame logo" />

				</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <Link href="/">
                  <span className="text-emerald-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</span>
                </Link>
                <Link href="/about">
                  <span className="text-emerald-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</span>
                </Link>
                
				 */}
				<div className="relative">
					<button className="text-emerald-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none" onClick={handleDropdownToggle}>
						Beginner Topics
					</button>
					{dropdownOpenBeg1 && (
						<div className="absolute z-10 -ml-4 mt-3 transform -translate-x-1/2 md:-translate-x-0 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 lg:mt-1 bg-gray-800/10">
						<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
							<div className="relative grid grid-cols-3 gap-6 bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
							{BegTopics.map((topic) => (
							<Link key={topic} href={`/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`}>
								<span className="block font-medium text-emerald-400 hover:text-emerald-300">
								{topic}
								</span>
							</Link>
							))}

							</div>
						</div>
						</div>
					)}
				</div>



				<div className="relative">
					<button className="text-emerald-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none" onClick={handleDropdownToggleInter}>
						Intermediate Topics
					</button>
					{dropdownOpenInter && (
						<div className="absolute z-10 -ml-4 mt-3 transform -translate-x-1/2 md:-translate-x-0 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/4 lg:-translate-x-1/2 lg:mt-1 bg-gray-800/10">
						<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
							<div className="relative grid grid-cols-3 gap-6 bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
							{InterTopics.map((topic) => (
							<Link key={topic} href={`/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`}>
								<span className="block font-medium text-emerald-400 hover:text-emerald-300">
								{topic}
								</span>
							</Link>
							))}

							</div>
						</div>
						</div>
					)}
				</div>

					<div className="relative">
					<button
						className="text-emerald-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
						onClick={handleDropdownToggleAdv}
					>
						Advances Topics
					</button>
					{dropdownOpenAdv && (
						<div
						className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 lg:mt-1 bg-gray-800/10"
						>
						<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
							<div className="relative grid gap-6 bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
							<Link href="/topics/topic1">
								<span className="block font-medium text-emerald-400 hover:text-emerald-300">
								Topic 1
								</span>
							</Link>
							</div>
						</div>
						</div>
					)}
					</div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
