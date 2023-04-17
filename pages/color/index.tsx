import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const ColorPage = ({ pygame_colorinfo }) => {
  const formattedSteps = pygame_colorinfo
    ? pygame_colorinfo.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        short_desc: step.short_desc,
        codesample: step.code_sample || "",
      }))
    : [];

    const colorDescription = {
      title: "Pygame.color Module",
      description:
        "Welcome to the Pygame color module! pygame.Color is a module that provides various color-related functions and methods for working with colors in Pygame.",
      };

  return (
    <DocLayout
      title={colorDescription.title}
      baseDescription={pygame_colorinfo?.description}
      data={formattedSteps}
      description={colorDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: pygame_colorinfo, error } = await supabase
  .from('pygame_colorinfo')
  .select('*')

  return {
    props: {
      pygame_colorinfo,
    },
  };
}

export default ColorPage;