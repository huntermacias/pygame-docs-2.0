export type Info = {
	title: string;
	description: string;
	key: string;
	codesample: string;
  };
  const data: Info[] = [
	{
	  title: " pygame.key.get_pressed() - bools",
	  description: "Returns a sequence of boolean values representing the state of every key on the keyboard. Use the key constant values to index the array. A True value means that the button is pressed.",
	  key: "1",
	  codesample: `speed = [5, 10] # speed for x & y direction
key = pygame.key.get_pressed() # list of bools for each each key

# decrease x speed when the 'a' key is pressed
if (key[pygame.K_a]): 
	speed[0] -= 0.2
# increase x speed when the 'd' key is pressed
if (key[pygame.K_d]): 
	speed[0] += 0.2
# increase y speed when the 'w' key is pressed
if (key[pygame.K_w]): 
	speed[1] += 0.2
# decrease the y speed when the 's' key is pressed
if (key[pygame.K_s]): 
	speed[1] -= 0.2
`,
	},
	{
	  title: " pygame.key.get_focused() - bool",
	  description: "Returns True when the display window has keyboard focus from the system. If the display needs to ensure it does not lose keyboard focus, it can use pygame.event.set_grab() to control the sharing of input devices with other applications to grab all input.",
	  key: "2",
	  codesample: `import pygame

pygame.init()

# main loop
while True:

	# event loop
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			pygame.quit()

		# check if any key is down
		if event.type == pygame.KEYDOWN:
			# check if display is receiving keyboard input 
			if pygame.key.get_focused() and pygame.key.get_pressed()[K_SPACE]:
				print(pygame.key.get_focused())
				is_paused = not is_paused
				`,
	},
	{
		title: " pygame.key.key_code() - int",
		description: "Get the key identifier code from the descriptive name of the key. This returns an integer matching one of the K_* keycodes. For example: ",
		key: "3",
		codesample: `>>> pygame.key.key_code("return") == pygame.K_RETURN
True

>>> pygame.key.key_code("0") == pygame.K_0
True

>>> pygame.key.key_code("space") == pygame.K_SPACE
True
  `,
	  },
  ];
  const description = {
	title: "pygame.mixer Module",
	description:
	  "Pygame.mixer is a pygame module for loading and playing sounds. ",
  };
  
  export { data, description };
  