import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const MixerPage = ({ mouse_info }) => {
  const formattedSteps = mouse_info
    ? mouse_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.code_sample || "",
      }))
    : [];

const mouseDescription = {
  title: "pygame.mixer Module",
  description: "Pygame.mouse is a pygame module for loading and playing sounds. ",
};


  return (
    <DocLayout
      title={mouseDescription.title}
      baseDescription={mouse_info?.description}
      data={formattedSteps}
      description={mouseDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: mouse_info, error } = await supabase
  .from('mouse_info')
  .select('*')

  return {
    props: {
      mouse_info,
    },
  };
}

export default MixerPage;