import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "SQL", "Java", "R", "C", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "AI/ML",
      skills: ["Generative AI", "Prompt Engineering"],
    },
    {
      title: "Cloud & Tools",
      skills: ["Google Cloud", "Oracle Cloud", "Firebase", "GitHub", "VS Code"],
    },
    {
      title: "Data Science",
      skills: ["Pandas", "NumPy", "Statistical Analysis", "Visualization"],
    },
    {
      title: "Automation",
      skills: ["n8n Workflows", "Telegram Bot Integration", "Process Automation"],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive toolkit for building intelligent systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all hover:glow"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm bg-secondary/50 text-foreground border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
