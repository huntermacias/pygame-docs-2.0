import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const FontPage = ({ font_info }) => {
  const formattedSteps = font_info
    ? font_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.codesample || "",
      }))
    : [];

const fontDescription = {
  title: "pygame.font Module",
  description: "Welcome to the Pygame font module! The pygame.font module allows for rendering TrueType fonts into Surface objects. This module is built on top of the SDL_ttf library, which comes with all normal pygame installations.",
};
    

  return (
    <DocLayout
      title={fontDescription.title}
      baseDescription={font_info?.description}
      data={formattedSteps}
      description={fontDescription}
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

export default FontPage;