import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TruthLens",
      subtitle: "AI-Powered Misinformation Detection System",
      description:
        "Developed with Python, Streamlit, GCP, and Gemini API. Integrated OpenAI and Gemini for real-time NLP and achieved 85% detection accuracy.",
      tech: ["Python", "Streamlit", "GCP", "Gemini API", "OpenAI", "NLP"],
      github: "#",
      live: "#",
    },
    {
      title: "CrediScope",
      subtitle: "Smart Credit Scoring Platform",
      description:
        "Designed real-time analytics and credit scoring using Google APIs and Firebase. Deployed fully functional app with cloud-backed intelligence.",
      tech: ["Google APIs", "Firebase", "Real-time Analytics", "Cloud Integration"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Intelligent systems built with cutting-edge AI and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all hover:glow group"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary-glow font-medium">{project.subtitle}</p>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground"
                  asChild
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
