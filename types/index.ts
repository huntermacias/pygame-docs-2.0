export type Info = {
  title: string;
  description: string;
  key: string;
  codesample: string;
};

export type LearningInfo = {
  title: string;
  description: string;
  key: string;
  codesample: string | undefined;
};

export interface LearnBegInfo {
  title: string;
  description: string;
  codesample: string | undefined;
  key: string;
}

export type Description = {
  title: string;
  description: string;
};

export type LayoutProps = {
  title: string;
  baseDescription: string;
  data: Info[];
  description: Description;
};

export type LearningLayoutProps = {
  title: string;
  baseDescription: string;
  data: LearningInfo[];
  description: Description;
};
