"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const TypingTerminal = () => {
  const t = useTranslations("techs");

  const technologiesTerminal = [
    { cmd: "node -v", result: "v18.14.0" },
    { cmd: "npm run build", result: "Build successful ✔️" },
    { cmd: "react -v", result: "React 18.2.0" },
    { cmd: "typescript -v", result: "4.9.4" },
    { cmd: "prisma status", result: t("terminalResults.prisma") },
    { cmd: "figma open", result: t("terminalResults.figma") },
    { cmd: "git push origin main", result: t("terminalResults.git") },
  ];

  const technologies = [
    { src: "/technologies/react.svg", name: "React" },
    { src: "/technologies/nextjs.svg", name: "Next.js" },
    { src: "/technologies/typescript.svg", name: "TypeScript" },
    { src: "/technologies/javascript.svg", name: "Javascript" },
    { src: "/technologies/mantine.svg", name: "Mantine" },
    { src: "/technologies/tailwindcss.svg", name: "Tailwind" },
    { src: "/technologies/nodejs.svg", name: "Node.js" },
    { src: "/technologies/prisma.svg", name: "Prisma" },
    { src: "/technologies/figma.svg", name: "Figma" },
    { src: "/technologies/git.svg", name: "Git" },
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [typedCmd, setTypedCmd] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= technologiesTerminal.length) return;

    const cmd = technologiesTerminal[lineIndex].cmd;
    setTypedCmd("");
    setCharIndex(0);
    setShowResult(false);

    const interval = setInterval(() => {
      setCharIndex((prev) => {
        const next = prev + 1;
        setTypedCmd(cmd.substring(0, next));
        if (next >= cmd.length) {
          clearInterval(interval);
          setTimeout(() => setShowResult(true), 500);
          setTimeout(() => setLineIndex((prev) => prev + 1), 2000);
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [lineIndex]);

  return (
    <div
      className="flex flex-col w-full md:flex-row items-center justify-center gap-8 pt-15"
      id="techs"
    >
      <div className="flex-1 flex flex-col gap-8 md:gap-12">
        <h3 className="text-2xl font-light text-neutral-100">
          {t("title")} <span className="font-semibold">{t("highlight")}</span>
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6 text-sm text-neutral-300 text-left items-start">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col gap-1 items-start hover:grayscale hover:opacity-80 transition-all duration-300 ease-in-out"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-10 h-10 mb-[6px]"
                loading="lazy"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal */}
      <div
        className="bg-black text-green-400 font-mono p-6 rounded-md 
          overflow-y-auto min-h-[440px]
          whitespace-pre-wrap text-sm shadow-lg
          flex-1"
      >
        {technologiesTerminal.slice(0, lineIndex).map((tech, index) => (
          <div key={index} className="mb-4">
            <p>$ {tech.cmd}</p>
            <p>{tech.result}</p>
          </div>
        ))}

        {lineIndex < technologiesTerminal.length && (
          <p className="mb-4">
            $ {typedCmd}
            <span className="blink">|</span>
          </p>
        )}

        {showResult && lineIndex < technologiesTerminal.length && (
          <p className="mb-4">{technologiesTerminal[lineIndex].result}</p>
        )}
      </div>
    </div>
  );
};

export default TypingTerminal;
