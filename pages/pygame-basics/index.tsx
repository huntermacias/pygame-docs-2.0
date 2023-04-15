import React from "react";
import LearningDocLayout from "../../components/LearningDocLayout";
import { SupaIntro } from "../../types";
import { pygameIntroduction, pygameSteps } from "../../documentation/learning_docs";
import { supabase } from './../../lib/supabaseClient';

const PygamePage = ({ pygame_introduction_setup }) => {
  const formattedSteps: SupaIntro[] = pygameSteps.map((step, index) => ({
    key: index.toString(),
    title: step.title,
    description: step.description,
    shortDesc: step.shortDesc,
    codesample: step.codesample ?? "",
  }));

  return (
	// title,
	// baseDescription,
	// shortDesc,
	// data,
    <LearningDocLayout
      title={pygame_introduction_setup?.title}
      baseDescription={pygame_introduction_setup?.description}
      shortDesc={pygame_introduction_setup.short_desc}
      data={formattedSteps}
	  description={pygame_introduction_setup?.description}
    />
  );
};

export async function getServerSideProps() {
    let { data } = await supabase.from('pygame_introduction_setup').select().single()

    return {
      props: {
		pygame_introduction_setup: data
      },
    }
  }

export default PygamePage;
