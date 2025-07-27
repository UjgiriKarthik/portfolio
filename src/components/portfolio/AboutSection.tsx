import { GraduationCap, BookOpen, Gamepad2, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate full-stack developer dedicated to creating innovative digital solutions
            and transforming complex problems into elegant, user-friendly applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="reveal-left">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As a Computer Science & Engineering student specializing in Data Science, 
                I'm passionate about leveraging technology to solve real-world problems. 
                My journey in full-stack development has been driven by curiosity and 
                a constant desire to learn and adapt to new technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in writing clean, efficient code and creating intuitive user 
                experiences that make a difference. Every project is an opportunity to 
                push boundaries and explore innovative solutions.
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="reveal-right">
            <div className="grid grid-cols-1 gap-6">
              {/* Education */}
              <div className="glass-card p-6 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Education</h4>
                </div>
                <p className="text-muted-foreground">
                  <strong>B.Tech in Computer Science & Engineering (Data Science)</strong><br />
                  Institute of Aeronautical Engineering
                </p>
              </div>

              {/* Hobbies */}
              <div className="glass-card p-6 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Hobbies</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Reading books</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Watching cricket</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Playing games</span>
                </div>
              </div>

              {/* Values */}
              <div className="glass-card p-6 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-tech rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Core Values</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-tech-stack/20 text-tech-stack rounded-full text-sm">Self-motivated</span>
                  <span className="px-3 py-1 bg-tech-stack/20 text-tech-stack rounded-full text-sm">Fast learner</span>
                  <span className="px-3 py-1 bg-tech-stack/20 text-tech-stack rounded-full text-sm">Adaptable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;