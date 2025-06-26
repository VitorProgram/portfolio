"use client";

import EducationCard from "./EducationCard";
import { useTranslations } from "next-intl";

const EducationSection = () => {
  const t = useTranslations("education");

  const education = t.raw("list") as any[];
  const achievements = t.raw("achievements") as any[];

  const parsedEducation = education.map((item) => ({
    ...item,
    initDate: item.initDate ? new Date(item.initDate) : undefined,
    endDate: item.endDate ? new Date(item.endDate) : undefined,
  }));

  const parsedAchievements = achievements.map((item) => ({
    ...item,
    initDate: item.initDate ? new Date(item.initDate) : undefined,
    endDate: item.endDate ? new Date(item.endDate) : undefined,
  }));

  return (
    <div className="flex flex-col gap-16 pt-15 md:pt-20" id="education">
      <div className="flex flex-col gap-8">
        <h3 className="text-3xl font-semibold text-neutral-100">
          {t("title")}
        </h3>
        <div className="flex flex-col gap-8">
          {parsedEducation.map((item, index) => (
            <EducationCard key={index} education={item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h3 className="text-3xl font-semibold text-neutral-100">
          {t("achievementsTitle")}
        </h3>
        <div className="flex flex-col gap-8">
          {parsedAchievements.map((item, index) => (
            <EducationCard key={index} education={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
