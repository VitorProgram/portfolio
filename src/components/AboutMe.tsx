import { Linkedin } from "lucide-react";
import LinkButton from "./LinkButton";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center gap-8 justify-between pt-15 md:pt-20 pb-20"
      id="about"
    >
      <div className="flex flex-col gap-6 flex-2">
        <h3 className="font-bold text-[16px] uppercase">A Bit of Me</h3>
        <p className="text-4xl font-light">
          I’m Vitor, a curious guy who found in front-end development a way to
          express himself.{" "}
          <span className="font-semibold">
            I enjoy learning, exploring design and tech, thinking about how it
            all connects to everyday life.
          </span>
        </p>

        <Link href="https://linkedin.com/in/vitorprogram" target="_blank">
          <LinkButton className="hover:bg-[#0A66C2] hover:text-neutral-100 hover:border-[#0A66C2]">
            My Linkedin
            <Linkedin className="size-5" />
          </LinkButton>
        </Link>
      </div>

      <img
        src="/illustration-2.svg"
        alt="Tech Lover"
        className="flex-1 lg:max-w-147 w-full h-auto object-contain rounded-lg"
      />
    </section>
  );
};

export default AboutMe;
