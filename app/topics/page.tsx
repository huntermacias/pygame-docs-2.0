'use client'
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import classNames from 'classnames';
import navigation  from './navigation'
import GettingStarted from '../../components/GettingStarted';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';


function Topics() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 font-mono">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white">
          Browse Pygame Documentation + Examples
        </h2>
        <p className="mt-4 text-lg text-amber-300">
          Learn how to use the pygame library!
        </p>
      </div>
      <div className="mt-12">
        <div className="max-w-lg mx-auto space-y-8 lg:max-w-none">
          {navigation.map((category) => (
            <Disclosure
              as="div"
              key={category.name}
              className="space-y-6"
            >
             {({ open }) => (
                <>
                  <Disclosure.Button
                    className={classNames(
                      'flex justify-between items-center w-full text-gray-400',
                      
                    )}
                  >
                    <span className="text-xl text-gray-200 font-light">
                      {category.name}
                    </span>

						<ArrowCircleRightIcon 
							className={`w-8 h-8 transform transition-transform text-white 
							bg-gray-600 shadow-lg hover:bg-gray-400 rounded-lg pl-1 rotate-90`} 
						/>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {category.options.map((option) => {
                        const Icon = option.icon;
                        return (
                          <Link
                            key={option.name}
                            href={option.href}
                            className="flex flex-col bg-gray-900 border rounded-lg shadow-sm overflow-hidden transition duration-150 ease-in-out sm:mx-auto sm:w-full hover:shadow-lg"
                          >
                            <div className="flex-shrink-0 bg-emerald-400/10 p-4">
								<div className="h-6 w-6 text-gray-400">
									<Icon aria-hidden="true" />

								</div>
                            </div>
                            <div className="flex-1 p-4">
                              <h3 className="text-xl text-emerald-300">
                                <span className='text-amber-200'>{option.name}</span>
                              </h3>
                             
							  {option.description ? 
							  	<p className="mt-2 text-mono text-xs text-gray-100">{option.description}</p> 
								: 
							  	<GettingStarted code={option.code} />
								}
                            </div>
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
  );
}
export default Topics;
