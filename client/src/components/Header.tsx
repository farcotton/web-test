import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dotted border-accent/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-4xl flex h-16 items-center justify-between px-8">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold text-primary tracking-tight">✿ farcotton.org ✿</h1>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("interests")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-interests"
            >
              Interests
            </button>
            <button
              onClick={() => scrollToSection("social")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-social"
            >
              Social
            </button>
            <button
              onClick={() => scrollToSection("guestbook")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-guestbook"
            >
              Guestbook
            </button>
          </nav>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          data-testid="button-theme-toggle"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}