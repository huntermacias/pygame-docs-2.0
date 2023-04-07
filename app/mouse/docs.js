export const examples = [
	{
		name: 'pygame.mouse.get_pressed',
		code: `left, middle, right = pygame.mouse.get_pressed(),
 
	if left:
		print("Left Mouse Key is being pressed")
		`,
		title: 'Returns - Tuple (bool, bool, bool)',
		description: 'check which mouse button is being pressed'
	},
	{
		name: 'pygame.mouse.get_pos',
		code: `x, y = pygame.mouse.get_pos(),
print(f'mouse x position {x}')
print(f'mouse y position {y}')`,
		title: 'Returns - Tuple (x, y)',
		description: 'gets the mouses x and y position'
	},
	{
		name: 'pygame.mouse.get_rel()',
		code: `x, y = pygame.mouse.get_rel(),
print(f'mouse x relative movement {x}')
print(f'mouse y relative movement {y}')`,
		title: 'Returns - Tuple (x, y)',
		description: 'gets the mouses x and y relative movement since last function call'
	},
	{
		name: 'pygame.mouse.set_pos()',
		code: `x = random.randint(0, 200)
y = random.randint(0, 200)
pygame.mouse.set_pos([x, y]),`,
		title: 'Returns - None',
		description: 'sets the mouse position to given arguments if mouse is visable.'
	},
	{
		name: 'pygame.mouse.set_visable()',
		code: `visable = False
pygame.mouse.set_visable(visable)`,
		title: 'Returns - Bool',
		description: 'if boolean is true, the cursor will be visable. Returns previous state.'
	},
	{
		name: 'pygame.mouse.set_cursor()',
		code: `customCursor = pygame.cursors.Cursor() # see Intermediate Topics: cursors
pygame.mouse.set_cursor(CustomCursor())`,
		title: 'Returns - None',
		description: 'sets the mouse cursor to something new. This method accepts an explicit Cursor object.'
	},
	{
		name: 'pygame.mouse.get_cursor()',
		code: `cursorStatus = pygame.mouse.get_cursor() # see Intermediate Topics: cursors
print(f'Cusor Status: {cursorStatus}')`,
		title: 'Returns - pygame.cursors.Cursor',
		description: 'get the information about the mouse system cursor'
	},
  ];