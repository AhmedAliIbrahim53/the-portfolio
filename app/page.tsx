import SkillsSection from "./components/home-components/SkillsSection";
import FeaturedProjectsSection from "./components/home-components/FeaturedProjectsSection";
import AboutMeSection from "./components/home-components/AboutMeSection";
import WelcomeSection from "./components/home-components/WelcomeSection";
import ContactMeSection from "./components/home-components/ContactMeSection";

export default function Home() {
  return (
    <div className="text-center">
      <title>Home | Ahmed Ali</title>
      <WelcomeSection />
      <FeaturedProjectsSection />
      <div className="md:container mx-auto mb-16 px-4 flex flex-col md:flex-row">
        <AboutMeSection />
        <SkillsSection />
      </div>
      <ContactMeSection />
    </div>
  );
}
