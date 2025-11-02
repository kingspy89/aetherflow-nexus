import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Generative AI Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(12, 16, 31, 0.9), rgba(12, 16, 31, 0.95)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-card/50 border border-primary/30 rounded-full text-sm text-primary glow">
              AI/ML Undergraduate • Gujarat University
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            Malav <span className="gradient-text">Patel</span>
          </motion.h1>
          
          <div className="h-16 mb-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-primary-glow font-light"
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </motion.p>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Building intelligent systems with Generative AI, Multi-Cloud Integration, and Data-Driven Innovation
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <MagneticButton>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground glow-intense"
              >
                View Projects
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                Contact Me
              </Button>
            </MagneticButton>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-center gap-6"
          >
            <MagneticButton>
              <a
                href="https://github.com/kingspy89"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors glow"
              >
                <Github className="w-6 h-6" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://www.linkedin.com/in/malav-patel-766196302"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors glow"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="mailto:malav0003@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors glow"
              >
                <Mail className="w-6 h-6" />
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
