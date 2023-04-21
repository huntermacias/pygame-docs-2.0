


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


export type RectInfo = {
  title: string;
  description: string;
  shortDesc: string;
  key: string;
  codesample:
    string;
  };
const RectData: RectInfo[] = [
  {
  title: 'Virtual Attributes - Used to move/align rect objects',
  key: '1',
  description: 'Defines virtual attributes to move or align rect objects within the game window. These attributes include coordinates, size, and positions.',
  shortDesc: '',
  codesample: `x,y top, left, bottom, right 
topleft, bottomleft, topright, bottomright 
midtop, midleft, midbottom, midright center, 
centerx, centery size, width, height w,h`
  },
  {
  title: 'pygame.Rect()',
  key: '2',
  description: 'Creates a rect object with the specified size and position. The rect object is commonly used for collision detection and object movement.',
  shortDesc: '',
  codesample: 'rect = Rect(left, top, width, height)',
  },
  {
  title: 'Getting and setting Rect attributes',
  key: '3',
  shortDesc: '',
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
  shortDesc: '',
  codesample: `pos = rect.topleft 
size = rect.size`,
  },
    {
      title: 'Moving a Rect',
      key: '5',
      description: 'Same as the Rect.move() method, but operates in place.',
      shortDesc: '',
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
      shortDesc: '',
      codesample: `rect.centerx = x
rect.centery = y
rect.center = (x, y)`,
    },
    {
      title: 'Checking if two Rects intersect',
      key: '7',
      description: 'Returns true if any portion of either rectangle overlap (except the top+bottom or left+right edges).',
      shortDesc: '',
      codesample: 'rect1.colliderect(rect2)',
    },
    {
      title: 'Checking if a point is inside a Rect',
      key: '8',
      shortDesc: '',
      description: 'Returns true if the given point is inside the rectangle. A point along the right or bottom edge is not considered to be inside the rectangle.',
      codesample: 'rect.collidepoint(x, y)',
    },
    {
      title: 'Inflating a Rect',
      key: '9',
      shortDesc: '',
      description: 'Same as the Rect.inflate() method, but operates in place.',
      codesample: `rect.inflate_ip(x, y)
rect.inflate_ip((x, y))`,
    },
    {
      title: 'Clipping a Rect to a Surface',
      key: '10',
      shortDesc: '',
      description: 'Returns a new rectangle that is cropped to be completely inside the argument Rect. If the two rectangles do not overlap to begin with, a Rect with 0 size is returned.',
      codesample: 'rect.clip(surface.get_rect())',
    },
    {
      title: 'Converting a Rect to a normalized form',
      key: '11',
      shortDesc: '',
      description: 'This will flip the width or height of a rectangle if it has a negative size. The rectangle will remain in the same place, with only the sides swapped.',
      codesample: 'rect.normalize()',
    },
  ];

const RectDescription = {
  title: "pygame.Rect Module",
  description:
    "Pygame uses Rect objects to store and manipulate rectangular areas. A Rect can be created from a combination of left, top, width, and height values. Rects can also be created from python objects that are already a Rect or have an attribute named 'rect'. Any pygame function that requires a Rect argument also accepts any of these values to construct a Rect. This makes it easier to create Rects on the fly as arguments to functions. The Rect functions that change the position or size of a Rect return a new copy of the Rect with the affected changes. The original Rect is not modified. Some methods have an alternate 'in-place' version that returns None but affects the original Rect. These 'in-place' methods are denoted with the 'ip' suffix.",
  };


export type surfaceInfo = {
title: string;
description: string;
shortDesc: string;
key: string;
codesample: string;
  };
const surfaceData: surfaceInfo[] = [
{
  title: " pygame.Surface.blit() - Rect ",
  description: "Draws a source Surface onto this Surface. The draw can be positioned with the dest argument. The dest argument can either be a pair of coordinates representing the position of the upper left corner of the blit or a Rect, where the upper left corner of the rectangle will be used as the position for the blit. The size of the destination rectangle does not effect the blit.",
  key: "1",
  shortDesc: '',
  codesample: `# .blit parameters: 
# pygame.Surface.blit(source, dest, area=None, special_flags=0)

import pygame

pygame.init()

# create screen surface
screen = pygame.display.set_mode((500, 500))

# example image
player_image = pygame.image.load('./player.png')
player_rect = player_image.get_Rect()

# set player position using rect variables
player_rect.centerx = 140
player_rect.centery = 200

def check_events(): 
pass

while True: 
screen.fill('red')

# draw player image onto screen at rect position
screen.blit(player_image, player_rect)

# function to handle event loop
check_events()


pygame.display.update()
`,
},
{
  title: " pygame.Surface.convert() - Surface",
  description: "Creates a new copy of the surface with the desired pixel format. The new surface will be in a format suited for quick blitting to the given format with per pixel alpha. If no surface is given, the new surface will be optimized for blitting to the current display.",
  key: "2",
  shortDesc: '',
  codesample: `# The converted Surface will have no pixel alphas. 
# They will be stripped if the original had them. 
# See convert_alpha() for preserving or creating per-pixel alphas.
  
import pygame

pygame.init()

# create screen surface
screen = pygame.display.set_mode((500, 500))

# use .convert on .jpg image surface to improve:
# ... quality & performance
player_image = pygame.image.load('./player.jpg').convert()
player_rect = player_image.get_Rect()

# set player position using rect variables
player_rect.centerx = 140
player_rect.centery = 200

def check_events(): 
pass

while True: 
screen.fill('red')

# draw player image onto screen at rect position
screen.blit(player_image, player_rect)

# function to handle event loop
check_events()


pygame.display.update()
      `,
},
{
  title: " pygame.Surface.convert_alpha() - Surface",
  description: "Unlike the convert() method, the pixel format for the new image will not be exactly the same as the requested source, but it will be optimized for fast alpha blitting to the destination.",
  key: "3",
  shortDesc: '',
  codesample: `import pygame

pygame.init()

# create screen surface
screen = pygame.display.set_mode((500, 500))

# use .convert on .png image surface to improve:
# ... quality & performance
player_image = pygame.image.load('./player.png').convert_alpha()
player_rect = player_image.get_Rect()

# set player position using rect variables
player_rect.centerx = 140
player_rect.centery = 200

def check_events(): 
pass

while True: 
screen.fill('red')

# draw player image onto screen at rect position
screen.blit(player_image, player_rect)

# function to handle event loop
check_events()


pygame.display.update()
      `,
  },
  {
  title: " pygame.Surface.fill() - Surface",
  description: "pygame.Surface.fill(): Returns a Surface with a solid color. If no rect argument is given the entire Surface will be filled. The rect argument will limit the fill to a specific area. The fill will also be contained by the Surface clip area.",
  key: "4",
  shortDesc: '',
  codesample: `import pygame

# Initializing Pygame
pygame.init()

# Creating the surface
sample_surface = pygame.display.set_mode((400,300))

# Choosing yellow color to fill
color = (255,255,0)

# filling color to the surface
sample_surface.fill(color)

# updating the display
pygame.display.update()
      `,
  },
  {
  title: " pygame.Surface.copy() - Surface",
  description: "pygame.Surface.copy(): It creates a new copy of the surface. The duplicate surface will have the same pixel formats, color palettes, transparency settings, and class as the original.",
  key: "5",
  shortDesc: '',
  codesample: `import pygame
      
# Initializing Pygame
pygame.init()

# Creating the surface
sample_surface = pygame.display.set_mode((400,300))

# creating a copy of sample_surface
# and naming it as copied_surface
copied_surface = pygame.Surface.copy(sample_surface)

# updating the display
pygame.display.update()
      `,
  },
  {
  title: " pygame.Surface.set_colorkey() - None",
  description: "pygame.Surface.set_colorkey(): Set the current color key for the surface. When blitting this surface onto a destination, any pixels that have the same color as the colorkey will be transparent.",
  key: "6",
  shortDesc: '',
  codesample: `import pygame
    
# Initializing Pygame
pygame.init()

# creating the display surface
display_surface = pygame.display.set_mode((500, 500 ))

# Creating the image surface
image = pygame.image.load('gfg_logo.png')

# putting our image surface on display surface
# making the white colored part
# of the surface as transparent
pygame.Surface.set_colorkey(image, [255,255,255])

display_surface.blit(image,(100,100))

# updating the display
pygame.display.update()
      `,
  },
  {
  title: " pygame.Surface.get_colorkey() - RGB or None",
  description: "pygame.Surface.get_colorkey(): It returns the current color key value for the Surface. If the color key is not set, then None is returned.",
  key: "7",
  shortDesc: '',
  codesample: `import pygame
    
# Initializing Pygame
pygame.init()

# creating the display surface
display_surface = pygame.display.set_mode((500, 500))

# Creating the image surface
image = pygame.image.load('gfg_logo.png')

# putting our image surface on display surface
# making the white colored part of the surface
# as transparent
pygame.Surface.set_colorkey(image, [255, 255, 255])

# printing the colorkey value for the surface
print(pygame.Surface.get_colorkey(image))

display_surface.blit(image, (100, 100))

# updating the display
pygame.display.update()
      `,
  },
  {
  title: " pygame.Surface.set_alpha() - None",
  description: "pygame.Surface.set_alpha(): The alpha value set for the full surface image.  Pass 0 for invisible and 255 for fully opaque.",
  key: "8",
  shortDesc: '',
  codesample: `import pygame

# Initializing Pygame
pygame.init()

# creating the display surface
display_surface = pygame.display.set_mode((500, 500 ))

# Creating the image surface
image = pygame.image.load('gfg_logo.png')

# putting our image surface on display surface
# making the alpha value of surface as 100
pygame.Surface.set_alpha(image, 100)

display_surface.blit(image,(100,100))

# updating the display
pygame.display.update()
      `,
  },
  {
  title: " pygame.Surface.get_alpha() - RGB or None",
  description: "pygame.Surface.get_alpha(): It returns the current alpha value for the surface.",
  key: "9",
  shortDesc: '',
  codesample: `import pygame
    
# Initializing Pygame
pygame.init()

# creating the display surface
display_surface = pygame.display.set_mode((500, 500 ))

# Creating the image surface
image = pygame.image.load('gfg_logo.png')

# putting our image surface on display surface
# making alpha value of image surface to 100
pygame.Surface.set_alpha(image, 100)

# printing the alpha value of the surface
print(pygame.Surface.get_alpha(image))

display_surface.blit(image,(100,100))

# updating the display
pygame.display.update()
      `,
  },
  {
  title: `pygame.Surface.get_width() - width
  `,
  description: "pygame.Surface.get_width(): Return the width of the Surface in pixels.",
  key: "10",
  shortDesc: '',
  codesample: `import pygame
    
# Initializing Pygame
pygame.init()

# creating the display surface
display_surface = pygame.display.set_mode((500, 500 ))

# Creating the image surface
image = pygame.image.load('logo.png')

# get image width since image is a surface
width = image.get_width()
print('width', width)

# updating the display
pygame.display.update()
      `,
  },
  {
  title: `pygame.Surface.get_height() - height
  `,
  description: "pygame.Surface.get_height(): Return the height of the Surface in pixels.",
  shortDesc: '',
  key: "11",
  codesample: `import pygame
    
# Initializing Pygame
pygame.init()

# creating the display surface
display_surface = pygame.display.set_mode((500, 500 ))

# Creating the image surface
image = pygame.image.load('logo.png')

# get image height since image is a surface
height = image.height()
print('height', height)

# updating the display
pygame.display.update()
      `,
  },
  {
  title: `pygame.Surface.get_size() - (width, height)
  `,
  description: "pygame.Surface.get_size(): Return the width and height of the Surface in pixels.",
  shortDesc: '',
  key: "11",
  codesample: `import pygame
    
# Initializing Pygame
pygame.init()

# creating the display surface
display_surface = pygame.display.set_mode((500, 500 ))

# Creating the image surface
image = pygame.image.load('logo.png')

# get image size since image is a surface
width, height = image.get_size()
print('width', width)
print('height', height)

# updating the display
pygame.display.update()
      `,
  },
  {
  title: " pygame.Surface.get_rect() - Rect",
  description: "pygame.Surface.get_rect(): Returns a new rectangle covering the entire surface. This rectangle will always start at (0, 0) with a width and height the same size as the image.",
  key: "2",
  shortDesc: '',
  codesample: `import pygame

pygame.init()

# create screen surface
screen = pygame.display.set_mode((500, 500))

player_image = pygame.image.load('./player.jpg').convert()

# create rect object for player with .get_rect module
player_rect = player_image.get_Rect()

# set player position using rect variables
player_rect.centerx = 140
player_rect.centery = 200

def check_events(): 
  pass

while True: 
  screen.fill('red')

  # draw player image onto screen at rect position
  screen.blit(player_image, player_rect)

  # function to handle event loop
  check_events()


  pygame.display.update()
        `,
  },
  ];
const surfaceDescription = {
title: "pygame.surface Module",
description:
  "Pygame.surface is a pygame module for loading and playing sounds. ",
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
        RectData, RectDescription,
        surfaceData, surfaceDescription,
        timeData, timeDescription,
        spriteData, spriteDescription,
        transformData, transformDescription,
        mathData, mathDescription,
        maskData, maskDescription,
        pygameData, pygameDescription,
    };

