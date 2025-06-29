import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";
import { ReactNode } from "react";
import LinkButton from "./LinkButton";

interface WorkCardProps {
  work: Work;
  justify: "flex-row" | "flex-row-reverse";
  t: {
    buttons: {
      viewDeploy: string;
      viewGithub: string;
      viewProject: string;
    };
  };
}

const WorkCard = ({ work, justify, t }: WorkCardProps) => {
  return (
    <div
      className={`flex gap-6 flex-col ${
        justify === "flex-row" ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Área da Imagem */}
      <div className="relative rounded-2xl lg:max-w-147 sm:h-80 lg:h-auto w-full overflow-hidden group">
        <img
          className="w-full h-full sm:object-cover sm:object-center object-contain rounded-2xl"
          src={work.imagePath}
          alt={work.title}
        />

        <div className="hidden md:flex absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
          {work.deployUrl ? (
            <Link
              href={work.deployUrl}
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow-md hover:bg-neutral-200 transition"
            >
              View Project
            </Link>
          ) : work.githubUrl ? (
            <Link
              href={work.githubUrl}
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow-md hover:bg-neutral-200 transition"
            >
              View Project
            </Link>
          ) : null}
        </div>
      </div>

      {/* Área do Conteúdo */}
      <div className="flex flex-col flex-1 justify-end gap-6">
        <h3 className="font-bold text-[16px] uppercase">{work.title}</h3>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          {work.description}
        </p>

        <div className="flex flex-wrap gap-8 md:gap-10">
          <p className="text-lg">{work.projectType} App</p>

          <div className="flex gap-8 flex-wrap">
            {work.stacks.map((stack, index) => (
              <img
                key={index}
                src={stack.imagePath}
                alt={stack.name}
                className="w-7 h-7 rounded-md hover:grayscale hover:opacity-80 transition-all duration-300 ease-in-out"
              />
            ))}
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 flex-wrap">
          {work.deployUrl && (
            <Link href={work.deployUrl} target="_blank">
              <LinkButton>
                {t.buttons.viewDeploy}
                <Globe className="size-5" />
              </LinkButton>
            </Link>
          )}
          {work.githubUrl && (
            <Link href={work.githubUrl} target="_blank">
              <LinkButton>
                {t.buttons.viewGithub}
                <Github className="size-5" />
              </LinkButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
