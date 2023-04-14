import React from "react";
import LearningDocLayout from "../../components/LearningDocLayout";
import { LearnBegInfo } from "../../types";
import { pygameAdvSteps, pygameAdvIntroduction } from "../../documentation/learning_docs";

const PygameADVPage = () => {
  const formattedSteps: LearnBegInfo[] = pygameAdvSteps.map((step, index) => ({
    key: index.toString(),
    title: step.title,
    description: step.description,
    codesample: step.codesample ?? "",
  }));

  return (
    <LearningDocLayout
      title={pygameAdvIntroduction.title}
      baseDescription={pygameAdvIntroduction.description}
      data={formattedSteps}
      description={pygameAdvIntroduction}
    />
  );
};

export default PygameADVPage;
