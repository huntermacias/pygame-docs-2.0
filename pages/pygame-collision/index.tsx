import React from "react";
import LearningDocLayout from "../../components/LearningDocLayout";
import { LearnBegInfo } from "../../types";
import { pygameAdvIntroduction, pygameRectSteps } from "../../documentation/learning_docs";

const PygamePage = () => {
  const formattedSteps: LearnBegInfo[] = pygameRectSteps.map((step, index) => ({
    key: index.toString(),
    title: step.title,
    description: step.description,
    shortDesc: step.shortDesc,
    codesample: step.codesample ?? "",
  }));

  return (
    <LearningDocLayout
      title={pygameAdvIntroduction.title}
      baseDescription={pygameAdvIntroduction.description}
      shortDesc={pygameRectSteps.slice(0,1)[0].shortDesc}
      data={formattedSteps}
      description={pygameAdvIntroduction}
    />
  );
};

export default PygamePage;
