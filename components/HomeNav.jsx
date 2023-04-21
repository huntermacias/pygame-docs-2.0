'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Autosuggest from 'react-autosuggest';

// TODO: transfer data to supabase

function HomeNav() {
  const data = [
    { name: 'Pygame', url: '/pygame' },
    { name: 'Color', url: '/color' },
    { name: 'Draw', url: '/draw' },
    { name: 'Events', url: '/events' },
    { name: 'Rect', url: '/rect' },
    { name: 'Display', url: '/display' },
    { name: 'Time', url: '/time' },
    { name: 'Image', url: '/image' },
    { name: 'Mouse', url: '/mouse' },
    { name: 'Surface', url: '/surface' },
    { name: 'Pygame', url: '/pygame' },
    { name: 'Keys', url: '/keys' },
    { name: 'Font', url: '/font' },
    { name: 'Locals', url: '/locals' },
    { name: 'Mixer', url: '/mixer' },
    { name: 'Music', url: '/music' },
  ];

  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const matches =
      inputLength === 0
        ? []
        : data.filter(
            item =>
              item.name.toLowerCase().slice(0, inputLength) === inputValue
          );

    setSuggestions(matches);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = suggestion => suggestion.name;

  const renderSuggestion = (suggestion) => {
    return (
      <div className="bg-gray-800 hover:bg-gray-600 px-4 py-3 rounded-lg shadow-md flex items-center">
        <Image
          src="https://pydocs.huntermacias.io/_next/image?url=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F2570%2F2570575.png&w=128&q=75"
          alt="--"
          className="w-10 h-10 rounded-full mr-3"
          width={10}
          height={10}
        />
        <div className="text-white">
          <Link href={suggestion.url}>
            <span className="text-lg font-mono">
              {suggestion.name}
            </span>
          </Link>
          <p className="text-xs">pygame.{suggestion.name}</p>
        </div>
      </div>
    );
    
  };


  return (
	<div className="py-6 text-sm md:text-lg font-mono bg-gray-900">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 flex flex-col sm:flex-row justify-between items-center"
          aria-label="Top"
        >
          <div className="flex items-center">
            <Link
              href="/about"
              className="ml-8 text-gray-400 hover:text-gray-200"
            >
              <span>About</span>
            </Link>
            <Link href="https://www.pygame.org/docs/">
              <span className="ml-8 text-gray-400 hover:text-gray-200">
                Original Docs
              </span>
            </Link>
            <Link href="https://github.com/huntermacias/revamed-pygame-docs">
              <span className="ml-8 text-gray-400 hover:text-gray-200">
                Contribute
              </span>
            </Link>
          </div>
          <div className="relative p-2 pl-10 w-72">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
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
                  "block bg-gray-800 text-gray-300 w-full px-4 py-2 placeholder-gray-500 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-800",
              }}
            />
          </div>
        </div>
      </div>
  )

            }
export default HomeNav