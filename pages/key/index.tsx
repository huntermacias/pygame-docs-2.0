import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";

const KeyPage = ({ key_info }) => {
  const formattedSteps = key_info
    ? key_info.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        shortDesc: step.shortDesc,
        codesample: step.codesample || "",
      }))
    : [];

  const keyDescription = {
    title: "pygame.key Module",
    description:
      "Pygame.key is a module in Pygame that allows you to handle keyboard input in your game or application. It provides functions to detect key presses, releases, and to check if a key is currently being held down. This module also includes constants for every key on a standard keyboard, making it easy to refer to specific keys in your code.",
      };
    

  return (
    <DocLayout
      title={keyDescription.title}
      baseDescription={key_info?.description}
      data={formattedSteps}
      description={keyDescription}
    />
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: key_info, error } = await supabase
  .from('key_info')
  .select('*')

  return {
    props: {
      key_info,
    },
  };
}

export default KeyPage;