import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const SurfacePage = ({ surface_info }) => {
  const formattedSteps = surface_info
    ? surface_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.code_sample || "",
      }))
    : [];

const surfaceDescription = {
  title: "pygame.surface Module",
  description:
  "Pygame.surface is a pygame module for loading and playing sounds. ",
};
    

  return (
    <DocLayout
      title={surfaceDescription.title}
      baseDescription={surface_info?.description}
      data={formattedSteps}
      description={surfaceDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: surface_info, error } = await supabase
  .from('surface_info')
  .select('*')

  return {
    props: {
      surface_info,
    },
  };
}

export default SurfacePage;