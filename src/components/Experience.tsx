import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey in AI and data analytics
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-card border-primary/20 glow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Engineer Intern</h3>
                    <p className="text-primary-glow font-medium">Shaip</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Dec 2024 - Jan 2025</span>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Led QA and data analysis initiatives ensuring high-quality deliverables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Managed project timelines and coordinated cross-functional teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Implemented data-driven strategies for process optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
