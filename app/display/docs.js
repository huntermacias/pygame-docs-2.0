export const examples = [
	{
		name: `pygame.display.init`,
		code: `pygame.display.init()`,
		title: 'Returns - bool', 
		description: 'Pygame offers control over the display surface which is treated as a regular surface. The display mode can be initialized in different ways, controlled by flags. Only one display can be active at a time, and the display surface becomes invalid if the module is uninitialized. Several events are placed on the pygame event queue when the display mode is set. In some display environments, automatic stretching can distort the appearance of the pygame window, but it can be disabled with an example code provided in the pygame examples directory.',
	},
   
	{
		name: 'pygame.display.set_mode',
		code: `screen_width = 600
screen_width = 500
screen = pygame.display.set_mode((screen_width, screen_height))
		`,
		title: 'Returns - Surface', 
		description: 'Initialize a window or screen for display'
	  },

	  {
		name: 'pygame.display.get_surface',
		code: `screen_width = 600
screen_width = 500
screen = pygame.display.set_mode((screen_width, screen_height))
middle_x = pygame.display.get_surface().get_width()
middle_y = pygame.display.get_surface().get_height()
		`,
		title: 'Returns - Surface', 
		description: 'Return a reference to the currently set display Surface. If no display mode has been set this will return None.'
	  },
  ];