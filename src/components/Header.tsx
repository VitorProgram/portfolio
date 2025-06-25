"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import path from "path";

const Header = () => {
  const links = [
    {
      text: "Home",
      path: "/#home",
    },
    {
      text: "Techs",
      path: "/#techs",
    },
    {
      text: "Work",
      path: "/#works",
    },
    {
      text: "Education",
      path: "/#education",
    },
    {
      text: "About",
      path: "/#about",
    },
    {
      text: "Contact",
      path: "/#contact",
    },
  ];

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <header className="w-full h-24 flex justify-between items-center">
      <Button
        variant="ghost"
        className="p-0 cursor-pointer"
        onClick={handleLogoClick}
      >
        <Image src="/logo.svg" alt="Vitor" width={120} height={75} />
      </Button>

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
