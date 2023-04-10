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
	  {
		title: " Pygame Constants",
		description: "The following is a list of all the constants (from pygame.localspygame constants) used to represent keyboard keys.",
		key: "4",
		codesample: `
+----------------+-------+----------------------------------------+
| pygame Constant | ASCII | Description                           |
+----------------+-------+----------------------------------------+
| K_BACKSPACE    |       | backspace                              |
| K_TAB          |       | tab                                    |
| K_CLEAR        |       | clear                                  |
| K_RETURN       |       | return                                 |
| K_PAUSE        |       | pause                                  |
| K_ESCAPE       | ^[    | escape                                 |
| K_SPACE        |       | space                                  |
| K_EXCLAIM      | !     | exclaim                                |
| K_QUOTEDBL     | "     | quotedbl                               |
| K_HASH         | #     | hash                                   |
| K_DOLLAR       | $     | dollar                                 |
| K_AMPERSAND    | &     | ampersand                              |
| K_QUOTE        |       | quote                                  |
| K_LEFTPAREN    | (     | left parenthesis                       |
| K_RIGHTPAREN   | )     | right parenthesis                      |
| K_ASTERISK     | *     | asterisk                               |
| K_PLUS         | +     | plus sign                              |
| K_COMMA        | ,     | comma                                  |
| K_MINUS        | -     | minus sign                             |
| K_PERIOD       | .     | period                                 |
| K_SLASH        | /     | forward slash                          |
| K_0            | 0     | 0                                      |
| K_1            | 1     | 1                                      |
| K_2            | 2     | 2                                      |
| K_3            | 3     | 3                                      |
| K_4            | 4     | 4                                      |
| K_5            | 5     | 5                                      |
| K_6            | 6     | 6                                      |
| K_7            | 7     | 7                                      |
| K_8            | 8     | 8                                      |
| K_9            | 9     | 9                                      |
| K_COLON        | :     | colon                                  |
| K_SEMICOLON    | ;     | semicolon                              |
| K_LESS         | <     | less-than sign                         |
| K_EQUALS       | =     | equals sign                            |
| K_GREATER      | >     | greater-than sign                      |
| K_QUESTION     | ?     | question mark                          |
| K_AT           | @     | at                                     |
| K_LEFTBRACKET  | [     | left bracket                           |
| K_BACKSLASH    |       | backslash                              |
| K_RIGHTBRACKET | ]     | right bracket                          |
| K_CARET        | ^     | caret                                  |
| K_UNDERSCORE   | _     | underscore                             |
| K_a            | a     | a                                      |
| K_b            | b     | b                                      |
| K_c            | c     | c                                      |
| K_d            | d     | d                                      |
| K_e            | e     | e                                      |
| K_f            | f     | f                                      |
| K_g            | g     | g                                      |
| K_h            | h     | h                                      |
| K_i            | i     | i                                      |
| K_j            | j     | j                                      |
| K_k            | k     | k                                      |
| K_l            | l     | l                                      |
| K_m            | m     | m                                      |
| K_n            | n     | n                                      |
| K_o            | o     | o                                      |
| K_p            | p     | p                                      |
| K_q            | q     | q                                      |
| K_r            | r     | r                                      |
| K_s            | s     | s                                      |
| K_t            | t     | t                                      |
| K_u            | u     | u                                      |
| K_v            | v     | v                                      |
| K_w            | w     | w                                      |
| K_x            | x     | x                                      |
| K_y            | y     | y                                      |
| K_z            | z     | z                                      |
| K_DELETE       |       | delete                                 |
| K_KP0          |       | keypad 0								  |
| K_KP1          |       | keypad 1								  |
| K_KP2          |       | keypad 2								  |
| K_KP3          |       | keypad 3    							  |
| K_KP4          |       | keypad 4								  |
| K_KP5          |       | keypad 5								  |
| K_KP6          |       | keypad 6								  |
| K_KP7          |       | keypad 7                               |
| K_KP8          |       | keypad 8								  |
| K_KP9          |       | keypad 9								  |
| K_KP_PERIOD    | .     | keypad period						  |
| K_KP_DIVIDE    | /     | keypad divide						  |
| K_KP_MULTIPLY  | *     | keypad multiply						  |
| K_KP_MINUS     | -     | keypad minus							  |
| K_KP_PLUS      |       | keypad plus							  |
| K_KP_EQUALS    | =     | keypad equals						  |
| K_UP           |       | up arrow								  |
| K_DOWN         |       | down arrow							  |
| K_RIGHT        |       | right arrow							  |
| K_LEFT         |       | left arrow						  	  |
| K_INSERT       |       | insert								  |
| K_HOME         |       | home									  |
| K_END          |       | end									  |
| K_PAGEUP       |       | page up							 	  |
| K_PAGEDOWN     |       | page down							  |
| K_F1           |       | F1									  |
| K_F2           |       | F2									  |
| K_F3           |       | F3									  |
| K_F4           |       | F4									  |
| K_F5           |       | F5									  |
| K_F6           |       | F6									  |
| K_F7           |       | F7									  |
| K_F8           |       | F8									  |
| K_F9           |       | F9									  |
| K_F10          |       | F10									  |	
| K_F11          |       | F11									  |
| K_F12          |       | F12									  |
| K_F13          |       | F13									  |
| K_F14          |       | F14									  |
| K_F15          |       | F15									  |
| K_NUMLOCK      |       | numlock								  |
| K_CAPSLOCK     |       | capslock								  |
| K_SCROLLOCK    |       | scrollock							  |
| K_RSHIFT       |       | right shift							  |
| K_LSHIFT       |       | left shift							  |
| K_RCTRL        |       | right control						  |
| K_LCTRL        |       | left control							  |
| K_RALT         |       | right alt							  |
| K_LALT         |       | left alt								  |
| K_RMETA        |       | right meta							  |
| K_LMETA        |       | left meta							  |
| K_LSUPER       |       | left Windows key						  |
| K_RSUPER       |       | right Windows key					  |
| K_MODE         |       | mode shift 							  |
| K_HELP         |       | help									  |
| K_PRINT        |       | print screen							  |
| K_SYSREQ       |       | sysrq								  |
| K_BREAK        |       | break								  |
| K_MENU         |       | menu									  |
| K_POWER        |       | power								  |
| K_EURO         |       | Euro									  |
| K_AC_BACK      |       | Android back button      			  |
+----------------+-------+----------------------------------------+
		
		`
		
	  },
  ];
  const description = {
	title: "pygame.key Module",
	description:
	  "Pygame.key is a module in Pygame that allows you to handle keyboard input in your game or application. It provides functions to detect key presses, releases, and to check if a key is currently being held down. This module also includes constants for every key on a standard keyboard, making it easy to refer to specific keys in your code.",
  };
  
  export { data, description };
  