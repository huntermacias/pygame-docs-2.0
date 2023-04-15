export type Info = {
  key: string;
  title: string;
  description: string;
  shortDesc: string;
  codesample: string;
};

export type CardOption = {
  label: string;
  link: string;
  key: string;
  }

  export type Option = {
    label: string;
    link: string;
  }


export type Card = {
    key: number;
    title: string;
    description: string;
    shortDesc: string;
    imageUrl: string;
    linkUrl: string;
    options: Option[];
  }

export type SupabaseCard = {
    key: number;
    title: string;
    description: string;
    short_desc: string;
    image_url: string;
    link_url: string;
    options: { label: string; link: string }[];
  }
  



export type LearningInfo = {
  title: string;
  description: string;
  shortDesc: string;
  key: string;
  codesample: string | undefined;
};

export interface SupaIntro {
  title: string;
  description: string;
  shortDesc: string;
  codesample: string | undefined;
  key: string;
}

export interface SupaIntroSteps {
  title: string;
  description: string;
  shortDesc: string;
  codesample: string | undefined;
  key: string;

}


export interface LearnBegInfo {
  title: string;
  description: string;
  shortDesc: string;
  codesample: string | undefined;
  key: string;
}

export interface LearnAdvInfo {
  title: string;
  description: string;
  shortDesc: string;
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
  shortDesc: string;
  data: LearningInfo[];
  description: Description;
};
