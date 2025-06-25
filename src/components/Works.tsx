import { FileCode2 } from "lucide-react";
import WorkCard from "./WorkCard";

const Works = () => {
  const worksData: Work[] = [
    {
      imagePath: "/the-right-ride.svg",
      title: "The Right Ride",
      description:
        "Freelance project for the executive transportation company The Right Ride, focused on performance, modern design, and an optimized user experience.",
      projectType: "Web",
      deployUrl: "https://therightride.us",
      stacks: [
        { name: "Next.js", imagePath: "technologies/nextjs.svg" },
        { name: "Typescript", imagePath: "technologies/typescript.svg" },
        { name: "Tailwind", imagePath: "technologies/tailwindcss.svg" },
        { name: "Shadcn UI", imagePath: "technologies/shadcn.svg" },
      ],
    },
    {
      imagePath: "/stock-flow.svg",
      title: "Stock Flow",
      description:
        "Personal project called Stock Flow, focused on inventory management for small and medium businesses, with user authentication and database integration.",
      projectType: "Web",
      githubUrl: "https://github.com/VitorProgram/stock-flow-frontend",
      deployUrl: "https://stock-flow-one.vercel.app/",
      stacks: [
        { name: "Next.js", imagePath: "technologies/nextjs.svg" },
        { name: "Typescript", imagePath: "technologies/typescript.svg" },
        { name: "Mantine UI", imagePath: "technologies/mantine.svg" },
        { name: "Node.js", imagePath: "technologies/nodejs.svg" },
        { name: "Prisma", imagePath: "technologies/prisma.svg" },
      ],
    },
    {
      imagePath: "/mod-notes.svg",
      title: "Mod Notes",
      projectType: "Web",
      description:
        "Personal project called Mod Notes, a note-taking app with audio recording support to easily capture ideas.",
      githubUrl: "https://github.com/VitorProgram/ModNotes",
      deployUrl: "https://mod-notes.vercel.app/",
      stacks: [
        { name: "React.js", imagePath: "technologies/react.svg" },
        { name: "Javascript", imagePath: "technologies/javascript.svg" },
      ],
    },
  ];

  return (
    <div className="pt-15 md:pt-20" id="works">
      <h3 className="text-3xl font-light text-neutral-100 flex gap-2 mb-12">
        <FileCode2 size={40} />
        My <span className="font-semibold">Experience </span>
      </h3>
      <div className="flex flex-col gap-14 md:gap-18 ">
        {worksData.map((item, index) => (
          <WorkCard
            work={item}
            key={index}
            justify={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
