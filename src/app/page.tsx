import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <ScrollProgress />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Approach />
        <About />
        <Contact />
      </main>
    </div>
  );
}
