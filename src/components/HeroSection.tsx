import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const HeroSection = async () => {
  const t = await getTranslations("heroSection");

  return (
    <div
      id="heroSection"
      className="relative h-[calc(100dvh-6rem-60px)] px-4 flex items-center justify-between"
    >
      {/* 📱 Imagem de fundo no mobile */}
      <div className="absolute inset-0 lg:hidden opacity-15 z-0">
        <img
          src="/illustration.svg"
          alt={t("altImage")}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 💻 Layout normal para telas grandes */}
      <div className="hidden lg:flex flex-1 text-6xl">
        <h1>
          {t("intro")}{" "}
          <span className="font-semibold text-primary">{t("name")}</span>
        </h1>
      </div>

      <div className="hidden lg:flex flex-col items-center justify-between w-full max-w-[450px] flex-1">
        <img src="/illustration.svg" alt={t("altImage")} />
        <Link href="/#techs">
          <ChevronDown
            size={40}
            className="transition-all duration-300 mt-4 hover:text-primary hover:opacity-90"
          />
        </Link>
      </div>

      <div className="hidden lg:flex flex-1 justify-end text-6xl font-semibold text-end">
        <h1>
          {t("titleLine1")}
          <br />
          {t("titleLine2")}
        </h1>
      </div>

      {/* 📱 Layout mobile */}
      <div className="lg:hidden relative z-10 flex flex-col items-center justify-center text-center w-full h-full gap-6">
        <div>
          <h1 className="text-4xl sm:text-5xl font-normal">
            {t("intro")}{" "}
            <span className="font-semibold text-primary">{t("name")}</span>
          </h1>

          <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>
        </div>

        <Link href="/#techs">
          <ChevronDown
            size={36}
            className="transition-all duration-300 hover:text-primary hover:opacity-90 mt-6"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
