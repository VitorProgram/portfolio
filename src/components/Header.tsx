"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import ToggleLang from "./ToggleLang";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("header"); // <- nome do arquivo JSON

  const links = [
    { text: t("home"), path: "/#home" },
    { text: t("techs"), path: "/#techs" },
    { text: t("work"), path: "/#works" },
    { text: t("education"), path: "/#education" },
    { text: t("about"), path: "/#about" },
    { text: t("contact"), path: "/#contact" },
  ];

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <header className="w-full h-24 flex justify-between items-center">
      <div className="flex gap-12 items-center">
        <Button
          variant="ghost"
          className="p-0 cursor-pointer"
          onClick={handleLogoClick}
        >
          <Image src="/logo.svg" alt="Vitor" width={120} height={75} />
        </Button>
        <ToggleLang />
      </div>

      <nav className="flex gap-8">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className="font-semibold transition-colors duration-300 hover:text-primary"
            data-text={link.text}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
