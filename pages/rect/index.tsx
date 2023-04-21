import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const RectPage = ({ rect_info }) => {
  const formattedSteps = rect_info
    ? rect_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.codesample || "",
      }))
    : [];

const RectDescription = {
  title: "pygame.Rect Module",
  description:
  "Pygame uses Rect objects to store and manipulate rectangular areas. A Rect can be created from a combination of left, top, width, and height values. Rects can also be created from python objects that are already a Rect or have an attribute named 'rect'. Any pygame function that requires a Rect argument also accepts any of these values to construct a Rect. This makes it easier to create Rects on the fly as arguments to functions. The Rect functions that change the position or size of a Rect return a new copy of the Rect with the affected changes. The original Rect is not modified. Some methods have an alternate 'in-place' version that returns None but affects the original Rect. These 'in-place' methods are denoted with the 'ip' suffix.",
};


  return (
    <DocLayout
      title={RectDescription.title}
      baseDescription={rect_info?.description}
      data={formattedSteps}
      description={RectDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: rect_info, error } = await supabase
  .from('rect_info')
  .select('*')

  return {
    props: {
      rect_info,
    },
  };
}

export default RectPage;