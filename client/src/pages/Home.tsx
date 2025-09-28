import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Interests } from "@/components/Interests";
import { Social } from "@/components/Social";
import { Guestbook } from "@/components/Guestbook";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Interests />
        <Social />
        <Guestbook />
      </main>
      <Footer />
    </div>
  );
}