import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-5 h-5 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-tech-stack rounded-full animate-float opacity-70" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Karthik Ujgiri
            </span>
          </h1>
          
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 typing-effect">
              Full-Stack Developer | MERN Enthusiast | Tech Explorer
            </p>
            <p className="text-lg md:text-xl text-foreground/80 font-light">
              Transforming ideas into interactive realities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://drive.google.com/file/d/1P3sjkp2j2MZs7iq5kr7ySE0ZuNlYBZ9O/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="hero" className="group">
                <Download className="mr-2 group-hover:animate-bounce" />
                View Resume
              </Button>
            </a>

            <a href="#contact">
              <Button variant="glass" size="hero" className="group">
                <Mail className="mr-2 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover-glow" asChild>
              <a href="https://github.com/UjgiriKarthik" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover-glow" asChild>
              <a href="https://www.linkedin.com/in/ujgiri-karthik-26424a264/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover-glow" asChild>
              <a href="mailto:karthikujgiri@gmail.com">
                <Mail className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
