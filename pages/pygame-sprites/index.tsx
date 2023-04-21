import React from "react";
import LearningDocLayout from "../../components/LearningDocLayout";
import { supabase } from './../../lib/supabaseClient';

const PygamePage = ({ sprite_collision_info }) => {
  const formattedSteps = Array.isArray(sprite_collision_info)
    ? sprite_collision_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.codesample ?? "",
      }))
    : [];

	const spriteCollisionDescription = {
		title: "Sprite Collision Detection",
		description: "Sprite collision detection is a crucial aspect of game development, as it allows game designers to create interactions between game objects. In general, sprite collision detection involves checking whether two or more sprites intersect with each other. This can be achieved through various algorithms, such as bounding box collision, pixel-perfect collision, or circle collision. Game developers must carefully choose the appropriate collision detection method based on the type of game they are creating, as each method has its own pros and cons. Moreover, optimizing sprite collision detection algorithms is essential to ensure smooth gameplay and a seamless user experience."
	  };
	  

  return (
    <LearningDocLayout
      title={spriteCollisionDescription?.title}
      baseDescription={spriteCollisionDescription?.description}
      shortDesc={sprite_collision_info?.shortDesc}
      data={formattedSteps}
      description={spriteCollisionDescription}
      
    />
  );
};


export async function getServerSideProps() {
	const { data: sprite_collision_info, error } = await supabase
	.from('sprite_collision_info')
	.select('*')
    
  return {
    props: {
      sprite_collision_info,
    },
  };
}


export default PygamePage;
