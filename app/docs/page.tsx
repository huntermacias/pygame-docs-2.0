'use client'
import { Disclosure } from '@headlessui/react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import navigation from './navigation';
import Link from 'next/link';
import ShowCode from '../../components/ShowCode';

const Docs = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Browse Pygame Documentation + Examples
          </h2>
          <p className="mt-4 text-lg text-amber-300">
            Learn how to use the Pygame library!
          </p>
        </div>
        <div className="mt-12">
          <div className="max-w-lg mx-auto space-y-8 lg:max-w-none">
            {navigation.map((category) => (
              <Disclosure as="div" key={category.name} className="space-y-6">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-400 hover:text-gray-100 hover:bg-gray-700 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50 transition ease-in-out duration-150 px-4 py-3"
                    >
                      <span>{category.name}</span>
                      <ArrowRightIcon
                        className={`${
                          open ? 'transform rotate-90' : ''
                        } w-5 h-5 text-gray-400`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {category.options.map((option) => {
                          const Icon = option.icon;
                          return (
                            <Link key={`${option.name}`} href={`${option.href}`}>
                              <span
                                className="flex flex-col rounded-lg shadow-sm transition duration-150 ease-in-out hover:shadow-lg"
                              >
                                <div className="flex-shrink-0 bg-gray-700 rounded-t-lg p-4">
                                  <Icon
                                    className="h-6 w-6 text-amber-500"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="flex-1 bg-gray-800 rounded-b-lg p-4">
                                  <h3 className="text-lg font-medium text-gray-100">
                                    {option.name}
                                  </h3>
                                  {option.description ? 
                                    <p className="mt-2 text-mono text-xs text-gray-100">{option.description}</p> 
                                  : 
                                    <ShowCode code={option.code} />
                                  }
                                </div>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;

