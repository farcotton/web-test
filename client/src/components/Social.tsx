import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Twitter, Linkedin, Mail, MessageSquare, Rss } from "lucide-react";

export function Social() {
  const socialLinks = [
    {
      name: "GitHub",
      username: "@farcotton",
      description: "Open source projects and contributions",
      icon: Github,
      url: "https://github.com", // todo: replace with real URL
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "Twitter",
      username: "@farcotton",
      description: "Tech thoughts and daily musings",
      icon: Twitter,
      url: "https://twitter.com", // todo: replace with real URL
      color: "hover:text-blue-500"
    },
    {
      name: "LinkedIn",
      username: "farcotton",
      description: "Professional network and career updates",
      icon: Linkedin,
      url: "https://linkedin.com", // todo: replace with real URL
      color: "hover:text-blue-600"
    },
    {
      name: "Discord",
      username: "farcotton#1234",
      description: "Chat about tech and Linux",
      icon: MessageSquare,
      url: "#", // todo: replace with real Discord contact
      color: "hover:text-indigo-500"
    },
    {
      name: "Email",
      username: "hello@farcotton.org",
      description: "Direct contact for collaboration",
      icon: Mail,
      url: "mailto:hello@farcotton.org", // todo: replace with real email
      color: "hover:text-green-600"
    },
    {
      name: "RSS Feed",
      username: "/feed.xml",
      description: "Subscribe to my latest posts",
      icon: Rss,
      url: "/feed.xml", // todo: implement RSS feed
      color: "hover:text-orange-500"
    }
  ];

  const handleSocialClick = (url: string, name: string) => {
    console.log(`Opening ${name}: ${url}`);
    if (url.startsWith('http') || url.startsWith('mailto:')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="social" className="py-24 px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 relative vine-accent tracking-tight" data-testid="text-social-title">
            ✿ Connect With Me ✿
          </h2>
          <p className="text-lg text-muted-foreground">
            Find me across the web and let's collaborate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 cursor-pointer border-dotted border-2 border-accent/30"
              onClick={() => handleSocialClick(social.url, social.name)}
              data-testid={`card-social-${social.name.toLowerCase()}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <social.icon className={`h-6 w-6 text-muted-foreground transition-colors ${social.color}`} />
                  <div>
                    <CardTitle className="text-lg">{social.name}</CardTitle>
                    <CardDescription className="text-sm font-mono">
                      {social.username}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">
                  {social.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 bg-muted/50">
            <h3 className="text-xl font-semibold mb-2" data-testid="text-collaboration-title">
              Let's Build Something Amazing
            </h3>
            <p className="text-muted-foreground mb-4">
              Always interested in discussing new ideas, collaborating on projects, 
              or just chatting about the latest in tech and Linux.
            </p>
            <Button
              onClick={() => handleSocialClick("mailto:hello@farcotton.org", "Email")}
              data-testid="button-primary-contact"
            >
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}