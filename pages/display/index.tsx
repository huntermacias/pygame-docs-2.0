import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const DisplayDocsPage = ({ pygame_displayinfo_steps }) => {
  const formattedSteps = pygame_displayinfo_steps
    ? pygame_displayinfo_steps.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        short_desc: step.short_desc,
        codesample: step.code_sample || "",
      }))
    : [];

const displayDescription = {
  title: "Pygame.display Module",
  description:
    "pygame.display is a module that allows you to control the display window and screen",
};

  return (
    <DocLayout
      title={displayDescription.title}
      baseDescription={pygame_displayinfo_steps?.description}
      data={formattedSteps}
      description={displayDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: pygame_displayinfo_steps, error } = await supabase
  .from('pygame_displayinfo_steps')
  .select('*')

  return {
    props: {
      pygame_displayinfo_steps,
    },
  };
}

export default DisplayDocsPage;