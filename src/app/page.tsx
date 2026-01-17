import About from "@/components/about/About";
import Achievement from "@/components/achievement/Achievement";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";
import Testimonials from "@/components/testimonials/Testimonials";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/navItems";


export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col mx-auto sm:px-10 px-2 overflow-x-hidden">
      <div className="max-w-6xl w-full mx-auto">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Achievement />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
