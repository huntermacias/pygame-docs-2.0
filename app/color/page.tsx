import React from 'react';
import TextBox from '../../components/TextBox';
import GettingStarted from '../../components/GettingStarted';
import { examples } from "./docs"

const Color = () => {


  
  const colordescription = [
    'pygame.Color is a module that provides various color-related functions and methods for working with colors in Pygame. This module provides a Color class that can be used to create, modify and manipulate color objects in Pygame. To use the pygame.Color method, you will first need to import the pygame module in your Python script. Then, you can create a new color object by passing in the desired RGB values or a string representation of the color. Once you have created a color object, you can use various methods to modify the color, such as adjusting the hue, saturation, or lightness, changing the color to grayscale, or converting the color to a different color space. Some of the commonly used methods of the pygame.Color class include hsva, hsla, lerp, normalize, set_length, correct_gamma, fade_ip, lerp_ip, and lerp_ip. These methods allow you to perform operations such as setting the color based on hue, saturation, value, and alpha values, or smoothly transitioning between two colors. Overall, the pygame.Color module provides a flexible and powerful way to work with colors in Pygame, making it easier to create visually appealing games and graphics.'
  ]

  return (
    <div className="mx-auto max-w-2xl p-6 mb-10">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-amber-300">pygame.Color Methods</h2>
        <p className="mt-4 text-lg text-white">
          A list of methods available for use with the pygame.Color class.
        </p>
      </div>
      
      <div className="mt-10">
          <ul className="divide-y divide-gray-200">
            {examples.map((method) => (
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
                        {/* <code className="mt-2 text-sm font-mono text-emerald-400"> */}
                        {/* <span className='text-bold text-lg text-amber-400'>Code Snippet: </span> {method.codesample} */}
                        {/* </code> */}
                      </div>
                    </div>

                    
                    <GettingStarted code={method.codesample} />
                  </li>
                </div>
              ))}
          </ul>
        </div>
        <div className="mt-10 p-4 pb-40 text-white font-mono">
          <TextBox title="PyGame Color Description" description={colordescription[0]} />
         
        </div>
        
      </div>


   
    );
};

export default Color;
