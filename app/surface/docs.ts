export type Info = {
	title: string;
	description: string;
	key: string;
	codesample: string;
  };
  const data: Info[] = [
	{
	  title: " pygame.Surface.blit() - Rect ",
	  description: "Draws a source Surface onto this Surface. The draw can be positioned with the dest argument. The dest argument can either be a pair of coordinates representing the position of the upper left corner of the blit or a Rect, where the upper left corner of the rectangle will be used as the position for the blit. The size of the destination rectangle does not effect the blit.",
	  key: "1",
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
  const description = {
	title: "pygame.mixer Module",
	description:
	  "Pygame.mixer is a pygame module for loading and playing sounds. ",
  };
  
  export { data, description };
  