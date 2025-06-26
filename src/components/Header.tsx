"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import ToggleLang from "./ToggleLang";
import { useTranslations } from "next-intl";
import { useState } from "react";
import SideNav from "./SideNav";

const Header = () => {
  const t = useTranslations("header");
  const [showSideNav, setShowSideNav] = useState(false);

  const links = [
    { text: t("techs"), path: "/#techs" },
    { text: t("work"), path: "/#works" },
    { text: t("education"), path: "/#education" },
    { text: t("about"), path: "/#about" },
    { text: t("contact"), path: "/#contact" },
  ];

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleLinkClick = () => {
    setShowSideNav(true);
  };

  return (
    <>
      <header className="w-full h-24 flex justify-between items-center px-8">
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
              onClick={handleLinkClick}
              className="relative font-semibold text-muted-foreground transition-colors duration-300 hover:text-primary
              after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:h-[2px] after:w-1/2 after:-translate-x-1/2
              after:bg-neutral-100 after:rounded-full after:scale-x-0 after:origin-center
              after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </header>

      <SideNav isVisible={showSideNav} />
    </>
  );
};

export default Header;
