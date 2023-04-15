import React from "react";
import LearningDocLayout from "../../components/LearningDocLayout";
import { SupaIntro } from "../../types";
import { supabase } from './../../lib/supabaseClient';

const LearnRectPage = ({ pygame_rect_steps, pygame_rect_setup } ) => {
  const formattedSteps: SupaIntro[] = pygame_rect_steps
    ? pygame_rect_steps.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        short_desc: step.short_desc,
        codesample: step.code_sample ?? "",
      }))
    : [];

  return (
    <LearningDocLayout
      title={pygame_rect_setup?.title}
      baseDescription={pygame_rect_setup?.description}
      shortDesc={pygame_rect_setup?.short_desc}
      data={formattedSteps}
      description={pygame_rect_setup?.description?.replace(/\\n/g, '\n')}
      
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
    // data = supabase table name
    const { data: pygame_rect_setup } = await supabase
    .from('pygame_rect_setup')
    .select()
    .single();

  const { data: pygame_rect_steps } = await supabase
    .from('pygame_rect_steps')
    .select();

  return {
    props: {
      pygame_rect_steps,
      pygame_rect_setup,
    },
  };
}

export default LearnRectPage;
