import React from "react";
import LearningDocLayout from "../../components/LearningDocLayout";
import { supabase } from './../../lib/supabaseClient';

const PygamePage = ({ pygame_events }) => {
  const formattedSteps = Array.isArray(pygame_events)
    ? pygame_events.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.codesample ?? "",
      }))
    : [];

	const eventDescription = {
		title: "Events in Pygame",
		description: "pygame.event is a module in the Pygame library that provides a simple and efficient way to handle events such as user input and system events in games and other multimedia applications. It allows game developers to create responsive and interactive games by detecting user input and responding to it accordingly. pygame.event is useful because it provides a straightforward interface for working with events and includes various functions for polling, waiting, posting, and clearing events from the event queue. With pygame.event, game developers can create complex and interactive game mechanics that respond to user input, making their games more engaging and immersive."
	  };
	  

  return (
    <LearningDocLayout
      title={eventDescription?.title}
      baseDescription={eventDescription?.description}
      shortDesc={pygame_events?.shortDesc}
      data={formattedSteps}
      description={eventDescription}
      
    />
  );
};


export async function getServerSideProps() {
	const { data: pygame_events, error } = await supabase
	.from('pygame_events')
	.select('*')
    
  return {
    props: {
      pygame_events,
    },
  };
}


export default PygamePage;
