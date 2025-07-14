import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import FeaturedWork from "./components/FeaturedWork";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import ServiceSection from "./components/ServicesSection";
import StackToolsSection from "./components/StackToolsSection";
import TrustedSection from "./components/TrustedSection";
import CTASection from "./components/CATSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0d0d] text-white px-6 py-10 font-sansBody">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <FeaturedWork />
      <Experience />
      <AboutSection />
      <StackToolsSection />
      <TrustedSection />
      <CTASection />
    </div>
  );
}
