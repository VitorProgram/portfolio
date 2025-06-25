import AboutMe from "@/components/AboutMe";
import EducationSection from "@/components/EducationSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Technologies from "@/components/Thecnologies";
import Works from "@/components/Works";

const Home = () => {
  return (
    <div className="container m-auto max-w-[1440px] px-4">
      <Header />
      <HeroSection />
      <Technologies />
      <Works />
      <EducationSection />
      <AboutMe />
    </div>
  );
};

export default Home;
