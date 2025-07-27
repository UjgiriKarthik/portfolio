import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  /*const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };*/
  const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, message } = formData;

  // Construct the email link
  const mailtoLink = `mailto:karthikujigiri@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  // Open the email client
  window.location.href = mailtoLink;
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="reveal-left">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="bg-glass border-glass-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="bg-glass border-glass-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    className="bg-glass border-glass-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="reveal-right space-y-8">
            {/* Contact Details */}
            {/*<div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">karthikujigiri@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+91 9502209650</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>*/}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">

                {/* Email */}
                <a href="mailto:karthikujigiri@gmail.com" className="flex items-center hover:opacity-90 transition">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">karthikujigiri@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+919502209650" className="flex items-center hover:opacity-90 transition">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+91 9502209650</p>
                  </div>
                </a>

                {/* Location (not clickable) */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Hyderabad, India</p>
                  </div>
                </div>

              </div>
            </div>


            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                
                {/* GitHub Button */}
                <a
                  href="https://github.com/UjgiriKarthik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="justify-start group h-16 w-full">
                    <Github className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                    <div className="text-left">
                      <p className="font-semibold">GitHub</p>
                      <p className="text-sm text-muted-foreground">@karthikujgiri</p>
                    </div>
                  </Button>
                </a>

                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/ujgiri-karthik-26424a264/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="justify-start group h-16 w-full">
                    <Linkedin className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Karthik Ujgiri</p>
                    </div>
                  </Button>
                </a>

              </div>
            </div>


            {/* Quick Response */}
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Quick Response</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out via LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;