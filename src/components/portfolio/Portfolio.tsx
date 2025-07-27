import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import TechStackSection from "./TechStackSection";
import ProjectsSection from "./ProjectsSection";
import CertificationsSection from "./CertificationsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Portfolio = () => {
  useScrollAnimation();

  useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-glass-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Karthik Ujgiri
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#tech-stack" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;