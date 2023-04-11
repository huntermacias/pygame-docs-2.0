export type Info = {
	title: string;
	description: string;
	key: string;
	codesample: string;
  };
  const data: Info[] = [
	{
		title: 'pygame.mouse.get_pressed()',
		key: "1",
		description: '',
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
		key: "2",
	},
	{
		title: 'pygame.mouse.get_rel()',
		codesample: `x, y = pygame.mouse.get_rel(),
print(f'mouse x relative movement {x}')
print(f'mouse y relative movement {y}')`,
	description: 'gets the mouses x and y position',
	key: "3",
	},
	{
		title: 'pygame.mouse.set_pos()',
		codesample: `x = random.randint(0, 200)
y = random.randint(0, 200)
pygame.mouse.set_pos([x, y]),`,
	description: 'gets the mouses x and y position',
	key: "4",
	},
	{
		title: 'pygame.mouse.set_visable()',
		codesample: `visable = False
pygame.mouse.set_visable(visable)`,
	description: 'gets the mouses x and y position',
	key: "5",
	},
	{
		title: 'pygame.mouse.set_cursor()',
		codesample: `customCursor = pygame.cursors.Cursor() # see Intermediate Topics: cursors
pygame.mouse.set_cursor(CustomCursor())`,
		description: 'gets the mouses x and y position',
		key: "6",
	},
	{
		title: 'pygame.mouse.get_cursor()',
		codesample: `cursorStatus = pygame.mouse.get_cursor() # see Intermediate Topics: cursors
print(f'Cusor Status: {cursorStatus}')`,
		description: 'gets the mouses x and y position',
		key: "7",
	},
  ];

const description = {
	title: "pygame.mixer Module",
	description:
	  "Pygame.mixer is a pygame module for loading and playing sounds. ",
};
  
  export { data, description };