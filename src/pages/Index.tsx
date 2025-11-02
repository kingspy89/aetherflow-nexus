import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ParticleField from "@/components/ParticleField";
import Scene3D from "@/components/Scene3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden cursor-none">
      <CustomCursor />
      <Suspense fallback={null}>
        <ParticleField />
        <Scene3D />
      </Suspense>
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
