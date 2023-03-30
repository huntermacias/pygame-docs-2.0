import React from 'react';

const Color = () => {

  const data = [
    {
      title: ' Color.update(r, g, b, a) - None',
      description: 'Sets the color to the given RGBA value.',
      key: '1',
      codesample: 'color.update(255, 0, 0, 128)'
    },
    {
      title: 'Color.r - Int',
      description: 'Gets or sets the red value of the Color',
      key: '3',
      codesample: 'Color.r = 255'
    },
    {
      title: 'Color.g - Int',
      description: 'Gets or sets the green value of the Color',
      key: '4',
      codesample: 'Color.g = 255'
    },
    {
      title: 'Color.b - Int',
      description: 'Gets or sets the blue value of the Color',
      key: '5',
      codesample: 'Color.b = 255'
    },
    {
      title: 'Color.a - Int',
      description: 'Gets or sets the alpha value of the Color',
      key: '6',
      codesample: 'Color.a = 128'
    },
    {
      title: ' Color.grayscale() - Color',
      description: ' Returns the grayscale of the color as a new color.',
      key: '2',
      codesample: 'color.grayscale()'
    },
    
  ];
  

  return (
    <div className="bg-gray-800 min-h-screen">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-amber-300">pygame.Color Methods</h2>
        <p className="mt-4 text-lg text-white">
          A list of methods available for use with the pygame.Color class.
        </p>
      </div>
      
      <div className="mt-10">
          <ul className="divide-y divide-gray-200">
            {data.map((method) => (
              <div key={method.key}>
                  
                  <li className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                      <div  className="flex-1 min-w-0">
                        <p className="text-lg font-medium text-amber-300 truncate">
                          {method.title}
                        </p>
                        <p className="mt-1 text-lg text-gray-300 font-mono">
                          <span className='text-bold text-lg text-amber-400'>Description: </span>{method.description}
                        </p>
                        <code className="mt-2 text-sm font-mono text-emerald-400">
                        <span className='text-bold text-lg text-amber-400'>Code Snippet: </span> {method.codesample}
                        </code>
                      </div>
                    </div>
                  </li>
                </div>
              ))}
          </ul>
          
        </div>
      </div>


    </div>
    );
};

export default Color;
