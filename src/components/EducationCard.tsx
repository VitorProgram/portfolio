"use client";

import { useFormattedDate } from "@/utils/formattedDate";

interface Education {
  title: string;
  institution: string;
  status?: string;
  imagePath: string;
  initDate?: string | Date;
  endDate?: string | Date;
}

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
  const formatDate = useFormattedDate();

  const initDate = education.initDate ? formatDate(education.initDate) : null;
  const endDate = education.endDate ? formatDate(education.endDate) : null;

  return (
    <div className="flex items-center gap-6 border-b border-gray-700 pb-3">
      <img
        src={education.imagePath}
        alt={`${education.title} - ${education.institution}`}
        className="w-12 h-auto rounded-lg"
      />
      <div className="flex flex-col justify-between gap-1">
        <h4 className="font-semibold text-lg md:text-xl">
          {education.title} - {education.institution}
        </h4>
        <p className="font-medium text-neutral-200 text-md md:text-lg">
          {initDate && (
            <time dateTime={new Date(education.initDate!).toISOString()}>
              {initDate}
            </time>
          )}
          {endDate ? (
            <time dateTime={new Date(education.endDate!).toISOString()}>
              {" "}
              - {endDate}
            </time>
          ) : (
            ` - ${education.status}`
          )}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
