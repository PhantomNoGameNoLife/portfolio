import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-2">
      <div className="max-w-6xl w-full mx-auto">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Testimonials />
      </div>
    </main>
  );
}
