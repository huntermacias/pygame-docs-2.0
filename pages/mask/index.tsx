import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const MaskPage = ({ mask_info }) => {
  const formattedSteps = mask_info
    ? mask_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.codesample || "",
      }))
    : [];

const maskDescription = {
  title: "pygame.mask Module",
  description:
    "Pygame.mask is a module in the Pygame library that provides a way to create and manipulate masks, which are binary images that define the transparency of an image. Masks are commonly used in collision detection and pixel-perfect collision checking in games. The module offers features such as creating a mask from a Surface object, setting and getting individual pixels, and performing various operations such as bitwise AND and OR on masks.",
};


  return (
    <DocLayout
      title={maskDescription.title}
      baseDescription={mask_info?.description}
      data={formattedSteps}
      description={maskDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: mask_info, error } = await supabase
  .from('mask_info')
  .select('*')

  return {
    props: {
      mask_info,
    },
  };
}

export default MaskPage;