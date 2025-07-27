import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "NextWave Academy",
      date: "2023",
      description:
        "Comprehensive course covering MERN stack development, project management, and industry best practices.",
      badge: "🎓",
      link: "#", // Replace with real link when available
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "NPTEL",
      date: "2024",
      description:
        "Learned cloud architecture, deployment strategies, and service models including IaaS, PaaS, and SaaS.",
      badge: "📜",
      link: "https://drive.google.com/file/d/1NyaMpunLkM9AVzqGk6u-_-uaWbHp47eO/view?usp=drive_link",
    },
    {
      title: "Web Development Certification",
      issuer: "Pinnacle Labs",
      date: "2024",
      description:
        "Advanced React concepts, hooks, Context API, and modern development patterns.",
      badge: "⚛️",
      link: "https://drive.google.com/file/d/13DM7azJetCXMFdQgmWWO8nZt2PjUGuUw/view?usp=drive_link",
    },
    {
      title: "Web Development Certification",
      issuer: "Bharath Internship",
      date: "2023",
      description: "Built responsive websites using HTML, CSS, and JavaScript.",
      badge: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="HTML5 Logo"
          width="35"
          height="35"
        />
      ),
      link: "https://drive.google.com/file/d/1M-nU-5C3v51M8iyrccdRrr85xICj6qU7/view?usp=drive_link",
    },
  ];

  const achievements = [
    {
      title: "Dean's List",
      description:
        "Academic excellence recognition for maintaining high GPA",
      icon: "🏆",
    },
    {
      title: "Hackathon Finalist",
      description: "Top 10 finish in college-level coding competition",
      icon: "💻",
    },
    {
      title: "Open Source Contributor",
      description: "Active contributions to community projects",
      icon: "🌟",
    },
    {
      title: "Technical Mentorship",
      description: "Mentored junior students in web development",
      icon: "👨‍🏫",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center reveal">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`reveal ${
                  index % 2 === 0 ? "reveal-left" : "reveal-right"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-card p-6 hover-lift h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl mr-4">{cert.badge}</div>
                    {cert.link !== "#" ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover-glow"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    ) : (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-50 cursor-not-allowed"
                        disabled
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-primary font-semibold mb-2">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{cert.date}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="reveal">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-card p-6 text-center hover-lift h-full">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 reveal">
          <div className="glass-card p-8">
            <Award className="w-16 h-16 mx-auto mb-4 text-tech-stack" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I believe in lifelong learning and staying updated with the latest
              technologies. Currently pursuing advanced certifications in cloud
              computing and machine learning.
            </p>
            <Button variant="tech" size="lg">
              View All Credentials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
