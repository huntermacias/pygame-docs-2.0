"use client";
import Image from "next/image";
import ShowCode from "../components/ShowCode";
import PygameModal from "../components/PygameModal";
import { gettingstart } from "../helpers/documentation-code";
import React from "react";

export default function Home() {


  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 flex flex-col md:flex-row md:space-x-8">
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
      </div>
    </div>
  );
}
