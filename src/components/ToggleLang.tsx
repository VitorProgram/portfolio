"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation"; // Next 13 app router
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const languages = [
  { value: "pt", label: "pt-br 🇧🇷" },
  { value: "en", label: "en-us 🇺🇸" },
];

interface ToggleLangProps {
  disableCloseOnSelect?: boolean;
}

const ToggleLang = ({ disableCloseOnSelect = false }: ToggleLangProps) => {
  const router = useRouter();
  const pathname = usePathname(); // Pega a rota atual sem query params
  const searchParams = useSearchParams(); // Para manter query params
  const [open, setOpen] = React.useState(false);

  // Detecta o locale atual baseado na URL (assumindo o formato /en/alguma-rota ou /pt/alguma-rota)
  const currentLocale = pathname?.split("/")[1] || "pt";

  const [value, setValue] = React.useState(currentLocale);

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = React.useState<number>(0);

  React.useEffect(() => {
    if (open && buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, [open]);

  const handleSelect = (newLocale: string) => {
    setValue(newLocale);
    if (!disableCloseOnSelect) {
      setOpen(false); // Só fecha se não for usado em menu que deve ficar aberto
    }

    // Atualiza o locale da URL
    const segments = pathname.split("/").slice(2);
    const search = searchParams.toString();
    const newPath = `/${newLocale}/${segments.join("/")}${
      search ? "?" + search : ""
    }`;

    router.push(newPath);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={buttonRef}
          role="combobox"
          aria-expanded={open}
          className="justify-between bg-transparent transition-colors duration-300 hover:bg-gray-800 cursor-pointer"
        >
          {value ? languages.find((lang) => lang.value === value)?.label : "🌐"}{" "}
          <ChevronsUpDown className="opacity-50 h-4 w-4 ml-2" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="p-0 bg-zinc-900 text-white border border-zinc-700 rounded-md shadow-lg"
        style={{ width: buttonWidth }}
      >
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={() => handleSelect(language.value)}
                >
                  {language.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === language.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ToggleLang;
