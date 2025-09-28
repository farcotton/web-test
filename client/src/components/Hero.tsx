import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export function Hero() {
  return (
    <section id="about" className="py-24 px-8 bg-floral">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="polaroid-frame tape-corner">
              <Avatar className="w-48 h-48">
                <AvatarImage src="" alt="Profile" />
                <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">
                  FC
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-name">
              Hey there! 👋
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-bio">
              Welcome to my corner of the internet. I'm a passionate developer with a deep love for 
              open-source technology, Linux systems, and building things that matter. When I'm not 
              coding, you'll find me exploring the latest in tech, contributing to projects, or 
              diving deep into system administration.
            </p>
            <Card className="p-6 bg-muted/50">
              <p className="text-lg italic text-center">
                "The best way to predict the future is to invent it." - Alan Kay
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="scallop-separator"></div>
    </section>
  );
}