import { ChevronDown } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="h-[calc(100dvh-6rem)] flex justify-between items-center gap-8">
      <h1 className="text-6xl">
        I'm <span className="font-semibold">Vitor Silva</span>
      </h1>

      <div className="flex flex-col justify-between items-center">
        <img
          src="/illustration.svg"
          alt="Man Illustration"
          className="flex-1"
        />
        <Link href="/#techs">
          <ChevronDown
            size={40}
            className="transition-all duration-300 rounded-full hover:text-primary hover:opacity-90"
          />
        </Link>
      </div>

      <h1 className="text-6xl font-semibold ">
        Front-End
        <br />
        Developer
      </h1>
    </div>
  );
};

export default HeroSection;
