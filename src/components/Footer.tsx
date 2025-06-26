import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("footer");

  return (
    <footer className="h-20 mt-15 md:mt-20 flex items-center justify-between gap-8">
      <p className="text-neutral-100">{t("copyright")}</p>

      <div className="flex gap-8">
        <Link
          href="https://github.com/VitorProgram"
          target="_blank"
          className="bg-gray-950 h-10 w-10 grid place-items-center rounded-full transition-colors duration-300 hover:bg-neutral-100 hover:text-gray-900"
          aria-label="GitHub"
        >
          <Github size={25} />
        </Link>

        <Link
          href="https://linkedin.com/in/vitorprogram"
          target="_blank"
          className="bg-gray-950 h-10 w-10 grid place-items-center rounded-full transition-colors duration-300 hover:bg-neutral-100 hover:text-gray-900"
          aria-label="LinkedIn"
        >
          <Linkedin size={25} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
