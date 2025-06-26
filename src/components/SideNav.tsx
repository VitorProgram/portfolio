"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Cpu, Briefcase, GraduationCap, User, Mail, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const navItems = [
  { icon: <Home className="size-6" />, path: "/#home", label: "Home" },
  { icon: <Cpu className="size-6" />, path: "/#techs", label: "Techs" },
  {
    icon: <Briefcase className="size-6" />,
    path: "/#works",
    label: "Work",
  },
  {
    icon: <GraduationCap className="size-6" />,
    path: "/#education",
    label: "Education",
  },
  { icon: <User className="size-6" />, path: "/#about", label: "About" },
  {
    icon: <Mail className="size-6" />,
    path: "/#contact",
    label: "Contact",
  },
];

interface SideNavProps {
  isVisible: boolean;
}

const SideNav = ({ isVisible }: SideNavProps) => {
  const [showOnScroll, setShowOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece somente se rolou mais de 100px
      setShowOnScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldShow = isVisible && showOnScroll;

  return (
    <Card
      className={clsx(
        "fixed top-1/2 hidden xl:flex -translate-y-1/2 right-4 z-50 p-2 flex-col items-center gap-3 shadow-lg transition-opacity duration-500",
        {
          "opacity-100 pointer-events-auto": shouldShow,
          "opacity-0 pointer-events-none": !shouldShow,
        }
      )}
    >
      {navItems.map((item) => (
        <Link key={item.path} href={item.path}>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground cursor-pointer transition-colors duration-300 hover:text-primary"
          >
            {item.icon}
          </Button>
        </Link>
      ))}
    </Card>
  );
};

export default SideNav;
