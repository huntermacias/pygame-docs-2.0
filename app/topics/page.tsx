'use client'
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import classNames from 'classnames';
import navigation  from './navigation'



function Topics() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 font-mono">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white">
          Browse Pygame Methods
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Start learning with our handpicked topics
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
                    <span className="text-xl">
                      {category.name}
                    </span>
                    <svg
                      className={classNames(
                        'transform',
                        'transition-transform',
                        'text-white',
						'bg-gray-300',
						'rounded-lg',
						'pl-1',
                        {
                          '-rotate-180': open,
                        },
                      )}
                      width={24}
                      height={24}
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L10 10.586l-4.293-4.293z"
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      {category.options.map((option) => {
                        const Icon = option.icon;
                        return (
                          <Link
                            key={option.name}
                            href={option.href}
                            className="flex flex-col bg-gray-900 border rounded-lg shadow-sm overflow-hidden transition duration-150 ease-in-out sm:mx-auto sm:w-full hover:shadow-lg"
                          >
                            <div className="flex-shrink-0 bg-gray-100 p-4">
								<div className="h-6 w-6 text-gray-400">
									<Icon
										
										aria-hidden="true"
									/>

								</div>
                            </div>
                            <div className="flex-1 p-4">
                              <h3 className="text-xl text-emerald-300">
                                {option.name}
                              </h3>
                              <p className="mt-2 text-mono text-xs text-gray-100">
                                {option.description}
                              </p>
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
