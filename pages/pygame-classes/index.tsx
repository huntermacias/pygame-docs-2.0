import React from "react";
import LearningDocLayout from "../../components/LearningDocLayout";
import { SupaIntro } from "../../types";
import { supabase } from './../../lib/supabaseClient';

const PygameClasses = ( { pygame_class_setup, pygame_class_steps } ) => {
  const formattedSteps: SupaIntro[] = pygame_class_steps.map((step, index) => ({
    key: index.toString(),
    title: step.title,
    description: step.description,
    shortDesc: step.shortdesc,
    codesample: step.code_sample ?? "",
  }));

  return (
    <LearningDocLayout
      title={pygame_class_setup.title}
      baseDescription={pygame_class_setup.description}
      shortDesc={pygame_class_setup.shortdesc}
      data={formattedSteps}
      description={pygame_class_steps?.description?.replace(/\\n/g, '\n')}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  // data - supabase table name
  const { data: pygame_class_setup } = await supabase
  .from('pygame_class_setup')
  .select()
  .single();

const { data: pygame_class_steps } = await supabase
  .from('pygame_class_steps')
  .select();

return {
  props: {
    pygame_class_steps,
    pygame_class_setup,
  },
};
}

export default PygameClasses;
