export const examples = [
	{
		name: `Virutal Attributes `,
		code: `QUIT - none
ACTIVEEVENT - gain, state
KEYDOWN - key, mod, unicode, scancode
KEYUP - key, mod, unicode, scancode
MOUSEMOTION - pos, rel, buttons, touch
MOUSEBUTTONUP - pos, button, touch
MOUSEBUTTONDOWN - pos, button, touch
VIDEORESIZE - size, w, h
VIDEOEXPOSE - none
USEREVENT - code`
	},
    {
      name: 'pygame.event.get()',
      code: 'gets events from the queue -> EventList',
    },
	{
		name: 'Looping through events',
		code: `for event in pygame.event.get():
	# check if users exits window
	if event.type == pygame.QUIT: 
		running = False		
	elif event.type == pygame.KEYDOWN:
		if event.key == pygame.K_a:
			print('a is being pressed')	
	elif event.type == pygame.KEYUP: 
		if event.key == pygame.K_LEFT:
			print('left arrow released')
	elif event.type == pygame.MOUSEBUTTONDOWN:
		# event.button triggers several values
		# (1-left, 2-mid, 3-right, 4-scroll-up, 5-scroll-down)
		print(event.button)
		left, mid, right = pygame.mouse.get_pressed()
		if left: 
			print('left mouse button clicked')
	elif events.type == pygame.MOUSEMOTION:
		mouse_position = pygame.mouse.get_pos()
		
		`,
	  },
  ];