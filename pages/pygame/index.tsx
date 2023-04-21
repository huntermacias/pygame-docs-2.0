import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const PygamePage = ({ pygame_info }) => {
  const formattedSteps = pygame_info
    ? pygame_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.codesample || "",
      }))
    : [];

const pygameDescription = {
  title: "Pygame Module",
  description:
    "Pygame is a set of Python modules designed for writing video games. It includes modules for graphics, sound, input, and more.",
};
    


  return (
    <DocLayout
      title={pygameDescription.title}
      baseDescription={pygame_info?.description}
      data={formattedSteps}
      description={pygameDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: pygame_info, error } = await supabase
  .from('pygame_info')
  .select('*')

  return {
    props: {
      pygame_info,
    },
  };
}

export default PygamePage;