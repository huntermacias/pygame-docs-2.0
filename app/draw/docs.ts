export type Info = {
	title: string;
	description: string;
	key: string;
	codesample: string;
  };
  const data: Info[] = [
	{
		title: `pygame.draw`,
		description: '',
		key: '1',
		codesample: `pygame module for drawing shapes
		`
	},
    {
		title: 'pygame.draw.rect() - Rect',
		description: '',
		key: '2',
      	codesample: `'''PARAMETERS: (surface, color, rect)
	surface: (Surface) -- surface to draw on
	color: (Color/Int or tuple(int, int, int))
	rect: (Rect) -- rectangle to draw, pos & dimensions
	width: (int) -- optional
if width == 0, (default) - fill rectangle
if width > 0, used for line thickness
if width < 0, nothing will be drawn'''

# code:
	  
myrect = pygame.Rect(left, top, width, height)
red = (255, 0, 0)

# Example 1
pygame.draw.rect(screen, red, myrect)

# Example 2
pygame.draw.rect(screen, red, rect, width=0, border_radius=0, 
	border_top_left_radius=-1 border_top_right_radius=01, 
	border_bottom_left_radius=-1, border_bottom_right_radius=-1)
	  `
    },
	{
		title: 'pygame.draw.polygon() - Rect',
		description: '',
		key: '3',
		codesample: `'''PARAMETERS: (surface, color, points)
	surface: (Surface) -- surface to draw on
	color: (Color/Int or tuple(int, int, int))
	points: (tuple / list) -- a sequence of 3 or more (x, y) coordinates
		...that make up vertices of the polygon. Each coordinate in the
		...sequence must be a tuple/list/pygame.math.Vector2 of 
		...2 ints/floats, e.g [(x,y), (x2,y2), (xN, yN)]
	width (int) -- optional
if width == 0, (default) - fill polygon
if width > 0, used for line thickness
if width < 0, nothing will be drawn'''
	
# code:
		
mypoints = [(x1, y1), (x2, y2), (x3, y3)]
red = (255, 0, 0)

# Example 1
pygame.draw.polygon(screen, red, mypoints)
		`,
	},
	{
		title: 'pygame.draw.circle() - Rect',
		description: '',
		key: '4',
		codesample: `'''PARAMETERS: (surface, color, center, radius)
	surface: (Surface) -- surface to draw on
	color: (Color/Int or tuple(int, int, int))
	center: tuple(int/float, int/float) -- center point of the
		... cirlce as a sequence of 2 ints/floats e.g (x,y)
	radius (int/float) -- radius of the circle, measured from the center. 
		... nothing will be drawn if the radius is less than 1
	width (int) -- optional
if width == 0, (default) - fill circle
if width > 0, used for line thickness
if width < 0, nothing will be drawn'''
	
# code:
		
mypoints = (x,y)
red = (255, 0, 0)

# Example 1
pygame.draw.circle(screen, red, mypoints, 5)
		`,
	  },
  ];

const description = {
	title: "pygame.color Module",
	description: "Welcome to the Pygame color module! pygame.Color is a module that provides various color-related functions and methods for working with colors in Pygame.",
};

export { data, description };