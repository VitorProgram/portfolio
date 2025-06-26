import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const HeroSection = async () => {
  const t = await getTranslations("heroSection");
  return (
    <div className="h-[calc(100dvh-6rem-60px)] flex justify-between items-center">
      <h1 className="text-6xl flex-1">
        {t("intro")} <span className="font-semibold">{t("name")}</span>
      </h1>

      <div className="flex w-full max-w-[450px] flex-col justify-between items-center flex-1">
        <img src="/illustration.svg" alt={t("altImage")} />
        <Link href="/#techs">
          <ChevronDown
            size={40}
            className="transition-all duration-300 rounded-full hover:text-primary hover:opacity-90"
          />
        </Link>
      </div>

      <h1 className="text-6xl font-semibold text-end flex-1">
        {t("titleLine1")}
        <br />
        {t("titleLine2")}
      </h1>
    </div>
  );
};

export default HeroSection;
