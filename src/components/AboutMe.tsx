import { Github, Linkedin } from "lucide-react";
import LinkButton from "./LinkButton";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const AboutMe = async () => {
  const t = await getTranslations("about");

  return (
    <section
      className="flex flex-col md:flex-row items-center gap-8 justify-between pt-15 md:pt-20 pb-20 min-h-[80vh]"
      id="about"
    >
      <div className="flex flex-col gap-6 flex-2">
        <h3 data-aos="fade" className="font-bold text-[16px] uppercase">
          {t("title")}
        </h3>
        <p
          data-aos="fade-down"
          className="text-xl sm:text-3xl md:text-4xl font-light"
        >
          {t("content")}{" "}
          <span className="font-semibold">{t("mainContent")}</span>
        </p>

        <div className="flex gap-4 sm:gap-6 flex-wrap">
          <Link
            data-aos="zoom-in"
            href="https://linkedin.com/in/vitorprogram"
            target="_blank"
          >
            <LinkButton className="hover:bg-[#0A66C2] hover:text-neutral-100 hover:border-[#0A66C2]">
              {t("buttons.linkedin")}
              <Linkedin className="size-5" />
            </LinkButton>
          </Link>

          <Link
            data-aos="zoom-in"
            data-aos-delay="150"
            href="https://github.com/VitorProgram"
            target="_blank"
          >
            <LinkButton className="hover:bg-neutral-100 hover:text-gray-900 hover:border-neutral-100">
              {t("buttons.github")}
              <Github className="size-5" />
            </LinkButton>
          </Link>
        </div>
      </div>

      <img
        data-aos="slide-left"
        data-aos-once="true"
        src="/illustration-2.svg"
        alt="Tech Lover"
        className="flex-1 lg:max-w-147 w-full h-auto object-contain rounded-lg"
      />
    </section>
  );
};

export default AboutMe;
