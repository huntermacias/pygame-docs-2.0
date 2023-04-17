"use client";
import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CodeIcon } from "@heroicons/react/solid";
import ShowCode from "./ShowCode";
import Link from "next/link";

const PygameModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [myprompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [userApiKey, setUserApiKey] = useState("");

  const OPENAI_API_KEY = userApiKey || process.env.OPENAI_API_KEY;
  // console.log('data', OPENAI_API_KEY)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: myprompt,
          model: "text-davinci-002",
          max_tokens: 1024,
          n: 1,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.choices && data.choices[0] && data.choices[0].text) {
        setCode(data.choices[0].text);
      } else {
        throw new Error("Invalid response data");
      }
    } catch (error) {
      console.error(error);
      // Respond to the error as appropriate
    }
  };

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(true)}
      >
        <CodeIcon className="mr-2 h-5 w-5" />
        Generate Pygame Code
      </button>
      <Transition show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center font-mono">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="inline-block w-full max-w-md p-6 my-8 overflow-auto text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl"
                style={{ maxWidth: "80rem" }}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-100"
                >
                  Generate Pygame Code
                </Dialog.Title>
                <div className="flex flex-col items-start">
                  <Link
                    href="https://auth0.openai.com/u/login/identifier?state=hKFo2SBXY2ZPeUl4OHFWNmR1OF9YX3hqLTQ3VUJ3XzMtdHRWSKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHZQWWtaS1Itd1pIMzNpb25YY1pYY3M2d3dBbEd0QTZzo2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q"
                    className="text-sm font-medium text-gray-300"
                  >
                    OpenAI API Key:
                  </Link>
                  <input
                    type="text"
                    id="apiKey"
                    name="apiKey"
                    value={userApiKey}
                    onChange={(e) => setUserApiKey(e.target.value)}
                    className="w-full h-1/4 mt-2 px-3 py-2 text-gray-300 bg-gray-600 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-300">
                    Please enter what you would like to learn in Pygame:
                  </p>
                  <textarea
                    className="w-full mt-2 px-3 py-2 text-gray-200 border rounded-lg focus:outline-none bg-gray-800/10"
                    rows="5"
                    value={myprompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleSubmit}
                  >
                    Generate
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
                {code && (
                  <div className="mt-8">
                    <p className="text-sm font-medium text-gray-500">
                      Generated Pygame code:
                    </p>
                    <ShowCode code={code} />
                  </div>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PygameModal;
