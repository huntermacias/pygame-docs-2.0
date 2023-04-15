import React from "react";
import LearningDocLayout from "../../components/LearningDocLayout";
import { LearnBegInfo } from "../../types";
import { pygameIntroduction, pygameSteps } from "../../documentation/learning_docs";

const PygamePage = () => {
  const formattedSteps: LearnBegInfo[] = pygameSteps.map((step, index) => ({
    key: index.toString(),
    title: step.title,
    description: step.description,
    codesample: step.codesample ?? "",
  }));

  return (
    <LearningDocLayout
      title={pygameIntroduction.title}
      baseDescription={pygameIntroduction.description}
      shortDesc={pygameIntroduction.shortdesc}
      data={formattedSteps}
      description={pygameIntroduction}
    />
  );
};

export default PygamePage;