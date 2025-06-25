type Stack = {
  imagePath: string;
  name: string;
};

type Work = {
  imagePath: string;
  title: string;
  projectType: "Web" | "Mobile";
  description: string;
  deployUrl?: string;
  githubUrl?: string;
  stacks: Stack[];
};
