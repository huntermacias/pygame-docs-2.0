import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const TimePage = ({ time_info }) => {
  const formattedSteps = time_info
    ? time_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.code_sample || "",
      }))
    : [];

const timeDescription = {
  title: "pygame.time Module",
  description:
  "Creates a new Clock object that can be used to track an amount of time. The clock also provides several functions to help control a game's framerate. This method should be called once per frame. It will compute how many milliseconds have passed since the previous call.",
};


  return (
    <DocLayout
      title={timeDescription.title}
      baseDescription={time_info?.description}
      data={formattedSteps}
      description={timeDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: time_info, error } = await supabase
  .from('time_info')
  .select('*')

  return {
    props: {
      time_info,
    },
  };
}

export default TimePage;