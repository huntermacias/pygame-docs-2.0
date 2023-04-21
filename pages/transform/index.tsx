import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const TransformPage = ({ transform_info }) => {
  const formattedSteps = transform_info
    ? transform_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.code_sample || "",
      }))
    : [];

const transformDescription = {
  title: 'pygame.transform Module',
  description:
    'Pygame.transform is a module in the Pygame library that provides functions for transforming and manipulating 2D images or Surfaces. The module offers features such as scaling, rotating, flipping, and converting between different pixel formats. It is commonly used in 2D game development to manipulate images and create special effects.',
};


  return (
    <DocLayout
      title={transformDescription.title}
      baseDescription={transform_info?.description}
      data={formattedSteps}
      description={transformDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: transform_info, error } = await supabase
  .from('transform_info')
  .select('*')

  return {
    props: {
      transform_info,
    },
  };
}

export default TransformPage;