import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectMern from "@/assets/project-mern.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Be-Consistent App",
      description:
        "A full-stack habit tracking application built with the MERN stack. Features user authentication, habit management, progress tracking, and data visualization to help users maintain consistency in their daily routines.",
      image: projectMern,
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/UjgiriKarthik/Be-Consistent",
      live: "https://be-consistent-gumjfq5yh-ujgirikarthiks-projects.vercel.app/",
      gradient: "bg-gradient-primary",
    },
    {
      title: "Restaurant Seat Booking System",
      description:
        "A comprehensive restaurant management system enabling customers to book tables online. Features real-time availability, table management, booking confirmations, and admin dashboard for restaurant owners.",
      image: projectRestaurant,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      github: "#",
      live: "#",
      gradient: "bg-gradient-secondary",
    },
    {
      title: "NextWave Academy Projects",
      description:
        "A collection of projects developed during my time at NextWave Academy, showcasing various aspects of full-stack development including responsive web design, API integration, and modern UI/UX principles.",
      image: projectMern,
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
      github: "#",
      live: "#",
      gradient: "bg-gradient-accent",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, demonstrating my skills in full-stack development
            and modern web technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`reveal ${index % 2 === 0 ? "reveal-left" : "reveal-right"}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div
                className={`project-card grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative overflow-hidden rounded-xl ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-glass backdrop-blur-sm text-foreground rounded-full text-sm border border-glass-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-tech-stack/20 text-tech-stack rounded-full text-sm hover:bg-tech-stack/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap justify-around gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="default" className="group">
                        <ExternalLink className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="group">
                        <Github className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                        View Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16 reveal">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions
            </p>
            <a
              href="https://github.com/UjgiriKarthik"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="tech" size="lg" className="group">
                <Github className="mr-2 group-hover:rotate-12 transition-transform" />
                View All Projects
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
