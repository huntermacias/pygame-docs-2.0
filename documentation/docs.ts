


export type mixerInfo = {
  title: string;
  description: string;
  shortDesc: string;
  key: string;
  codesample: string;
  };
const mixerData: mixerInfo[] = [
{
  title: " pygame.mixer.init()",
  description: "Initialize the mixer module for Sound loading and playback",
  shortDesc: '',
  key: "1",
  codesample: `import pygame

pygame.mixer.init()
`,
},
{
  title: " pygame.mixer.Sound()",
  description: "pygame.mixer.Sound() -> Sound : Create a new Sound object from a file or buffer object",
  shortDesc: '',
  key: "2",
  codesample: `import pygame

pygame.init()

track = pygame.mixer.Sound("song.mp3")

# set volume of track - (0-1)
track.set_volume(0.6)

# get volume level
currentVolume = track.get_volume()

# start playing the track
track.play()


`,
},
{
  title: " pygame.mixer.Sound.play()",
  description: "Begin playback of the Sound (i.e., on the computer's speakers) on an available Channel. This will forcibly select a Channel, so playback may cut off a currently playing sound if necessary.",
  shortDesc: '',
  key: "3",
  codesample: `import pygame

pygame.init()

# load track
track = pygame.mixer.Sound("song.mp3")

# start playing the track
track.play()

# 


`,
  },
  ];
const mixerDescription = {
title: "pygame.mixer Module",
description:
  "Pygame.mixer is a pygame module for loading and playing sounds. ",
  };
    

export type mouseInfo = {
title: string;
description: string;
shortDesc: string;
key: string;
codesample: string;
  };
const mouseData: mouseInfo[] = [
{
  title: 'pygame.mouse.get_pressed()',
  key: "1",
  description: '',
  shortDesc: '',
  codesample: `left, middle, right = pygame.mouse.get_pressed()
if left:
print("Left Mouse Key is being pressed")
  `,
},
{
  title: 'pygame.mouse.get_pos()',
  codesample: `x, y = pygame.mouse.get_pos(),
print(f'mouse x position {x}')
print(f'mouse y position {y}')`,
  description: 'gets the mouses x and y position',
  shortDesc: '',
  key: "2",
},
{
  title: 'pygame.mouse.get_rel()',
  codesample: `x, y = pygame.mouse.get_rel(),
print(f'mouse x relative movement {x}')
print(f'mouse y relative movement {y}')`,
description: 'gets the mouses x and y position',
shortDesc: '',
key: "3",
},
{
  title: 'pygame.mouse.set_pos()',
  codesample: `x = random.randint(0, 200)
y = random.randint(0, 200)
pygame.mouse.set_pos([x, y]),`,
description: 'gets the mouses x and y position',
shortDesc: '',
key: "4",
},
{
  title: 'pygame.mouse.set_visable()',
  codesample: `visable = False
pygame.mouse.set_visable(visable)`,
description: 'gets the mouses x and y position',
shortDesc: '',
key: "5",
},
{
  title: 'pygame.mouse.set_cursor()',
  codesample: `customCursor = pygame.cursors.Cursor() # see Intermediate Docs: cursors
pygame.mouse.set_cursor(CustomCursor())`,
  description: 'gets the mouses x and y position',
  shortDesc: '',
  key: "6",
},
{
  title: 'pygame.mouse.get_cursor()',
  codesample: `cursorStatus = pygame.mouse.get_cursor() # see Intermediate Docs: cursors
print(f'Cusor Status: {cursorStatus}')`,
  description: 'gets the mouses x and y position',
  shortDesc: '',
  key: "7",
},
  ];

const mouseDescription = {
    title: "pygame.mixer Module",
    description: "Pygame.mouse is a pygame module for loading and playing sounds. ",
  };




export type timeInfo = {
title: string;
description: string;
shortDesc: string;
key: string;
codesample: string;
  };
const timeData: timeInfo[] = [
{
  title: 'pygame.time.get_ticks()',
  key: '1',
  shortDesc: '',
  codesample: `# importing pygame module
import pygame

# initialising pygame
pygame.init()

while True:
  
# storing the time in ticks variable
ticks = pygame.time.get_ticks()

# convert ticks to seconds
seconds = ticks / 1000
  
# printing the ticks & seconds variable
print(ticks)
print(seconds)
  
# pausing the script for 1 second
pygame.time.wait(1000)`,
  description: 'Returns - milliseconds',
  
  },
  {
  title: 'pygame.time.Clock()',
  key: '2',
  shortDesc: '',
  codesample: `# importing pygame module
import pygame

# initialising pygame
pygame.init()

while True:
  
# storing the time in ticks variable
ticks = pygame.time.get_ticks()

# convert ticks to seconds
seconds = ticks / 1000
  
# printing the ticks & seconds variable
print(ticks)
print(seconds)
  
# pausing the script for 1 second
pygame.time.wait(1000)`,
  description: `This function is used to create a clock object which can be used to keep track of time. 
          The various methods of clock object are: 
          tick(), get_time(), get_fps()`,
  },
  {
  title: 'pygame.time.wait()',
  key: '3',
  shortDesc: '',
  codesample: `# importing pygame module
import pygame

# initialising pygame
pygame.init()

while True:
print('Hello')

# pausing the script for 1 second
pygame.time.wait(1000)`,

  description: `Will pause for a given number of milliseconds. This function sleeps the process to share the processor with other programs. 
          A program that waits for even a few milliseconds will consume very little processor time. It is slightly less accurate than the pygame.time.delay() function.`
  },
  {
  title: 'pygame.time.delay()',
  key: '4', 
  shortDesc: '',
  codesample: `# importing pygame module
import pygame

# initialising pygame
pygame.init()

while True:
print('Hello')

# pausing the script for 2 second
pygame.time.delay(2000)`,

  description: `Will pause for a given number of milliseconds. This function will use the processor (rather than sleeping) 
          in order to make the delay more accurate than pygame.time.wait().`
  },
  {
  title: 'pygame.time.set_timer()',
  shortDesc: '',
  key: '5',
  codesample: `# importing pygame module
import pygame

# initialising pygame
pygame.init()

def createEnemy(): 
# add codesample to create enemy

def launchEnemyMissile():
# add codesample to launch enemy missile

pygame.time.set_timer(createEnemy, 1000)
pygame.time.set_timer(launchEnemyMissile, 1000)`,

  description: `pygame.time.set_timer() schedules a recurring event to be added to the event queue every given number of milliseconds. The event parameter specifies the type of event to add, and loops controls how many times the event is added. Setting millis to 0 disables the timer. Each event type can only have one timer at a time. The once parameter has been replaced by loops`
  },
  ];

const timeDescription = {
title: "pygame.time Module",
description:
  "Creates a new Clock object that can be used to track an amount of time. The clock also provides several functions to help control a game's framerate. This method should be called once per frame. It will compute how many milliseconds have passed since the previous call.",
  };

export type spriteInfo = {
title: string;
description: string;
shortDesc: string;
key: string;
codesample: string;
  };
const spriteData: spriteInfo[] = [
  {
    title: "pygame.sprite.Sprite",
    key: "1",
    shortDesc: '',
    codesample: `import pygame

class MySprite(pygame.sprite.Sprite):
    def __init__(self, image_file):
        super().__init__()
        self.image = pygame.image.load(image_file)
        self.rect = self.image.get_rect()

# Initialize pygame
pygame.init()

# Set up the display
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))

# Create the sprite
sprite = MySprite("example.png")

# Create a sprite group
sprite_group = pygame.sprite.Group()
sprite_group.add(sprite)

# Main game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # Draw the sprites onto the screen
    screen.fill((255, 255, 255))
    sprite_group.draw(screen)

    pygame.display.flip()

# Quit pygame
pygame.quit()
`,
    description:
      "The pygame.sprite.Sprite class is the base class for all sprites in Pygame. It provides a basic set of methods and attributes that can be used to create and manipulate sprites. In this example, we create a new sprite class called MySprite that inherits from pygame.sprite.Sprite. The MySprite class has an __init__() method that loads an image from a file and sets the sprite's rect attribute based on the size of the image. We then create an instance of MySprite and add it to a sprite group using the add() method. Finally, we have a main game loop that updates and draws the sprite group onto the screen.",
  },
  {
    title: "pygame.sprite.Group",
    key: "2",
    shortDesc: '',
    codesample: `import pygame
  
# Initialize pygame
pygame.init()

# Set up the display
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))

# Create a sprite group
sprite_group = pygame.sprite.Group()

# Create some sprite objects
class MySprite(pygame.sprite.Sprite):
    def __init__(self, color, width, height):
        super().__init__()
        self.image = pygame.Surface((width, height))
        self.image.fill(color)
        self.rect = self.image.get_rect()

sprite1 = MySprite((255, 0, 0), 50, 50)
sprite2 = MySprite((0, 255, 0), 50, 50)
sprite3 = MySprite((0, 0, 255), 50, 50)

# Add sprite objects to the sprite group using add() method
sprite_group.add(sprite1)
sprite_group.add(sprite2)
sprite_group.add(sprite3)

# Main game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # Draw the sprites onto the screen
    screen.fill((255, 255, 255))
    sprite_group.draw(screen)

    pygame.display.flip()

# Quit pygame
pygame.quit()
  `,
  description: "pygame.sprite.Group() is used to hold and manage multiple Sprite objects. The sprite class MySprite is defined with an __init__() method that initializes the sprite's image and rect attributes. Two instances of MySprite are created and added to the my_group sprite group using the add() method. In the main game loop, the sprite group is updated using the update() method and then drawn onto the screen using the draw() method. Finally, the display is updated using pygame.display.flip() and the game is paused for a short time using pygame.time.wait().",
  },

  ];

const spriteDescription = {
title: "pygame.sprite Module",
description:
  "Pygame.sprite is a module in the Pygame library that provides an efficient way to create and manipulate groups of sprites, which are 2D images or animations that can be displayed on a Pygame surface. The module offers features such as collision detection and grouping of related sprites for efficient updates and drawing. It is commonly used in 2D game development to manage and update large numbers of sprites in a game scene.",
  };

export type transformInfo = {
  title: string;
  description: string;
  shortDesc: string;
  key: string;
  codesample: string;
};


const transformData: transformInfo[] = [
  {
    title: "pygame.transform.scale()",
    key: "1",
    shortDesc: '',
    description:
      "Returns a new Surface object with the specified size that is the scaled version of the original Surface.",
    codesample: `import pygame

# Load the original image
image = pygame.image.load("example.png")

# Scale the image to a new size
scaled_image = pygame.transform.scale(image, (200, 200))`,
  },
  {
    title: "pygame.transform.rotate()",
    key: "2",
    shortDesc: '',
    description:
      "Returns a new Surface object that is a rotated version of the original Surface.",
    codesample: `import pygame

# Load the original image
image = pygame.image.load("example.png")

# Rotate the image by 45 degrees
rotated_image = pygame.transform.rotate(image, 45)`,
  },
  {
    title: "pygame.transform.flip()",
    key: "3",
    shortDesc: '',
    description:
      "Returns a new Surface object that is a flipped version of the original Surface.",
    codesample: `import pygame

# Load the original image
image = pygame.image.load("example.png")

# Flip the image horizontally
flipped_image = pygame.transform.flip(image, True, False)`,
  },
  {
    title: "pygame.transform.scale2x()",
    key: "4",
    shortDesc: '',
    description:
      "Returns a new Surface object that is a scaled version of the original Surface, with each pixel duplicated.",
    codesample: `import pygame

# Load the original image
image = pygame.image.load("example.png")

# Scale the image up by a factor of 2
scaled_image = pygame.transform.scale2x(image)`,
  },
  {
    title: 'pygame.transform.chop()',
    key: '6',
    shortDesc: '',
    codesample: `# Importing pygame module
  import pygame
  
  # Initializing pygame
  pygame.init()
  
  # Setting up the display
  screen = pygame.display.set_mode((400, 400))
  
  # Creating a surface object
  surface = pygame.Surface((200, 200))
  surface.fill((255, 255, 255))
  
  # Drawing a circle on the surface
  pygame.draw.circle(surface, (255, 0, 0), (100, 100), 50)
  
  # Displaying the original surface
  screen.blit(surface, (0, 0))
  
  # Cropping the surface using pygame.transform.chop()
  cropped_surface = pygame.transform.chop(surface, pygame.Rect(0, 0, 100, 100))
  
  # Displaying the cropped surface
  screen.blit(cropped_surface, (200, 0))
  
  # Updating the display
  pygame.display.update()
  
  # Main game loop
  while True:
      # Handle events
      for event in pygame.event.get():
          if event.type == pygame.QUIT:
              pygame.quit()
              sys.exit()
    `,
    description: 'pygame.transform.chop() crops the given surface by removing the area defined by the rect argument. In this example, a surface object is created and a circle is drawn on it. The original surface is then displayed on the screen. The surface is cropped using pygame.transform.chop() to remove the top-left quarter of the surface. The cropped surface is then displayed on the screen.',
  },
];


const transformDescription = {
  title: 'pygame.transform Module',
  description:
    'Pygame.transform is a module in the Pygame library that provides functions for transforming and manipulating 2D images or Surfaces. The module offers features such as scaling, rotating, flipping, and converting between different pixel formats. It is commonly used in 2D game development to manipulate images and create special effects.',
};
  


export type mathInfo = {
  title: string;
  description: string;
  shortDesc: string;
  key: string;
  codesample: string;
};

const mathData: mathInfo[] = [
  {
    title: "pygame.math.Vector2()",
    key: "1",
    shortDesc: '',
    description:
      "Returns - Vector2 object representing a point or vector in two-dimensional space",
    codesample: `import pygame

# Create a Vector2 object representing the point (10, 20)
v = pygame.math.Vector2(10, 20)

# Print the x and y components of the vector
print(v.x, v.y)

# Create another Vector2 object representing the vector (5, -10)
w = pygame.math.Vector2(5, -10)

# Add the two vectors together
u = v + w

# Print the resulting vector
print(u)`,
  },
  {
    title: "pygame.math.Vector2.length()",
    key: "2",
    shortDesc: '',
    description:
      "Returns - the length (magnitude) of the Vector2 object",
    codesample: `import pygame

# Create a Vector2 object representing the vector (3, 4)
v = pygame.math.Vector2(3, 4)

# Compute the length of the vector
length = v.length()

# Print the length of the vector
print(length)`,
  },
  {
    title: "pygame.math.Vector2.normalize()",
    key: "3",
    shortDesc: '',
    description:
      "Returns - a new Vector2 object with the same direction as the original Vector2 object, but with length 1",
    codesample: `import pygame

# Create a Vector2 object representing the vector (3, 4)
v = pygame.math.Vector2(3, 4)

# Normalize the vector
normalized_v = v.normalize()

# Print the normalized vector
print(normalized_v)`,
  },
  {
    title: "pygame.math.Vector2.rotate()",
    key: "4",
    shortDesc: '',
    description:
      "Returns - a new Vector2 object representing the original Vector2 object rotated by the specified angle (in degrees) around the origin",
    codesample: `import pygame

# Create a Vector2 object representing the vector (3, 4)
v = pygame.math.Vector2(3, 4)

# Rotate the vector by 45 degrees
rotated_v = v.rotate(45)

# Print the rotated vector
print(rotated_v)`,
  },
  {
    title: "pygame.math.Vector2.dot()",
    key: "5",
    shortDesc: '',
    description:
      "Returns - the dot product of the Vector2 object with another Vector2 object or any sequence (list, tuple, etc.) with two elements",
    codesample: `import pygame

# Create two Vector2 objects representing the vectors (3, 4) and (5, -2)
v1 = pygame.math.Vector2(3, 4)
v2 = pygame.math.Vector2(5, -2)

# Compute the dot product of the two vectors
dot_product = v1.dot(v2)

# Print the dot product
print(dot_product)`,
  },
];

const mathDescription = {
  title: "pygame.math Module",
  description:
    "Pygame.math is a module in the Pygame library that provides classes and functions for mathematical operations commonly used in game development, such as vector math and angle conversions. The module is built on top of the Python math library and provides additional functionality specific to game development, such as 2D and 3D vector operations. It is used in conjunction with other Pygame modules to create and manipulate game objects, such as...",
  key: "6",
  codesample: `
  
  `
}


export type maskInfo = {
  title: string;
  description: string;
  shortDesc: string;
  key: string;
  codesample: string;
};

const maskData: maskInfo[] = [
  {
    title: "pygame.mask.from_surface(surface, threshold=127)",
    key: "1",
    shortDesc: '',
    codesample: `import pygame

# Load an image surface
image_surface = pygame.image.load('example.png')

# Create a mask from the surface with a threshold of 127
mask = pygame.mask.from_surface(image_surface, 127)

# Print the mask's size and count
print(f"Mask size: {mask.get_size()}")
print(f"Mask count: {mask.count()}")`,
    description:
      "Creates a mask from a Surface object. Pixels with values greater than or equal to the threshold value are set as opaque, and pixels with values less than the threshold value are set as transparent. Returns the new mask object.",
  },
  {
    title: "pygame.mask.Mask.get_size()",
    key: "2",
    shortDesc: '',
    codesample: `import pygame

# Create a mask with a size of 100x100
mask = pygame.mask.Mask((100, 100))

# Get the mask's size
size = mask.get_size()

# Print the mask's size
print(f"Mask size: {size}")`,
    description:
      "Returns the size of the mask as a tuple of width and height in pixels.",
  },
  {
    title: "pygame.mask.Mask.get_at(position)",
    key: "3",
    shortDesc: '',
    codesample: `import pygame

# Create a mask with a size of 100x100
mask = pygame.mask.Mask((100, 100))

# Set a pixel at position (50, 50)
mask.set_at((50, 50), True)

# Get the pixel value at position (50, 50)
pixel = mask.get_at((50, 50))

# Print the pixel value
print(f"Pixel value: {pixel}")`,
    description:
      "Returns True if the pixel at the specified position is opaque (i.e. set), and False if it is transparent (i.e. unset).",
  },
];

const maskDescription = {
  title: "pygame.mask Module",
  description:
    "Pygame.mask is a module in the Pygame library that provides a way to create and manipulate masks, which are binary images that define the transparency of an image. Masks are commonly used in collision detection and pixel-perfect collision checking in games. The module offers features such as creating a mask from a Surface object, setting and getting individual pixels, and performing various operations such as bitwise AND and OR on masks.",
};

export type LearningInfo = {
  title: string;
  description: string;
  shortDesc: string;
  key: string;
  codesample: string;
};

const pygameData: LearningInfo[] = [
  {
    title: "pygame.init()",
    shortDesc: '',
    description:
      "Initialize all imported pygame modules (required before any module level constants are created)",
    key: "1",
    codesample: `import pygame

pygame.init()
`,
  },
  {
    title: "pygame.display.set_mode()",
    description:
      "Initialize a window or screen for display. Returns a new Surface object representing the visible part of the window",
    key: "2",
    shortDesc: '',
    codesample: `import pygame

pygame.init()

# Set up the display window
display = pygame.display.set_mode((800, 600))
`,
  },
  {
    title: "pygame.draw.circle()",
    description: "Draw a circle onto a Surface object",
    shortDesc: '',
    key: "3",
    codesample: `import pygame

pygame.init()

# Create a surface to draw on
surface = pygame.Surface((200, 200))

# Draw a circle on the surface
pygame.draw.circle(surface, (255, 0, 0), (100, 100), 50)
`,
  },
];

const pygameDescription = {
  title: "Pygame Module",
  description:
    "Pygame is a set of Python modules designed for writing video games. It includes modules for graphics, sound, input, and more.",
};


    

  
export { 
        mixerData, mixerDescription,
        mouseData, mouseDescription,
        timeData, timeDescription,
        spriteData, spriteDescription,
        transformData, transformDescription,
        mathData, mathDescription,
        maskData, maskDescription,
        pygameData, pygameDescription,
    };

