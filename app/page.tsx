'use client'
import Image from 'next/image';
import Link from 'next/link';
import GettingStarted from '../components/GettingStarted';
import PygameModal from "../components/PygameModal"
import { gettingstart } from '../helpers/documentation-code';
import { useState } from 'react';
import Autosuggest from 'react-autosuggest';

export default function Home() {
  const data = [
    { name: 'Color', url: '/color' },
    { name: 'Draw', url: '/draw' },
    { name: 'Events', url: '/events' },
    { name: 'Rect', url: '/rect' },
  ];

  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<{ name: string, url: string }[]>([]);
  

 

  const onSuggestionsFetchRequested = ({value}) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const matches = inputLength === 0 ? []
      : data.filter(item =>
          item.name.toLowerCase().slice(0, inputLength) === inputValue
        );

    setSuggestions(matches);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = suggestion => suggestion.name;

  const renderSuggestion = suggestion => {
    return (
      <div className="bg-gray-800 px-4 py-3 rounded-lg shadow-md">
        <img src='https://pydocs.huntermacias.io/_next/image?url=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F2570%2F2570575.png&w=128&q=75' 
            alt='--' className="w-10 h-10 rounded-full mr-3" />
        <div className="text-white">
          <p className="text-lg font-medium">{suggestion.name}</p>
          <p className="text-xs">pygame.{suggestion.name}</p>
        </div>
      </div>
    );
  };
  
  

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <header className="py-6">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center" aria-label="Top">
          <div className="flex items-center">
            <Link href="/about" className="ml-8 text-gray-400 hover:text-gray-200">
              <span>
                About
              </span>
            </Link>

            <Link href="https://www.pygame.org/docs/">
              <span className="ml-8 text-gray-400 hover:text-gray-200"
              >
                Original Docs
              </span>
            </Link>

            <Link href="https://github.com/huntermacias/revamed-pygame-docs">
              <span className="ml-8 text-gray-400 hover:text-gray-200">
                Contribute
              </span>

            </Link>
          </div>

          <div className="relative w-72 pt-4">
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={{
                placeholder: 'Search...',
                value,
                onChange: (_, { newValue }) => {
                  setValue(newValue);
                },
                className: 'block w-full px-4 py-2 text-white placeholder-gray-500 rounded-md border-2 border-gray-800 focus:outline-none focus:border-blue-800',
              }}
            />  
          </div>
        </nav>
      </header>


      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-4/5">
          
          <h1 className="text-5xl font-bold mb-4">Welcome to Pygame Docs</h1>
          <p className="text-xl mb-8">
            Pygame is a set of Python modules designed for writing video games.
            Pygame adds functionality on top of the SDL library. This allows you to
            create fully featured games and multimedia programs in the python
            language.
          </p>

         
          <PygameModal />
          

          <div className="bg-gray-900 text-white py-12 mt-8 max-w-4xl mx-auto">
            <div className="px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-6">Get started with PyGame</h2>
              <p className="text-lg mb-8">
                Follow these simple steps to start creating games with PyGame:
              </p>
              <ol className="list-decimal list-inside mb-8">
                <li className="mb-2">Install PyGame using pip:</li>
                <code className="block bg-gray-800 rounded-md p-4 mb-4">
                  $ pip install pygame
                </code>
              </ol>
              <GettingStarted code={gettingstart} />
              <hr />
              <p className="text-lg">
                Pygame is a powerful library for creating games and interactive
                applications in Python. With Pygame, you can create anything from
                simple 2D games to complex simulations and visualizations. Get started
                today and unleash your creativity!
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





