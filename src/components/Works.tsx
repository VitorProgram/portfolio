import { FileCode2 } from "lucide-react";
import WorkCard from "./WorkCard";
import { getTranslations } from "next-intl/server";

const Works = async () => {
  const t = await getTranslations("experience");

  const worksData = t.raw("projects") as Work[];
  const buttons = t.raw("buttons") as {
    viewDeploy: string;
    viewGithub: string;
    viewProject: string;
  };

  return (
    <div className="pt-15 md:pt-20" id="works">
      <h3
        data-aos="fade"
        data-aos-delay="300"
        className="text-2xl sm:text-3xl font-light text-neutral-100 flex items-center gap-2 mb-12"
      >
        <FileCode2 size={40} className="size-6 sm:size-10" />
        {t("title")}
      </h3>

      <div className="flex flex-col gap-14 md:gap-18 ">
        {worksData.map((item, index) => (
          <WorkCard
            work={item}
            key={index}
            justify={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
            t={{ buttons }} // <- envia como objeto, conforme o tipo esperado
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
