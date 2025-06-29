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
        <h3
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay="300"
          className="text-2xl sm:text-3xl font-semibold text-neutral-100"
        >
          {t("title")}
        </h3>
        <div className="flex flex-col gap-8">
          {parsedEducation.map((item, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${index * 150}`}
              data-aos-once="true"
            >
              <EducationCard education={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h3
          data-aos="fade"
          data-aos-delay="300"
          data-aos-once="true"
          className="text-2xl sm:text-3xl font-semibold text-neutral-100"
        >
          {t("achievementsTitle")}
        </h3>
        <div className="flex flex-col gap-8">
          {parsedAchievements.map((item, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${index * 150}`}
              data-aos-once="true"
            >
              <EducationCard education={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
