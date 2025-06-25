import { formattedDate } from "@/utils/formattedDate";

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
  const initDate = education.initDate && formattedDate(education.initDate);
  const endDate = education.endDate && formattedDate(education.endDate);

  return (
    <div className="flex items-center gap-6 border-b-1 border-gray-700 pb-3">
      <img
        src={education.imagePath}
        alt={`${education.title} - ${education.institution}`}
        className="w-12 h-auto rounded-lg"
      />
      <div className="flex flex-col justify-between gap-1">
        <h4 className="font-semibold text-xl">
          {education.title} - {education.institution}
        </h4>
        <p className="font-medium text-neutral-200 text-lg">
          <time
            dateTime={education.initDate && education.initDate.toISOString()}
          >
            {initDate}
          </time>
          {education.endDate ? (
            <time dateTime={education.endDate.toISOString()}> - {endDate}</time>
          ) : (
            ` - ${education.status}`
          )}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
