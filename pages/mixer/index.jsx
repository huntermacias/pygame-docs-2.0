import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const MixerPage = ({ mixer_info }) => {
  const formattedSteps = mixer_info
    ? mixer_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.code_sample || "",
      }))
    : [];

const mixerDescription = {
  title: "pygame.mixer Module",
  description:
    "Pygame.mixer is a pygame module for loading and playing sounds. ",
};


  return (
    <DocLayout
      title={mixerDescription.title}
      baseDescription={mixer_info?.description}
      data={formattedSteps}
      description={mixerDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: mixer_info, error } = await supabase
  .from('mixer_info')
  .select('*')

  return {
    props: {
      mixer_info,
    },
  };
}

export default MixerPage;