export type Info = {
	title: string;
	description: string;
	key: string;
	codesample: string;
  };
  const data: Info[] = [
	{
      title: 'pygame.font.Font()',
      codesample: `import pygame

pygame.init()

# create a font object.
# 1st parameter is the font file
# which is present in pygame.
# 2nd parameter is size of the font
font = pygame.font.Font('freesansbold.ttf', 32)

# alternatively you can use your systems default font by specificying None
font = pygame.font.Font(None, 32)`,
	  key: '1',
	  description: 'create a new Font object from a file'
    },
	{
		title: 'pygame.font_get_fonts()',
		codesample: `import pygame

pygame.init()

myFonts = pygame.font_get_fonts()
for font in myFonts:
	print(f'font name: {font}')`,
		key: '2',
		description: 'If you’re not looking to be including any ttf files in your code, we then turn to using pygame.font.SysFont(). This is the method I personally recommend and use in my own pygame programs. A good strategy is to first find the fonts supported by the system the code is executing on. The pygame.font.get_fonts() function will return a list of all the names of the fonts it can find on your system.'
	  },
	  {
		title: 'pygame.font_get_fonts()',
		codesample: `import pygame
 
pygame.init()
screen = pygame.display.set_mode((400, 400))
clock = pygame.time.Clock()
	
dialogue_font = pygame.font.SysFont('arial', 15)
name_font = pygame.font.SysFont('Helvetica', 20)
game_over_font = pygame.font.SysFont('Verdana', 60)
	
dialogue = dialogue_font.render("Hey there, Beautfiul weather today!",
								True, (0,0,0))
name = name_font.render("John Hubbard", True, (0,0,255))
game_over = game_over_font.render("Game Over", True, (255,0,0))
	
while True:
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			pygame.quit()
			sys.exit()
		
	screen.fill((255, 255, 255))
		
	screen.blit(dialogue, (40,40))
	screen.blit(name, (40,140))
	screen.blit(game_over, (40,240))
		
	pygame.display.flip()
	clock.tick(60)`,
		key: '3',
		description: 'Return a new Font object that is loaded from the system fonts. The font will match the requested bold and italic flags. Pygame uses a small set of common font aliases. If the specific font you ask for is not available, a reasonable alternative may be used. If a suitable system font is not found this will fall back on loading the default pygame font. The font name can also be an iterable of font names, a string of comma-separated font names, or a bytes of comma-separated font names, in which case the set of names will be searched in order.'
	  },
  ];

const description = {
	title: "pygame.font Module",
	description: "Welcome to the Pygame font module! The pygame.font module allows for rendering TrueType fonts into Surface objects. This module is built on top of the SDL_ttf library, which comes with all normal pygame installations.",
};

export { data, description };