import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const ColorPage = ({ pygame_drawinfo }) => {
  const formattedSteps = pygame_drawinfo
    ? pygame_drawinfo.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        short_desc: step.short_desc,
        codesample: step.code_sample || "",
      }))
    : [];

    const drawDescription = {
      title: "pygame.draw Module",
      description: "Welcome to the Pygame draw module!",
      };

  return (
    <DocLayout
      title={drawDescription.title}
      baseDescription={pygame_drawinfo?.description}
      data={formattedSteps}
      description={drawDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: pygame_drawinfo, error } = await supabase
  .from('pygame_drawinfo')
  .select('*')

  return {
    props: {
      pygame_drawinfo,
    },
  };
}

export default ColorPage;