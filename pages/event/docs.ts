export type Info = {
	title: string;
	description: string;
	key: string;
	codesample: string;
  };
  const data: Info[] = [
	{
		title: `Virutal Attributes `,
		key: '1',
		description: 'virtual atributes for pygame.event',
		codesample: `QUIT - none
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
      	title: 'pygame.event.get()',
		key: '2',
		description: '',
      	codesample: 'gets events from the queue -> EventList',
    },
	{
		title: 'Looping through events',
		key: '3',
		description: '',
		codesample: `for event in pygame.event.get():
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
		# (1-left, 2-mid, 3-right, 
		# 4-scroll-up, 5-scroll-down)
		print(event.button)
		left, mid, right = pygame.mouse.get_pressed()
		if left: 
			print('left mouse button clicked')
	elif events.type == pygame.MOUSEMOTION:
		mouse_position = pygame.mouse.get_pos()
		
		`,
	  },
  ];

const description = {
	title: "pygame.event Module",
	description: "Welcome to the Pygame event module! pygame.event contains pygame.event.Event event object for representing events event objects. There are a variety of ways to access the queued events, from simply checking for the existence of events, to grabbing them directly off the stack. The event queue also offers some simple filtering which can slightly help performance by blocking certain event types from the queue.",
};

export { data, description };