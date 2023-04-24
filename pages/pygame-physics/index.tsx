import React from "react";
import LearningDocLayout from "../../components/LearningDocLayout";
import { supabase } from './../../lib/supabaseClient';

const PygamePage = ({ pygame_physics }) => {
  const formattedSteps = Array.isArray(pygame_physics)
    ? pygame_physics.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.codesample ?? "",
      }))
    : [];

	const physicsDescription = {
		title: "Physics in Pygame",
		description: "Learning how to use physics in Pygame can greatly enhance the quality and complexity of the games that developers can create. Physics simulations allow for realistic and engaging gameplay, as well as providing opportunities to add unique gameplay mechanics. Additionally, developing physics-based games can help developers to better understand physics concepts, such as forces, motion, and collisions. As a result, mastering physics in Pygame can help developers to create more polished and impressive games, and also improve their programming skills by developing efficient and optimized code."
	  };
	  

  return (
    <LearningDocLayout
      title={physicsDescription?.title}
      baseDescription={physicsDescription?.description}
      shortDesc={pygame_physics?.shortDesc}
      data={formattedSteps}
      description={physicsDescription}
      
    />
  );
};


export async function getServerSideProps() {
	const { data: pygame_physics, error } = await supabase
	.from('pygame_physics')
	.select('*')
    
  return {
    props: {
      pygame_physics,
    },
  };
}


export default PygamePage;
