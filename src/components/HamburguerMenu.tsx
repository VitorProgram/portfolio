"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ToggleLang from "./ToggleLang";
import { useState } from "react";

const HamburgerMenu = () => {
  const t = useTranslations("header");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { text: t("techs"), path: "/#techs" },
    { text: t("work"), path: "/#works" },
    { text: t("education"), path: "/#education" },
    { text: t("about"), path: "/#about" },
    { text: t("contact"), path: "/#contact" },
  ];

  const handleClose = () => setIsOpen(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <button
          className="md:hidden p-2 rounded-md transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 mt-2 mr-2 bg-zinc-900 text-white shadow-lg border border-zinc-700 rounded-lg"
        align="end"
      >
        {links.map((link, index) => (
          <DropdownMenuItem
            key={index}
            asChild
            className="px-4 py-3 border-b border-zinc-800 last:border-none"
          >
            <Link
              href={link.path}
              className="w-full cursor-pointer border-b border-gray-500"
              onClick={handleClose}
            >
              {link.text}
            </Link>
          </DropdownMenuItem>
        ))}

        {/* ToggleLang precisa ser renderizado fora do DropdownMenuItem */}
        <div className="mt-2">
          <ToggleLang disableCloseOnSelect />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HamburgerMenu;
