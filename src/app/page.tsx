import Grid from "@/components/grid/Grid";
import Hero from "@/components/hero/Hero";
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
        <Grid />
      </div>
    </main>
  );
}
