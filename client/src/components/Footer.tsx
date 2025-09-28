import { Separator } from "@/components/ui/separator";
import { Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-8 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm" data-testid="text-copyright">
              © {currentYear} farcotton.org
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span data-testid="text-built-with">
              Built with ❤️ and lots of coffee
            </span>
            <span className="font-mono" data-testid="text-powered-by">
              Powered by Gentoo Linux
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}