import { motion } from "framer-motion";
import ProjectCard3D from "./ProjectCard3D";

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
    <section id="projects" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Intelligent systems built with cutting-edge AI and cloud technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard3D key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
