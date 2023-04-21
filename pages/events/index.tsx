import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const EventPage = ({ eventdata }) => {
  const formattedSteps = eventdata
    ? eventdata.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.codesample || "",
      }))
    : [];

const eventDescription = {
  title: "pygame.event Module",
  description: "Welcome to the Pygame event module! pygame.event contains pygame.event.Event event object for representing events event objects. There are a variety of ways to access the queued events, from simply checking for the existence of events, to grabbing them directly off the stack. The event queue also offers some simple filtering which can slightly help performance by blocking certain event types from the queue.",
};
    

  return (
    <DocLayout
      title={eventDescription.title}
      baseDescription={eventdata?.description}
      data={formattedSteps}
      description={eventDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: eventdata, error } = await supabase
  .from('eventdata')
  .select('*')

  return {
    props: {
      eventdata,
    },
  };
}

export default EventPage;