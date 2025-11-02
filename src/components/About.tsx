import { Card } from "@/components/ui/card";
import { Brain, Cloud, Code, Database } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Specialist",
      description: "Neural Networks, NLP, Generative AI",
    },
    {
      icon: Cloud,
      title: "Multi-Cloud Expert",
      description: "Google Cloud, Oracle Cloud, Firebase",
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Python, JavaScript, React, SQL",
    },
    {
      icon: Database,
      title: "Data Scientist",
      description: "Pandas, NumPy, Statistical Analysis",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate AI/ML undergraduate with strong academic performance and hands-on experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="p-8 bg-card border-primary/20 glow">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Currently pursuing <span className="text-primary font-semibold">BSc in Artificial Intelligence & Machine Learning</span> at Gujarat University (Sestech Campus) with an impressive GPA of 9.3 & 9.05.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I specialize in <span className="text-primary font-semibold">Generative AI, Data Science, and Cloud Integration</span>, with experience in building intelligent systems, automating workflows, and leveraging multi-cloud AI platforms. My focus is on applied AI engineering and data-driven innovation that creates real-world impact.
            </p>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card border-primary/10 hover:border-primary/30 transition-all hover:glow group">
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
