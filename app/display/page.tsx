import React from 'react';
import TextBox from '../../components/TextBox';


const Display = () => {

  const data = [
    {
      title: ' display.init() - None',
      description: 'Initializes the display module',
      key: '1',
      codesample: 'display.init()'
    },
    {
      title: ' display.quit() - None',
      description: 'Uninitializes the display module',
      key: '2',
      codesample: 'display.quit()'
    },
    {
      title: ' display.get_init() - bool',
      description: 'Returns True if the display module has been initialized',
      key: '3',
      codesample: 'display.get_init()'
    },
    {
      title: ' display.set_mode(size, flags=0, depth=0) - Surface',
      description: 'Creates a display Surface and returns it',
      key: '4',
      codesample: 'display.set_mode((800, 600))'
    },
    {
      title: ' display.get_surface() - Surface',
      description: 'Returns the display Surface',
      key: '5',
      codesample: 'display.get_surface()'
    },
    {
      title: ' display.flip() - None',
      description: 'Updates portions of the screen',
      key: '6',
      codesample: 'display.flip()'
    },
    {
      title: ' display.update(rectangle=None) - None',
      description: 'Updates portions of the screen for software displays',
      key: '7',
      codesample: 'display.update()'
    },
    {
      title: ' display.Info() - VideoInfo',
      description: 'Create a video display information object', // TODO - add more info
      key: '8',
      codesample: 'display.Info()'
    }
  ];
  
  const description = [
    'pygame.display is a module that allows you to control the display window and screen'
  ]

  return (
    <div className="bg-gray-800 min-h-screen">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-amber-300">pygame.display Methods</h2>
        <p className="mt-4 text-lg text-white">
          A list of methods available for use with the pygame.display class.
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
        <div className="mt-10 p-4 pb-40">
          <TextBox title="PyGame Color Description" description={description[0]} />
         
        </div>
        
      </div>


    </div>
    );
};

export default Display;
