'use client'
import { Fragment } from 'react';

const RectExamples = () => {
  const examples = [
	{
		name: `Virutal Attributes - Used to move/align rect objects`,
		code: `x,y
top, left, bottom, right
topleft, bottomleft, topright, bottomright
midtop, midleft, midbottom, midright
center, centerx, centery
size, width, height
w,h`
	},
    {
      name: 'Creating a Rect object',
      code: 'rect = Rect(left, top, width, height)',
    },
    {
      name: 'Getting and setting Rect attributes',
      code: `rect.left = x
rect.top = y
rect.width = w
rect.height = h
x = rect.left
y = rect.top
w = rect.width
h = rect.height`,
    },
    {
      name: 'Getting Rect position and size as a tuple',
      code: `pos = rect.topleft
size = rect.size`,
    },
    {
      name: 'Moving a Rect',
      code: `rect.move_ip(x, y)
rect.move_ip((x, y))

# increasing rect's x & y position
rect.x += 10
rect.y += 10`,
    },
    {
      name: 'Centering a Rect',
      code: `rect.centerx = x
rect.centery = y
rect.center = (x, y)`,
    },
    {
      name: 'Checking if two Rects intersect',
      code: 'rect1.colliderect(rect2)',
    },
    {
      name: 'Checking if a point is inside a Rect',
      code: 'rect.collidepoint(x, y)',
    },
    {
      name: 'Inflating a Rect',
      code: `rect.inflate_ip(x, y)
rect.inflate_ip((x, y))`,
    },
    {
      name: 'Clipping a Rect to a Surface',
      code: 'rect.clip(surface.get_rect())',
    },
    {
      name: 'Converting a Rect to a normalized form',
      code: 'rect.normalize()',
    },
  ];

  return (
    <div className="mx-auto max-w-2xl p-6 mb-10">
      <h1 className="text-3xl font-bold font-mono mb-6 text-amber-300">Examples for pygame.Rect</h1>
      {examples.map((example) => (
        <Fragment key={example.name}>
          <h2 className="text-xl font-bold font-mono mb-2 text-amber-300">{example.name}</h2>
          <pre className="bg-gray-800 text-gray-100 font-mono rounded-md p-4 mb-10">{example.code}</pre>
        </Fragment>
      ))}

	  <div></div>
	
    </div>

  );
};

export default RectExamples;
