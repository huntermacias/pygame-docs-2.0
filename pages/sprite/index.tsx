import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const SpritePage = ({ sprite_info }) => {
  const formattedSteps = sprite_info
    ? sprite_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.codesample || "",
      }))
    : [];

    const spriteDescription = {
      title: "pygame.sprite Module",
      description:
        "Pygame.sprite is a module in the Pygame library that provides an efficient way to create and manipulate groups of sprites, which are 2D images or animations that can be displayed on a Pygame surface. The module offers features such as collision detection and grouping of related sprites for efficient updates and drawing. It is commonly used in 2D game development to manage and update large numbers of sprites in a game scene.",
        };


  return (
    <DocLayout
      title={spriteDescription.title}
      baseDescription={sprite_info?.description}
      data={formattedSteps}
      description={spriteDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: sprite_info, error } = await supabase
  .from('sprite_info')
  .select('*')

  return {
    props: {
      sprite_info,
    },
  };
}

export default SpritePage;