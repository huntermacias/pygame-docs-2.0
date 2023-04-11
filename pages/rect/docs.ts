export type Info = {
	title: string;
	description: string;
	key: string;
	codesample:
   string;
  };
const data: Info[] = [
  {
  title: 'Virtual Attributes - Used to move/align rect objects',
  key: '1',
  description: 'Defines virtual attributes to move or align rect objects within the game window. These attributes include coordinates, size, and positions.',
  codesample: `x,y top, left, bottom, right 
topleft, bottomleft, topright, bottomright 
midtop, midleft, midbottom, midright center, 
centerx, centery size, width, height w,h`
  },
  {
  title: 'pygame.Rect()',
  key: '2',
  description: 'Creates a rect object with the specified size and position. The rect object is commonly used for collision detection and object movement.',
  codesample: 'rect = Rect(left, top, width, height)',
  },
  {
  title: 'Getting and setting Rect attributes',
  key: '3',
  description: 'Provides a way to access and modify various attributes of a rect object, such as its position and size.',
  codesample: `rect.left = x 
rect.top = y 
rect.width = w 
rect.height = h 
x = rect.left 
y = rect.top 
w = rect.width 
h = rect.height`,
  },
  {
  title: 'Getting Rect position and size as a tuple',
  key: '4',
  description: 'Returns the position and size of a rect object as a tuple.',
  codesample: `pos = rect.topleft 
size = rect.size`,
  },
    {
      title: 'Moving a Rect',
      key: '5',
      description: 'Same as the Rect.move() method, but operates in place.',
      codesample: `rect.move_ip(x, y)
rect.move_ip((x, y))

# increasing rect's x & y position
rect.x += 10
rect.y += 10`,
    },
    {
      title: 'Centering a Rect',
      key: '6',
      description: 'Use the Rect objects virtual attributes to center its position',
      codesample: `rect.centerx = x
rect.centery = y
rect.center = (x, y)`,
    },
    {
      title: 'Checking if two Rects intersect',
      key: '7',
      description: 'Returns true if any portion of either rectangle overlap (except the top+bottom or left+right edges).',
      codesample: 'rect1.colliderect(rect2)',
    },
    {
      title: 'Checking if a point is inside a Rect',
      key: '8',
      description: 'Returns true if the given point is inside the rectangle. A point along the right or bottom edge is not considered to be inside the rectangle.',
      codesample: 'rect.collidepoint(x, y)',
    },
    {
      title: 'Inflating a Rect',
      key: '9',
      description: 'Same as the Rect.inflate() method, but operates in place.',
      codesample: `rect.inflate_ip(x, y)
rect.inflate_ip((x, y))`,
    },
    {
      title: 'Clipping a Rect to a Surface',
      key: '10',
      description: 'Returns a new rectangle that is cropped to be completely inside the argument Rect. If the two rectangles do not overlap to begin with, a Rect with 0 size is returned.',
      codesample: 'rect.clip(surface.get_rect())',
    },
    {
      title: 'Converting a Rect to a normalized form',
      key: '11',
      description: 'This will flip the width or height of a rectangle if it has a negative size. The rectangle will remain in the same place, with only the sides swapped.',
      codesample: 'rect.normalize()',
    },
  ];

const description = {
  title: "pygame.Rect Module",
  description:
    "Pygame uses Rect objects to store and manipulate rectangular areas. A Rect can be created from a combination of left, top, width, and height values. Rects can also be created from python objects that are already a Rect or have an attribute named 'rect'. Any pygame function that requires a Rect argument also accepts any of these values to construct a Rect. This makes it easier to create Rects on the fly as arguments to functions. The Rect functions that change the position or size of a Rect return a new copy of the Rect with the affected changes. The original Rect is not modified. Some methods have an alternate 'in-place' version that returns None but affects the original Rect. These 'in-place' methods are denoted with the 'ip' suffix.",
  };
  
export { data, description }