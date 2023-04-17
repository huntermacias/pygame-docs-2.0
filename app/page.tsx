"use client";
import Image from "next/image";
import Link from "next/link";
import ShowCode from "../components/ShowCode";
import PygameModal from "../components/PygameModal";
import { gettingstart } from "../helpers/documentation-code";
import React, { useState } from 'react';
import Autosuggest from "react-autosuggest";

export default function Home() {
  const data = [
    { name: "Pygame", url: "/pygame" },
    { name: "Color", url: "/color" },
    { name: "Draw", url: "/draw" },
    { name: "Events", url: "/events" },
    { name: "Rect", url: "/rect" },
    { name: "Display", url: "/display" },
    { name: "Time", url: "/time" },
    { name: "Image", url: "/image" },
    { name: "Mouse", url: "/mouse" },
    { name: "Surface", url: "/surface" },
    { name: "Pygame", url: "/pygame" },
    { name: "Keys", url: "/keys" },
    { name: "Font", url: "/font" },
    { name: "Locals", url: "/locals" },
    { name: "Mixer", url: "/mixer" },
    { name: "Music", url: "/music" },
  ];

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<
    { name: string; url: string }[]
  >([]);

  const onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const matches =
      inputLength === 0
        ? []
        : data.filter(
            (item) =>
              item.name.toLowerCase().slice(0, inputLength) === inputValue
          );

    setSuggestions(matches);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => {
    return (
      <div className="bg-gray-800 hover:bg-gray-600 px-4 py-3 rounded-lg shadow-md">
        <Image
          src="https://pydocs.huntermacias.io/_next/image?url=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F2570%2F2570575.png&w=128&q=75"
          alt="--"
          className="flex w-10 h-10 rounded-full mr-3"
          width={10}
          height={10}
        />
        <div className="text-white ">
          <Link href={suggestion.url} className="text-lg font-mono">
            {suggestion.name}
          </Link>
          <p className="text-xs">pygame.{suggestion.name}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <header className="py-6 text-sm md:text-lg font-mono bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 flex flex-col sm:flex-row justify-between items-center" aria-label="Top">
    <div className="flex items-center">
      <Link href="/about" className="ml-8 text-gray-400 hover:text-gray-200">
        <span>About</span>
      </Link>
      <Link href="https://www.pygame.org/docs/">
        <span className="ml-8 text-gray-400 hover:text-gray-200">Original Docs</span>
      </Link>
      <Link href="https://github.com/huntermacias/revamed-pygame-docs">
        <span className="ml-8 text-gray-400 hover:text-gray-200">Contribute</span>
      </Link>
    </div>
    <div className="relative p-2 pl-10 w-72">
      <label htmlFor="search" className="sr-only">Search</label>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: "Search...",
          value,
          onChange: (_, { newValue }) => {
            setValue(newValue);
          },
          id: "search",
          className:
            "block w-full px-4 py-2 text-white placeholder-gray-500 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-800",
        }}
      />
    </div>
  </div>
  </header> 

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10 flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-4/5">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 ">
            Welcome to Pygame Docs
          </h1>
          <p className="text-sm md:text-xl mb-8">
            Pygame is a set of Python modules designed for writing video games.
            Pygame adds functionality on top of the SDL library. This allows you
            to create fully featured games and multimedia programs in the python
            language.
          </p>

          <PygameModal />

          <div className="bg-gray-900 text-white py-12 mt-8 max-w-4xl mx-auto">
            <div className="px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl md:text-3xl font-bold mb-6">
                Get started with PyGame
              </h2>
              <p className="text-sm md:text-lg mb-8">
                Follow these simple steps to start creating games with PyGame:
              </p>
              <ol className="list-decimal list-inside mb-8">
                <li className="mb-2 text-sm md:text-lg">
                  Install PyGame using pip:
                </li>
                <code className="block bg-gray-800 rounded-md p-4 mb-4">
                  $ pip install pygame
                </code>
              </ol>
              <ShowCode code={gettingstart} />
              <hr />
              <p className="text-sm md:text-lg pt-8">
                Pygame is a powerful library for creating games and interactive
                applications in Python. With Pygame, you can create anything
                from simple 2D games to complex simulations and visualizations.
                Get started today and unleash your creativity!
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <div className="max-w-md mx-auto">
            <Image
              src="https://uploads-ssl.webflow.com/61f7efd44d01cc87c88dc6f3/6318e21e7ee37e36ce16d836_Getting%20Started%20With%20Pygame%20For%20Kids%20blog01.jpg"
              alt="Pygame Docs"
              className="w-full rounded-md"
              width={400}
              height={400}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
