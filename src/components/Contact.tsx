import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "malav0003@gmail.com",
      href: "mailto:malav0003@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "malav-patel",
      href: "https://www.linkedin.com/in/malav-patel-766196302",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "kingspy89",
      href: "https://github.com/kingspy89",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, Gujarat",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on the next generation of AI solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-primary/20 glow text-center">
            <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
              I'm always open to discussing new projects, innovative ideas, or opportunities to contribute to cutting-edge AI initiatives. Whether you're looking for collaboration on Generative AI projects or need expertise in multi-cloud integration, feel free to reach out.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group ${
                    method.href === "#" ? "pointer-events-none" : ""
                  }`}
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="text-foreground font-medium">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground glow-intense"
              asChild
            >
              <a href="mailto:malav0003@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
