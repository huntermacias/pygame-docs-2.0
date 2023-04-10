export type Info = {
	title: string;
	description: string;
	key: string;
	codesample: string;
  };
  const data: Info[] = [
	{
		title: 'pygame.time.get_ticks()',
		key: '1',
		codesample: `# importing pygame module
import pygame
	
# initialising pygame
pygame.init()
	
while True:
		
	# storing the time in ticks variable
	ticks = pygame.time.get_ticks()

	# convert ticks to seconds
	seconds = ticks / 1000
		
	# printing the ticks & seconds variable
	print(ticks)
	print(seconds)
		
	# pausing the script for 1 second
	pygame.time.wait(1000)`,
		description: 'Returns - milliseconds',
		
	  },
	  {
		title: 'pygame.time.Clock()',
		key: '2',
		codesample: `# importing pygame module
import pygame
	
# initialising pygame
pygame.init()
	
while True:
		
	# storing the time in ticks variable
	ticks = pygame.time.get_ticks()

	# convert ticks to seconds
	seconds = ticks / 1000
		
	# printing the ticks & seconds variable
	print(ticks)
	print(seconds)
		
	# pausing the script for 1 second
	pygame.time.wait(1000)`,
		description: `This function is used to create a clock object which can be used to keep track of time. 
					  The various methods of clock object are: 
					  tick(), get_time(), get_fps()`,
	  },
	  {
		title: 'pygame.time.wait()',
		key: '3',
		codesample: `# importing pygame module
import pygame
	
# initialising pygame
pygame.init()
	
while True:
	print('Hello')
	
	# pausing the script for 1 second
	pygame.time.wait(1000)`,

		description: `Will pause for a given number of milliseconds. This function sleeps the process to share the processor with other programs. 
					  A program that waits for even a few milliseconds will consume very little processor time. It is slightly less accurate than the pygame.time.delay() function.`
	  },
	  {
		title: 'pygame.time.delay()',
		key: '4', 
		codesample: `# importing pygame module
import pygame
	
# initialising pygame
pygame.init()
	
while True:
	print('Hello')
	
	# pausing the script for 2 second
	pygame.time.delay(2000)`,

		description: `Will pause for a given number of milliseconds. This function will use the processor (rather than sleeping) 
					  in order to make the delay more accurate than pygame.time.wait().`
	  },
	  {
		title: 'pygame.time.set_timer()',
		key: '5',
		codesample: `# importing pygame module
import pygame
	
# initialising pygame
pygame.init()
	
def createEnemy(): 
	# add codesample to create enemy

def launchEnemyMissile():
	# add codesample to launch enemy missile

pygame.time.set_timer(createEnemy, 1000)
pygame.time.set_timer(launchEnemyMissile, 1000)`,

		description: `pygame.time.set_timer() schedules a recurring event to be added to the event queue every given number of milliseconds. The event parameter specifies the type of event to add, and loops controls how many times the event is added. Setting millis to 0 disables the timer. Each event type can only have one timer at a time. The once parameter has been replaced by loops`
	  },
  ];

const timeDescription = {
	title: "pygame.time Module",
	description:
	  "Creates a new Clock object that can be used to track an amount of time. The clock also provides several functions to help control a game's framerate. This method should be called once per frame. It will compute how many milliseconds have passed since the previous call.",
  };

  export { data, timeDescription }