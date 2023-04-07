export const examples = [

    {
      name: 'pygame.image.load()',
      code: `cloudImage = pygame.image.load("myCloud.png").convert_alpha()
cloudImage2 = pygame.image.load("myCloud2.jpg").convert()`,
	  title: 'Returns - Surface',
	  description: 'Load an image from a file source. You can pass either a filename, a Python file-like object, or a pathlib.Path. The returned Surface will contain the same color format, colorkey and alpha transparency as the file it came from. You will often want to call pygame.Surface.convert()change the pixel format of an image with no arguments, to create a copy that will draw more quickly on the screen. For alpha transparency, like in .png images, use the pygame.Surface.convert_alpha()change the pixel format of an image including per pixel alphas method after loading so that the image has per pixel transparency.'
    },
	{
		name: 'pygame.image.save()',
		code: `import pygame

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
		title: 'Returns - None',
		description: 'This will save your Surface as either a BMP, TGA, PNG, or JPEG image. If the filename extension is unrecognized it will default to TGA. Both TGA, and BMP file formats create uncompressed files. You can pass a filename, a pathlib.Path or a Python file-like object. For file-like object, the image is saved to TGA format unless a namehint with a recognizable extension is passed in.'
	  },
  ];