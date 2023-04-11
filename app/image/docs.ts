export type Info = {
	title: string;
	description: string;
	key: string;
	codesample: string;
  };
  const data: Info[] = [
	{
      title: 'pygame.image.load()',
      codesample: `cloudImage = pygame.image.load("myCloud.png").convert_alpha()
cloudImage2 = pygame.image.load("myCloud2.jpg").convert()`,
	  key: "1",
	  description: `To load an image, use the pygame.image.load() function. This function accepts a file path or file-like object and returns a Surface object. The following image formats are supported:
BMP
GIF (non-animated)
JPEG
LBM (and PBM, PGM, PPM)
PCX
PNG
PNM
SVG (limited support, using Nano SVG)
TGA (uncompressed)
TIFF
WEBP
XPM.
New in Pygame 2.0: Loading SVG, WebP, PNM 
	  `,
    },
	{
		title: 'pygame.image.save()',
		codesample: `import pygame

# init setup
pygame.init()
screen = pygame.display.set_mode((400, 400))
running = True
clock = pygame.time.Clock()


while running:
	# set background black
	screen.fill((0,0,0))

	# event loop
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			running = False
		if event.type == pygame.KEYDOWN:
			if event.key == pygame.K_s:
				# save image
				pygame.image.save(screen, "image.png")
		draw(event)
	pygame.display.flip()
pygame.quit()`,
		key: '2',
		description: 'This will save your Surface as either a BMP, TGA, PNG, or JPEG image. If the filename extension is unrecognized it will default to TGA. Both TGA, and BMP file formats create uncompressed files. You can pass a filename, a pathlib.Path or a Python file-like object. For file-like object, the image is saved to TGA format unless a namehint with a recognizable extension is passed in.'
	  },
  ];

  const description = {
	title: "pygame.image Module",
	description:
	  "Welcome to the Pygame Image module! This module is designed to provide you with powerful tools for loading and manipulating images in your games and interactive applications.",
  };
  
  export { data, description };
  