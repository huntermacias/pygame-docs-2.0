'use client'
import { Fragment } from 'react';
import GettingStarted from '../../components/GettingStarted';

const EventExamples = () => {
  const examples = [
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

  return (
    <div className="mx-auto max-w-2xl p-6 mb-10">
      <h1 className="text-3xl font-bold font-mono mb-6 text-amber-300">Examples for pygame.Event</h1>
      {examples.map((example) => (
        <Fragment key={example.name}>
          <h2 className="text-xl font-bold font-mono mb-2 text-amber-300">{example.name}</h2>
          {/* <pre className="bg-gray-800 text-gray-100 font-mono rounded-md p-4 mb-10">{example.code}</pre> */}
		  <div className='text-white text-sm'>

		  	<GettingStarted code={example.code} />
		  </div>
        </Fragment>
      ))}

	  <div></div>
	
    </div>

  );
};

export default EventExamples;
