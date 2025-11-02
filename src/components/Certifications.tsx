import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure Generative AI Professional",
      issuer: "Oracle",
      year: "2025",
      logo: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg",
    },
    {
      title: "Oracle Cloud AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      logo: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg",
    },
    {
      title: "Google Cloud Generative AI Certification",
      issuer: "Google Cloud",
      year: "2025",
      logo: "https://www.gstatic.com/devrel-devsite/prod/v2210deb8920cd4a55bd580441aa58e7853afc04b39a9d9ac4198e1cd7fbe04ef/cloud/images/cloud-logo.svg",
    },
    {
      title: "CS50's Introduction to Programming with Python",
      issuer: "Harvard University",
      year: "2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg",
    },
    {
      title: "Data Analytics Virtual Project",
      issuer: "Deloitte",
      year: "2025",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional credentials from leading tech companies and institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-primary/10 hover:border-primary/30 transition-all hover:glow group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 leading-tight">
                {cert.title}
              </h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary-glow">{cert.issuer}</span>
                <span className="text-muted-foreground">{cert.year}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
