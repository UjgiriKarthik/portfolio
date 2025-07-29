import { 
  Code2, 
  Database, 
  Server, 
  Smartphone, 
  Globe, 
  GitBranch,
  Palette,
  Brain
} from "lucide-react";

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: Globe,
      gradient: "bg-gradient-primary",
      technologies: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap"]
    },
    {
      title: "Backend",
      icon: Server,
      gradient: "bg-gradient-secondary",
      technologies: ["Node.js", "Express.js", "Python"]
    },
    {
      title: "Database",
      icon: Database,
      gradient: "bg-gradient-accent",
      technologies: ["MongoDB", "SQL"]
    },
    {
      title: "Tools",
      icon: GitBranch,
      gradient: "bg-gradient-tech",
      technologies: ["Git", "GitHub", "VS Code"]
    }
  ];

  const mernStack = [
    { name: "MongoDB", icon: Database, gradient: "bg-gradient-accent" },
    { name: "Express.js", icon: Server, gradient: "bg-gradient-secondary" },
    { name: "React", icon: Code2, gradient: "bg-gradient-primary" },
    { name: "Node.js", icon: Server, gradient: "bg-gradient-tech" }
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* MERN Stack Highlight */}
        <div className="mb-16 reveal">
          <div className="glass-card p-8 text-center">
            <h3 className="text-3xl font-bold mb-8 text-foreground">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                MERN Stack Specialist
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {mernStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div 
                    key={tech.name}
                    className="flex flex-col items-center group hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-20 h-20 ${tech.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* All Technologies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-card p-6 h-full hover-lift">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${category.gradient} rounded-xl flex items-center justify-center mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.technologies.map((tech) => (
                      <div key={tech} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span className="text-muted-foreground hover:text-foreground transition-colors">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Skills */}
        <div className="mt-16 reveal px-4">
          <div className="glass-card p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-10 mt-6 text-center text-white">
              Interactive Skills Overview
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {[
                "React", "Node.js", "MongoDB", "Express", "JavaScript", "Python",
                "HTML5", "CSS3", "Git", "SQL", "Bootstrap", "GitHub"
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="text-center px-2 py-3 rounded-xl bg-white/5 backdrop-blur text-sm sm:text-base font-medium text-white shadow transition duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>




      </div>
    </section>
  );
};

export default TechStackSection;