import React from "react";
import LearningDocLayout from "../../components/LearningDocLayout";
import { SupaIntro } from "../../types";
import { supabase } from './../../lib/supabaseClient';

const PygamePage = ({ pygame_introduction_setup, pygame_introduction_steps }) => {
  const formattedSteps: SupaIntro[] = pygame_introduction_steps
    ? pygame_introduction_steps.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.codesample ?? "",
      }))
    : [];

  return (
    <LearningDocLayout
      title={pygame_introduction_setup?.title}
      baseDescription={pygame_introduction_setup?.description}
      shortDesc={pygame_introduction_setup?.short_desc}
      data={formattedSteps}
      description={pygame_introduction_setup?.description?.replace(/\\n/g, '\n')}
      
    />
  );
};


export async function getServerSideProps() {
  const { data: pygame_introduction_setup } = await supabase
    .from('pygame_introduction_setup')
    .select()
    .single();

  const { data: pygame_introduction_steps } = await supabase
    .from('pygame_introduction_steps')
    .select();
    
  return {
    props: {
      pygame_introduction_setup,
      pygame_introduction_steps,
    },
  };
}


export default PygamePage;
