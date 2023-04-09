import React from "react";
import { data, description } from "./docs";
import DocLayout from "../../components/DocLayout";

const Display = () => {
  return (
    <DocLayout
      title="pygame.display Methods"
      baseDescription="A list of methods available for use with the pygame.display class."
      data={data}
      description={description}
    />
  );
};

export default Display;
