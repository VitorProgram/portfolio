import { ChevronDown } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="h-[calc(100dvh-6rem-60px)] flex justify-between items-center">
      <h1 className="text-6xl flex-1">
        I'm <span className="font-semibold">Vitor Silva</span>
      </h1>

      <div className="flex w-full max-w-[450px] flex-col justify-between items-center flex-1">
        <img src="/illustration.svg" alt="Man Illustration" />
        <Link href="/#techs">
          <ChevronDown
            size={40}
            className="transition-all duration-300 rounded-full hover:text-primary hover:opacity-90"
          />
        </Link>
      </div>

      <h1 className="text-6xl font-semibold text-end flex-1">
        Front-End
        <br />
        Developer
      </h1>
    </div>
  );
};

export default HeroSection;
