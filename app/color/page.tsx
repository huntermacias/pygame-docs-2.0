import React from 'react';
import TextBox from '../../components/TextBox';


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
      description: 'Returns the grayscale of the color as a new color.',
      key: '2',
      codesample: 'color.grayscale()'
    },
    {
      title: "Invert",
      description: "Return the inverse of the color.",
      key: "invert",
      codesample: "color.invert()"
    },
    {
      title: "Lighten",
      description: "Return a lighter color by increasing the value of the lightness channel.",
      key: "lighten",
      codesample: "color.lighten(10)"
    },
    {
      title: "Darken",
      description: "Return a darker color by decreasing the value of the lightness channel.",
      key: "darken",
      codesample: "color.darken(10)"
    },
    {
      title: "Blend",
      description: "Blend the color with another color by a given percentage using alpha compositing.",
      key: "blend",
      codesample: "color.blend(anotherColor, 0.5)"
    }

  ];
  
  const colordescription = [
    'pygame.Color is a module that provides various color-related functions and methods for working with colors in Pygame. This module provides a Color class that can be used to create, modify and manipulate color objects in Pygame. To use the pygame.Color method, you will first need to import the pygame module in your Python script. Then, you can create a new color object by passing in the desired RGB values or a string representation of the color. Once you have created a color object, you can use various methods to modify the color, such as adjusting the hue, saturation, or lightness, changing the color to grayscale, or converting the color to a different color space. Some of the commonly used methods of the pygame.Color class include hsva, hsla, lerp, normalize, set_length, correct_gamma, fade_ip, lerp_ip, and lerp_ip. These methods allow you to perform operations such as setting the color based on hue, saturation, value, and alpha values, or smoothly transitioning between two colors. Overall, the pygame.Color module provides a flexible and powerful way to work with colors in Pygame, making it easier to create visually appealing games and graphics.'
  ]

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
        <div className="mt-10 p-4 pb-40">
          <TextBox title="PyGame Color Description" description={colordescription[0]} />
         
        </div>
        
      </div>


    </div>
    );
};

export default Color;
