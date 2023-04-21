import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";


const ImagePage = ({ font_info }) => {
  const formattedSteps = font_info
    ? font_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.codesample || "",
      }))
    : [];

const imageDescription = {
  title: "pygame.image Module",
  description:
  "Welcome to the Pygame Image module! This module is designed to provide you with powerful tools for loading and manipulating images in your games and interactive applications.",
};

  return (
    <DocLayout
      title={imageDescription.title}
      baseDescription={font_info?.description}
      data={formattedSteps}
      description={imageDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: font_info, error } = await supabase
  .from('font_info')
  .select('*')

  return {
    props: {
      font_info,
    },
  };
}

export default ImagePage;
