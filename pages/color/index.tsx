import React from "react";
import { supabase } from './../../lib/supabaseClient';
import DocLayout from "../../components/DocLayout";
import ModuleInfo from "../../components/ModuleInfo";

const ColorPage = ({ pygame_colorinfo }) => {
  const formattedSteps = pygame_colorinfo
    ? pygame_colorinfo.map((step, index) => ({
        key: index.toString(),
        title: step.title,
        description: step.description,
        short_desc: step.short_desc,
        codesample: step.code_sample || "",
      }))
    : [];

    const colorDescription = {
      title: "Pygame.color Module",
      description:
        "Welcome to the Pygame color module! pygame.Color is a module that provides various color-related functions and methods for working with colors in Pygame.",
      };
      const additionalInfo = {
        info:
          "The pygame.color module provides a range of pre-defined colors and allows for creating new colors using RGB or HSL values. It also supports converting between different color formats, such as RGB, HSL, HSV, and CMY.",
        features: [
          "The module includes over 200 pre-defined colors.",
          "Colors can be created using RGB or HSL values.",
          "Colors can be converted between RGB, HSL, HSV, and CMY formats.",
          "The module provides methods for manipulating colors, such as adjusting brightness, saturation, and hue.",
        ],
      };

  return (
    <div>
      <DocLayout
        title={colorDescription.title}
        baseDescription={pygame_colorinfo?.description}
        data={formattedSteps}
        description={colorDescription}
      />
      <div className="mx-auto max-w-3xl p-6">
       <ModuleInfo additionalInfo={additionalInfo} />

      </div>

    </div>
  );
};

// get data from supabase
export async function getServerSideProps() {
  const { data: pygame_colorinfo, error } = await supabase
  .from('pygame_colorinfo')
  .select('*')

  return {
    props: {
      pygame_colorinfo,
    },
  };
}

export default ColorPage;