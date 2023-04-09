export type Info = {
  title: string;
  description: string;
  key: string;
  codesample: string;
};

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
