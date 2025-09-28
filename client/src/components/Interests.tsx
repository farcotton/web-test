import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Code, Server, Cpu, Shield, Globe } from "lucide-react";

export function Interests() {
  const interests = [
    {
      icon: Terminal,
      title: "Gentoo Linux",
      description: "Deep passion for source-based distributions and system optimization",
      tags: ["Portage", "Kernel Compilation", "System Tuning"],
      featured: true
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Building robust applications and contributing to open-source projects",
      tags: ["JavaScript", "TypeScript", "Python", "Rust"]
    },
    {
      icon: Server,
      title: "System Administration",
      description: "Managing servers, automation, and infrastructure as code",
      tags: ["Docker", "Ansible", "Monitoring"]
    },
    {
      icon: Cpu,
      title: "Hardware & Performance",
      description: "Optimizing systems from the metal up for maximum efficiency",
      tags: ["Benchmarking", "Overclocking", "Power Management"]
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Implementing security best practices and privacy-focused solutions",
      tags: ["Encryption", "Hardening", "OPSEC"]
    },
    {
      icon: Globe,
      title: "Open Source",
      description: "Contributing to and maintaining open-source projects",
      tags: ["Git", "Community", "Collaboration"]
    }
  ];

  return (
    <section id="interests" className="py-24 px-8 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 relative vine-accent tracking-tight" data-testid="text-interests-title">
            ✿ Interests & Expertise ✿
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and topics I'm passionate about
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card 
              key={index} 
              className={`hover-elevate transition-all duration-300 ${
                interest.featured ? "ring-2 ring-primary/20 bg-primary/5" : ""
              }`}
              data-testid={`card-interest-${index}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <interest.icon className={`h-6 w-6 ${
                    interest.featured ? "text-primary" : "text-muted-foreground"
                  }`} />
                  <CardTitle className="text-lg">{interest.title}</CardTitle>
                </div>
                <CardDescription className="text-sm">
                  {interest.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interest.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs sticker-badge"
                      data-testid={`badge-tag-${tag.toLowerCase().replace(" ", "-")}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Gentoo highlight */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 floral-corners relative">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Terminal className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold font-mono tracking-tight" data-testid="text-gentoo-title">
                $ emerge --world
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Gentoo Linux isn't just an operating system to me—it's a philosophy of complete control, 
              optimization, and understanding every layer of the stack.
            </p>
            <Badge variant="outline" className="font-mono">
              USE="optimization performance customization"
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  );
}