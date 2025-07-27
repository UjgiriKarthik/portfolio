import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-background/95 backdrop-blur-lg border-t border-glass-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Karthik Ujgiri
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full-Stack Developer passionate about creating innovative web solutions 
              and bringing ideas to life through clean, efficient code.
            </p>
            <div className="flex space-x-4">
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>karthikujigiri@gmail.com</p>
              <p>Hyderabad, India</p>
              <p className="text-sm">Available for freelance work</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
            
            <span><span>Made with </span> by Karthik Ujgiri</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToTop}
              className="hover-glow"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50" />
    </footer>
  );
};

export default Footer;