import EducationCard from "./EducationCard";

const EducationSection = () => {
  const education: Education[] = [
    {
      title: "Systems Analysis and Development",
      institution: "Uniamérica Descomplica",
      imagePath: "/education/descomplica.svg",
      status: "Studying",
      initDate: new Date(2025, 0, 1), // (ano, mês, dia) - janeiro: mês 0
    },
    {
      title: "Systems Development Technician",
      institution: "ETE",
      imagePath: "/education/ete.svg",
      status: "Completed",
      initDate: new Date(2023, 5, 1),
      endDate: new Date(2024, 11, 1),
    },
    {
      title: "Front-End Developer",
      institution: "Onebit Code",
      imagePath: "/education/onebit.svg",
      status: "Completed",
      initDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 1),
    },
    {
      title: "Bootcamp Java + Spring Boot",
      institution: "Dio",
      imagePath: "/education/dio.svg",
      status: "Studying",
      initDate: new Date(2025, 1, 1),
    },
  ];

  const achievements: Education[] = [
    {
      title:
        "1st Place and Scientific and Technological Initiation Scholarship",
      institution: "UFPE",
      imagePath: "/education/ufpe.svg",
      initDate: new Date(2024, 5, 1),
      endDate: new Date(2024, 11, 1),
    },
    {
      title: "Scientific Initiation Scholarship, Verbalize",
      institution: "Facepe",
      imagePath: "/education/facepe.svg",
      initDate: new Date(2024, 9, 1),
      endDate: new Date(2025, 1, 1),
    },
  ];

  return (
    <div className="flex flex-col gap-16 pt-15 md:pt-20">
      <div className="flex flex-col gap-8">
        <h3 className="text-3xl font-semibold text-neutral-100">Education</h3>
        <div className="flex flex-col gap-8 " id="education">
          {education.map((item, index) => (
            <EducationCard key={index} education={item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h3 className="text-3xl font-semibold text-neutral-100">
          Achievements
        </h3>
        <div className="flex flex-col gap-8 " id="education">
          {achievements.map((item, index) => (
            <EducationCard key={index} education={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
