import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-2">
      <div className="max-w-6xl w-full mx-auto">
        <FloatingNav navItems={[
          { name: 'Home', link: '/', icon: <FaHome /> }
        ]} />
        <Hero />
        <About />
        <Projects />
      </div>
    </main>
  );
}
