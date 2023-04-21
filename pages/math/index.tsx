import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const MathPage = ({ math_info }) => {
  const formattedSteps = math_info
    ? math_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.code_sample || "",
      }))
    : [];

const mathDescription = {
  title: "pygame.math Module",
  description:
    "Pygame.math is a module in the Pygame library that provides classes and functions for mathematical operations commonly used in game development, such as vector math and angle conversions. The module is built on top of the Python math library and provides additional functionality specific to game development, such as 2D and 3D vector operations. It is used in conjunction with other Pygame modules to create and manipulate game objects, such as...",
}


  return (
    <DocLayout
      title={mathDescription.title}
      baseDescription={math_info?.description}
      data={formattedSteps}
      description={mathDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: math_info, error } = await supabase
  .from('math_info')
  .select('*')

  return {
    props: {
      math_info,
    },
  };
}

export default MathPage;